const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const postRoute = require('./post.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/posts', postRoute);

module.exports = router;
