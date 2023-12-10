
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BillingModule } from './billing/billing.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { AnalysisModule } from './analysis/analysis.module';
import { AlertModule } from './alert/alert.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    BillingModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    BillingModule,
    PrismaModule,
    AdminModule,
    AnalysisModule,
    AlertModule,
    MailModule,
  ],
})
export class AppModule { }
