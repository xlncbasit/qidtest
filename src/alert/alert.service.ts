import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { addDays } from 'date-fns';
import { MailService } from '../mail/mail.service';
import * as cron from 'node-cron';


@Injectable()
export class AlertService {
constructor(private prisma: PrismaService, private MailService: MailService) {}

  async getBillingsWithPaymentDeadlineIn3Days() {
    const dateIn3Days = addDays(new Date(), 3);

    return this.prisma.service.findMany({
      where: {
        billingdate: {
          equals: dateIn3Days,
        },
      },
      include: {
        user: true,
      },
    });
  }



async sendAlerts() {
    const services = await this.getBillingsWithPaymentDeadlineIn3Days();

    for (const service of services) {
        const message = `Your payment for ${service.nameofservice} is due in 3 days.`;

        // Send an email to the user
        this.MailService.sendMail(service.user.email, 'Payment Due Soon', message);

        // If the user is not an admin, also send an email to the admin
        if (service.user.role !== 'ADMIN') {
            this.MailService.sendMail('admin@example.com', 'Payment Due Soon', message);
        }
    }
}
}