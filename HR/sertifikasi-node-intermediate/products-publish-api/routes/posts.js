const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

router.post('/', postsController.create)
router.get('/', postsController.getAll)
router.get('/:id', postsController.getById)
router.patch('/:id', postsController.update)
router.put('/:id', postsController.update)
router.delete('/:id', postsController.update)

module.exports = router;
