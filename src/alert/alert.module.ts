import { Module } from '@nestjs/common';
import { AlertController } from './alert.controller';
import { AlertService } from './alert.service';
import { PrismaService } from '../prisma/prisma.service';
import { MailModule } from '../mail/mail.module';


@Module({
  imports: [MailModule],
  controllers: [AlertController],
  providers: [AlertService, PrismaService]
})
export class AlertModule {}
