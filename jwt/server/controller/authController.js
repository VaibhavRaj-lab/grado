const jwt = require("jsonwebtoken");
require("dotenv").config();
const { roles } = require("../roles/role");
const checkToken = (req) => {
  const header = req.headers["authorization"];
  console.log(header);
  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    return { success: true, token: bearer[1] };
  } else {
    return { success: false };
  }
};
exports.authUser = async (req, res, next) => {
  var result = await checkToken(req);
  console.log(result);
  if (result.success === true && result.token != undefined) {
    try {
      const { user, role } = await jwt.verify(
        result.token,
        process.env.TOKEN_SECRET
      );

      if (user) {
        req.user = role;
        req.Id = user;
        next();
      } else {
        return res
          .status(401)
          .json({ success: false, msg: "Token Is Not Valid" });
      }
    } catch (ex) {
      return res
        .status(403)
        .json({ success: false, msg: "Token Is Not Valid" });
    }
  } else {
    return res.status(403).json({ success: false, msg: "Token Is Not Valid" });
  }
};

exports.grantAccess = function (action, resource) {
  return async (req, res, next) => {
    try {
      console.log(req.user);
      const permission = roles.can(req.user)[action](resource);
      if (!permission.granted) {
        return res.status(401).json({
          error: "You don't have enough permission to perform this action",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};
