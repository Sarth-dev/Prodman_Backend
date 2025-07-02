const Product = require('../models/Product');

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const createProduct = async (req, res) => {
  const { name, price, category } = req.body;
  const newProduct = await Product.create({ name, price, category });
  res.status(201).json(newProduct);
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = {getProducts , createProduct ,deleteProduct}
