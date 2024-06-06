const usersDB = {
  users: require("../models/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("node:fs/promises");
const path = require("node:path");

const logoutController = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(401);
  }
  const refreshToken = cookies.jwt;
  const foundUser = usersDB.users.find((person) => {
    return person.refreshToken === refreshToken;
  });
  if(!foundUser){
    res.clearCookie("jwt", { httpOnly: true });
    return res.sendStatus(204);
  }
const currentUser={...foundUser, refreshToken:""};
usersDB.setUsers([...otherUsers, currentUser]);


}

module.exports = logoutController;
