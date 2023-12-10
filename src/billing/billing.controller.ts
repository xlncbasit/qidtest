import {
  Body,
  Controller,
  Delete,
  Get,
  Put,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { JwtGuard } from '../auth/guard';
import { BillingService } from './billing.service';
import { PrismaClient } from '@prisma/client'
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '@prisma/client';
import {
  CreateBillingDto,
  UpdateBillingDto,
} from './dto';
import { create } from 'domain';


@UseGuards(JwtGuard, RolesGuard)
@Controller('billings')
export class BillingController {
  constructor(
    private billingService: BillingService,
  ) {}
  
  @Post()
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  create(@Body() createBillingDto: CreateBillingDto) {
    return this.billingService.create(createBillingDto);
  } 

  @Get()
  findAll() {
    return this.billingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billingService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  update(@Param('id') id: string, @Body() updateBillingDto: UpdateBillingDto) {
    return this.billingService.update(+id, updateBillingDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.billingService.remove(+id);
  }
}

  

