
const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userService.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = await userService.generateResetToken(email);
    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

    await userService.sendResetEmail(email, resetLink);

    res.json({ message: 'Reset link sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
