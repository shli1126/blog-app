import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  // when sign the token, we used the user id, therefore, when verify the token, we
  // can get the user id
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized"));
    }
    // user is an object with an id field, which come from
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    req.user = user;
    next();
  });
};
