import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', 
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'xyz@gmail.com', 
        pass: 'password', 
      },
    });
  }

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'xyz@gmail.com',  
      to,  
      subject,  
      text, 
    };

    return this.transporter.sendMail(mailOptions);
  }
}