import { sendEmailToEmployee } from "../utils/SendEmail";

export const getEmailData = async (req, res) => {
  try {
    const { emailMessage, emailSubject, userData, senderEmail } = req.body;
    const senEmailsPromise = userData.map(async (item, index) => {
      await sendEmailToEmployee(
        senderEmail,
        item.email,
        emailSubject,
        emailMessage
      );
    });

    await Promise.all(senEmailsPromise)
    res.status(200).json({
      msg:"All Email send successfully"
    });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};
