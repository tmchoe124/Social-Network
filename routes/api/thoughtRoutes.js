const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// Route to get all thoughts and create a new thought
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// Routes to get, update, and delete a thought by its id
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Route to add a reaction to a thought
router.route('/:thoughtId/reactions')
  .post(addReaction);

// Route to remove a reaction by reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
