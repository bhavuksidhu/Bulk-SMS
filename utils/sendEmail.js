export async function sendEmailToEmployee(senderEmail, receiverEmail, emailSubject, emailContent) {
    try {
      if (!process.env.NODEMAILER_USER || !process.env.NODEMAILER_PASS) {
        throw new Error("Missing Nodemailer credentials. Please set NODEMAILER_USER and NODEMAILER_PASS.");
      }
  
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS,
        },
      });
  
      const mailOptions = {
        from: senderEmail,
        to: receiverEmail,
        subject: emailSubject,
        html: emailContent, // Using HTML format
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.response);
      return true;
    } catch (error) {
      console.error("Error sending email:", error.message);
      return false;
    }
}