const express = require('express')
const {
  getProducts,
  createProduct,
  deleteProduct,
  editProducts,
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id',editProducts);
router.delete('/:id', deleteProduct);

module.exports= router;
