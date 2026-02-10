function maskEmail(email) {
  const indexOfAt = email.indexOf('@');
  const address = email.slice(0, indexOfAt);
  const domain = email.slice(indexOfAt);

  const mask = string => {
    const len = string.length;
    const asterisks = '*'.repeat(len - 2)

    return string[0] + asterisks + string[len - 1]
  }

  return mask(address) + domain;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));

email = "freecodecamp@example.com";
console.log(maskEmail(email));

email = "info@test.dev";
console.log(maskEmail(email));

email = "user@domain.org";
console.log(maskEmail(email));