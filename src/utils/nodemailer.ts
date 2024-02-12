import nodemailer from "nodemailer";

interface emailFunctionProps {
  email: string;
  html: string;
  subject: string;
  text: string;
}

// SMTP (sending) server details
const smtpServer = "smtp.titan.email";
const smtpPort = 587;

// IMAP (receiving) server details
const imapServer = "imap.titan.email";
const imapPort = 993;

async function sendEmail(props: emailFunctionProps) {
  const transporter = nodemailer.createTransport({
    host: smtpServer,
    port: smtpPort,
    auth: {
      user: import.meta.env.OUTLOOK_EMAIL,
      pass: import.meta.env.OUTLOOK_PASSWORD,
    },
  });

  // Message object
  const message = {
    from: import.meta.env.OUTLOOK_EMAIL,
    to: props.email,
    subject: props.subject,
    text: props.text,
    html: props.html,
  };

  const info = await transporter.sendMail(message);
  console.log("Message sent successfully as %s", info.messageId);

  console.log({ info });
  return info;
}

export { sendEmail };
