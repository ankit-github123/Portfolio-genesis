import Nodemailer from "nodemailer";
export const GET = async () => {
  console.log(
    "envs",
    process.env.NODEMAIL_EMAIL,
    process.env.NODEMAIL_PASSWORD
  );
  const transporter = Nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.NODEMAIL_EMAIL,
      pass: process.env.NODEMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: "portfoliogenesistech@gmail.com",
    to: "portfoliogenesistech@gmail.com", // Recipient's email address
    subject: "Hello, World!", // Email subject
    text: "This is a test email sent from Nodemailer.", // Email text
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
  return new Response(JSON.stringify("ankit"), { status: 200 });
};
