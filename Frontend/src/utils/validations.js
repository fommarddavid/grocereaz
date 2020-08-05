/* eslint-disable import/prefer-default-export */
export function validateField(type, value) {
  if (type === 'email') {
    const regexCourriel = /.+@.+\..+/;
    const validValue = regexCourriel.test(value);
    return validValue;
  }
  if (type === 'password') {
    const validPassword = (value.length >= 8);
    return validPassword;
  }
  if (type === 'text') {
    const validText = (value.length >= 1);
    return validText;
  }
  return false;
}

export function validateSignIn(email, password) {
  const validEmail = validateField('email', email);
  const validPassword = validateField('password', password);

  return validEmail && validPassword;
}

export function validateSignUp(firstname, lastname, email, password, confirmPassword) {
  const validFirstname = validateField('text', firstname);
  const validLastname = validateField('text', lastname);
  const validEmail = validateField('email', email);
  const validPassword = validateField('password', password);
  const validConfirmPassword = (password.length === confirmPassword.length);
  return validFirstname && validLastname && validEmail && validPassword && validConfirmPassword;
}
