const router = require('express').Router();

const { User, Band, Song } = require('../models');

router.get('/profile', async (req, res) => {
    try {
      // Get all posts and JOIN with user data
      const bandData = await Band.findAll({
        include: [
          {
            model: Song,
            attributes: ['name'], ['date']
          }
        ],
      });
  
      // Serialize data so the template can read it
      const songss = songData.map((song) => song.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });