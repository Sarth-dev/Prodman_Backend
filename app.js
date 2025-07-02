const dotenv = require('dotenv');
const express = require('express')
const app = express()
const productRoutes = require('./routes/productRoutes')
const connectDB = require('./config/db')
const cors = require('cors')

dotenv.config();

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);


app.listen(3004, () =>{
    console.log('Server is running on port 3004')
})

