const getErrorMessage = (err) => {
  let message = "";

  // Handle MongoDB duplicate email error
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = "Duplicate email already exists";
        break;
      default:
        message = "Something went wrong";
    }
  } else if (err.errors) {
    // Handle Mongoose validation errors
    for (let errName in err.errors) {
      if (err.errors[errName].message)
        message = err.errors[errName].message;
    }
  } else {
    message = err.message || "Unknown server error";
  }

  return message;
};

export default { getErrorMessage };
