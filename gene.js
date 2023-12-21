function generatePassword(length) {
    const charset = "abcdefghijklmnopqrTUVWXYZ0126789!@#$%^&*()_+-=[]{}|;:,.<>?";
 
    if (typeof length !== 'number' || length <= 0 || !Number.isInteger(length)) {
      console.error("Invalid password length. Please provide a positive integer.");
      return null;
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    return password;
  }
  
 
  const generatedPassword = generatePassword(12);
  console.log("Generated Password:", generatedPassword);
  