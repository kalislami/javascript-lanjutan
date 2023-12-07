const router = require('express').Router();
const controller = require('../controller/products');

router.post('/', controller.createProduct)
router.get('/', controller.getAllProducts)
router.get('/:id', controller.getProductById)
router.patch('/:id', controller.patchProductById)
router.put('/:id', controller.updateProduct)
router.delete('/:id', controller.deleteProduct)

module.exports = router;