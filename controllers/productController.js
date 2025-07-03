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

const editProducts = async (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, category },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ message: 'Server error while updating product' });
  }
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = {getProducts , createProduct, editProducts ,deleteProduct}
