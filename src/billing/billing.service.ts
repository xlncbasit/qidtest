import {
  ForbiddenException,
  Injectable, UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateBillingDto,
  UpdateBillingDto,
} from './dto';

@Injectable()
export class BillingService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBillingDto) {
    return this.prisma.billing.create({ data });
  }

  async findAll() {
    return this.prisma.billing.findMany();
  }

  async findOne(id: number) {
    return this.prisma.billing.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateBillingDto) {
    return this.prisma.billing.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.billing.delete({ where: { id } });
  }
}