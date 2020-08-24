const express = require('express');
const mongoose = require('mongoose');
const User = require('../Model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../Middlware/auth');
const config = require('config');

const router = express.Router();

// post: signup
router.post('/signup', async (req, res) => {
  const { email, password, isAdmin } = req.body;
  try {
    const salt = await bcrypt.genSalt(12);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      password: encryptedPassword,
      isAdmin,
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, config.get('JWTSecret'), (err, token) => {
      if (err) {
        throw err;
      }
      res.json({ token });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Token error');
  }
});

// sign in

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Email does not exist' }] });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get('JWTSecret'),

      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/user', auth, async (req, res) => {
  try {
    console.log(req.user);
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
