export default function validation(
  email,
  password,
  errorFirebase,
  confiPasswrod = null
) {
  const errors = {};

  if (email === "") {
    errors.email = "Email is required";
  } else if (
    errorFirebase?.includes("email") ||
    errorFirebase?.includes("user")
  ) {
    errors.email = errorFirebase?.split("/")[1].slice(0, -2);
  }
  if (password === "") {
    errors.password = "Password is required";
  } else if (errorFirebase?.includes("password")) {
    errors.password = errorFirebase?.split("/")[1].slice(0, -2);
  }
  if (confiPasswrod !== null) {
    if (confiPasswrod === "") {
      errors.confiPassword = "Confirm password is required";
      return errors;
    } else if (confiPasswrod !== password) {
      errors.confiPassword = "password's did not match";
      return errors;
    }
  }
  return errors;
}
