const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const LOG_FILE = path.resolve(__dirname, '..', 'otps.log');

function appendLog(entry) {
    try {
        fs.appendFileSync(LOG_FILE, entry + '\n\n', { encoding: 'utf8' });
    } catch (err) {
        console.error('Failed to write OTP log:', err.message);
    }
}

const sendEmail = async (options) => {
    const logEntry = [
        `Time: ${new Date().toISOString()}`,
        `To: ${options.email}`,
        `Subject: ${options.subject}`,
        `Message: ${options.message}`,
    ].join(' | ');

    // Always write a local log so you can view OTPs in VS Code terminal or file
    appendLog(logEntry);

    // If no SMTP credentials are set, still print to console and return
    if (!process.env.EMAIL_USER || process.env.EMAIL_USER === 'testuser@ethereal.email') {
        console.log('-----------------------------------------');
        console.log('📧 EMAIL LOG (No SMTP Configured):');
        console.log(`To: ${options.email}`);
        console.log(`Subject: ${options.subject}`);
        console.log(`Message: ${options.message}`);
        console.log('-----------------------------------------');
        return; // Exit early
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Define email options
    const mailOptions = {
        from: `FreshKart <${process.env.EMAIL_USER}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.html,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
