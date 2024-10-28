const userAuth = (req, res, next) => {
  const token = "xya";
  const isAuthorized = token === "xyz";

  if (!isAuthorized) {
    console.log("Auth is being checked!");
    res.status(401).send("User not authorized");
  } else {
    next();
  }
};

module.exports = {
  userAuth,
};
