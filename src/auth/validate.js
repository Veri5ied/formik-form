const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is required";
  } else if (values.firstName.length <= 1) {
    errors.firstName = "Invalid First name";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else if (values.lastName.length <= 1) {
    errors.lastName = "Invalid Last name";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length <= 10) {
    errors.password = "Password length is weak 😩";
  }

  if (!values.Vpassword) {
    errors.Vpassword = "Invalid password verification";
  } else if (values.Vpassword !== values.password) {
    errors.Vpassword = "Passwords don't match 😟";
  }

  return errors;
};

export default validate;
