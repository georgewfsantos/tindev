const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async index(req, res) {
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);
    // when the condition has to satisfy all filters at the same time: $and:[]

    const devs = await Dev.find({
      $and: [
        { _id: { $ne: user } }, //$ne = not equal
        { _id: { $nin: loggedDev.likes } }, //$nin : not in ( does not include)
        { _id: { $nin: loggedDev.dislikes } }
      ]
    });

    return res.json(devs);
  },
  async store(req, res) {
    const { username } = req.body;

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const userExists = await Dev.findOne({ user: username });

    if (userExists) {
      return res.json(userExists);
    }

    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });

    return res.json(dev);
  }
};
