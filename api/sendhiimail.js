// api/sendhiimail.js
import transporter from '../config.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const mailOptions = {
      from: process.env.email,
      to: 'madhugowthami17@gmail.com',
      subject: 'From Portfolio',
      html: `<h1>Message: Hii</h1>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Message Sent Successfully!' });
    } catch (error) {
      console.error("Send Email Error:", error);
      res.status(500).json({ success: false, message: 'Something went wrong.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
