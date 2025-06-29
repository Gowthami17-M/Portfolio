const transporter = require('../config');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { Email, name, subject, message } = req.body;

    const mailOptions = {
      from: Email,
      to: 'madhugowthami17@gmail.com',
      subject: 'From Portfolio - ' + subject,
      html: `
        <p>You have a new message</p>
        <h3>Contact Details</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${Email}</li>
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Something went wrong.' });
    }

  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
