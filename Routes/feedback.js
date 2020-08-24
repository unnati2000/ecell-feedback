const express = require('express');
const mongoose = require('mongoose');
const User = require('../Model/User');
const bcrypt = require('bcryptjs');
const router = express.Router();
const FeedBack = require('../Model/FeedBack');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../Middlware/auth');

router.post('/feedback', async (req, res) => {
  const { title, body, name } = req.body;

  try {
    const feedback = new FeedBack({
      title,
      body,
      name,
    });

    await feedback.save();
    res.json({ msg: 'posted successfully' });
  } catch (error) {
    console.log(error);
  }
});

router.get('/allfeeds', auth, async (req, res) => {
  try {
    const feeds = await FeedBack.find();
    res.json(feeds);
  } catch (error) {
    console.log(error);
  }

  //console.log(admin);
});

router.delete('/delete/:id', auth, async (req, res) => {
  try {
    const message = await FeedBack.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ msg: 'Page not found' });
    }
    await message.remove();
    res.json({ msg: 'Deleted feedback' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
