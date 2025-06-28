const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.email,process.env.password)

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
        user: process.env.email,
        pass: process.env.password,
    },
});

module.exports = transporter;