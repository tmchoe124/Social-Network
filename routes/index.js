const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Fallback for unknown routes
router.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = router;
