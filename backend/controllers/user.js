import User from '../modals/User.js';

export const register = async (req, res) => {
  console.log(req.body);

  try {
    const { username, email, password } = req.body;
    // let user = await User.findOne({ email });
    // if (user) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "User already exists" });
    // }
    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
