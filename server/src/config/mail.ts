import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (to:string, subject:string, body:string) => {
  console.log(to)
  const info = await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: to,
    subject: subject,
    // text: "Hello world?", // plain text body
    html: body
  });
};