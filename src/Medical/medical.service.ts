import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Medical } from '../schemas/medical.schema';
import { createMedicalDto } from './Dto/createMedical.dto';

@Injectable()
export class MedicalService {
  constructor(
    @InjectModel(Medical.name) private medicalModel: Model<Medical>,
  ) {}
  createMedical(createMedicalDto: createMedicalDto) {
    const newMedical = new this.medicalModel(createMedicalDto);
    return newMedical.save();
  }

  fetchMedical() {
    return this.medicalModel.find().exec();
  }

  async updatingMedical(id: string, updateBody: Partial<any>) {
    const updated = await this.medicalModel.findByIdAndUpdate(
      id,
      { $set: updateBody },
      {
        new: true,
      },
    );
    if (!updated)
      throw new NotFoundException(`User with id ${id} Doesn't found`);
    return updated;
  }
}
