function generatePassword(length) {
  const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  let newPassword = '';

  for(let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * (allowedChars.length));

    newPassword += allowedChars[randomIndex];
  }

  return newPassword;
}

const password = generatePassword(15)
console.log(`Generated password: ${password}`);