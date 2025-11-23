/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createCredentialDto } from './Dto/createCredential.dto';
import { Credential } from 'src/schemas/credential.schema';
import { UpdateCredentialDto } from './Dto/updateCredential.dto';

@Injectable()
export class credentialService {
  constructor(
    @InjectModel(Credential.name) private credentialModel: Model<Credential>,
  ) {}
  createCredential(createCredentialDto: createCredentialDto) {
    const newUser = new this.credentialModel(createCredentialDto);
    return newUser.save();
  }
  fetchingCredential() {
    return this.credentialModel.find().exec();
  }
  async updatingCredential(id: string, body: UpdateCredentialDto) {
    const updated = await this.credentialModel.findByIdAndUpdate(
      id,
      {
        $push: {
          AppointmentDates: { $each: body.AppointmentDates || [] },
          patientInfos: { $each: body.patientInfos || [] },
        },
      },
      {
        new: true,
      },
    );

    if (!updated)
      throw new NotFoundException(`user with the id ${id} not found`);
    return updated;
  }
  async deletingCredential(id: string) {
    const deleted = await this.credentialModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException(`user with ${id} id not found`);
    return { message: 'Credential Deleted Successfully' };
  }

  async verifyCredentials(passKey: string) {
    try {
      const user = await this.credentialModel.findOne({ passKey }).exec();
      if (!user) {
        return {
          success: false,
          error: 'Invalid Passkey',
        };
      }
      return {
        success: true,
        user: {
          fullName: user.Full_Name,
          roleType: user.roleType,
          speciality: user.Speciality,
          image: user.image,
          experienceYear: user.experienceYear,
        },
      };
    } catch (error) {
      return {
        success: false,
        error: 'Authentication Failed',
      };
    }
  }

  async getUserByName(name: string) {
    try {
      console.log('🔍 Searching for:', name);

      const nameMappings: { [key: string]: string } = {
        'dr-fatma-al-sayed': 'Dr. Fatma Al-Sayed',
      };

      const exactName =
        nameMappings[name] ||
        name.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

      console.log('🔍 Exact name to search:', exactName);

      // Try exact match
      let user = await this.credentialModel
        .findOne({ Full_Name: exactName })
        .exec();

      if (!user) {
        // Try case-insensitive exact match
        user = await this.credentialModel
          .findOne({
            Full_Name: { $regex: new RegExp(`^${exactName}$`, 'i') },
          })
          .exec();
      }

      if (!user) {
        // Last resort: search for "Fatma" in any part of the name
        user = await this.credentialModel
          .findOne({
            Full_Name: { $regex: /fatma/i },
          })
          .exec();
      }

      if (user) {
        console.log('✅ User found:', user.Full_Name);
        return {
          success: true,
          user: {
            fullName: user.Full_Name,
            roleType: user.roleType,
            speciality: user.Speciality,
            experienceYear: user.experienceYear,
            sex: user.Sex,
            image: user.image,
            appointmentDates: user.AppointmentDates,
            patientInfos: user.patientInfos,
          },
        };
      }

      const allUsers = await this.credentialModel.find({}, 'Full_Name').exec();
      const allUserNames = allUsers.map((u) => u.Full_Name);

      return {
        success: false,
        error: `User "${name}" not found. Available: ${JSON.stringify(allUserNames)}`,
      };
    } catch (error) {
      console.error('Error in getUserByName:', error);
      return { success: false, error: 'Failed to fetch user data' };
    }
  }

  async updatePatientInfo(patientId: string, updateData: any) {
    const setQuery = {};
    for (const key in updateData) {
      setQuery[`patientInfos.$.${key}`] = updateData[key];
    }

    const updated = await this.credentialModel.updateOne(
      { 'patientInfos._id': patientId },
      { $set: setQuery },
    );

    if (!updated.modifiedCount) {
      throw new NotFoundException(`Patient with id ${patientId} not found`);
    }

    return { message: 'Patient info updated', updated };
  }

  async getCredentialById(id: string) {
    const credential = await this.credentialModel.findById(id).exec();
    if (!credential) {
      throw new NotFoundException(`Credential with id ${id} not found`);
    }
    return credential;
  }

  async updateAppointmentDates(id: string, appointmentDates: Date[]) {
    const updated = await this.credentialModel.findByIdAndUpdate(
      id,
      {
        $set: { AppointmentDates: appointmentDates },
      },
      {
        new: true,
      },
    );

    if (!updated)
      throw new NotFoundException(`user with the id ${id} not found`);
    return updated;
  }
}
