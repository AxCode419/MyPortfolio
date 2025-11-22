// Save JWT after signin
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

// Check if user is logged in
export const isAuthenticated = () => {
  if (typeof window == "undefined") return false;

  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

// Logout
export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
  }
  next();
};
