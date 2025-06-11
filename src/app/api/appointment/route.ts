import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();
   console.log('Received appointment:', data);

  // 1. Configure Mailtrap SMTP
  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'eaeca8a667cc0e', 
      pass: 'ce83f8f0efa7d8', // replace this
    },
  });

  // 2. Construct email content
  const mailOptions = {
    from: '"Medwin Appointments" <bandanasuwal367@gmail.com>',
    to: 'abc@gmail.com', 
    subject: 'New Appointment Request',
    text: `
      Patient Name: ${data.patientName}
      Doctor's Name: ${data.doctorName}
      Department Name: ${data.departmentName}
      Phone Number: ${data.phone}
      Department: ${data.department}
      Date: ${data.date}
    `,
  };

  try {
    // 3. Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Email sending failed' });
  }
}
