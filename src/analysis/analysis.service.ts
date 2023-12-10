import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalysisService {
  constructor(private prisma: PrismaService) {}

  async getAllBillingsWithCosts() {
    return this.prisma.service.findMany({
      select: {
        nameofservice: true,
        costofservice: true,
      },
    });
  }
}