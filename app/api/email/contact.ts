import nodemailer from "nodemailer";

export default async function ContactAPI(
  req: { body: { name: any; email: any; message: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): any; new (): any };
    };
  }
) {
  const { name, email, message } = req.body;

  const user = process.env.user;

  const data = {
    name,
    email,
    message,
  };

  const transporter = nodemailer.createTransport({
    host: "email-smtp.us-east-1.amazonaws.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "support@saherasoftware.com",
      replyTo: email,
      subject: `Contact form submission from ${name} `,
      html: `
        <p>Name:${name}</p>
        <p>Email:${email}</p>
        <p>Message:${message}</p>
        `,
    });

    console.log("Message sent:", mail.messageId);

    return res.status(200).json({ message: "sucess" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Please try again" });
  }
}
