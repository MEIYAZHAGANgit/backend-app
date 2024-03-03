// services/userService.js
const crypto = require('crypto');
const resetTokenService = require('./resetTokenService');
const emailService = require('./emailService');

const users = [
  { id: 1, email: 'user@example.com', password: 'hashedPassword' },
];

async function getUserByEmail(email) {
  return users.find((u) => u.email === email);
}

async function generateResetToken(email) {
  const resetToken = crypto.randomBytes(20).toString('hex');
  await resetTokenService.storeResetToken(email, resetToken);
  return resetToken;
}

async function sendResetEmail(email, resetLink) {
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Password Reset',
    text: `Click the following link to reset your password: ${resetLink}`,
  };
  await emailService.sendEmail(mailOptions);
}

module.exports = {
  getUserByEmail,
  generateResetToken,
  sendResetEmail,
};
