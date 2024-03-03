
const resetTokens = {};

async function storeResetToken(email, token) {
  const expirationTime = Date.now() + 3600000; // 1 hour
  resetTokens[email] = { token, expires: expirationTime };
}

async function getResetToken(email) {
  return resetTokens[email];
}

module.exports = {
  storeResetToken,
  getResetToken,
};
