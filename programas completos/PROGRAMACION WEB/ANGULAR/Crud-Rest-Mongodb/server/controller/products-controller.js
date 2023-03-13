
const Product = require('../schemas/productSchema.js');

exports.addProduct = async (request, response) => {
    const product = request.body;
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        response.send(newProduct);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }

};


exports.getAllProducts = async (request, response) => {
    try {
        const products = await Product.find();
        response.status(200).json(products);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }

};

exports.getProduct = async (request, response) => {
    try {

        const product = await Product.findOne({ _id: request.params.id });
        response.status(200).json(product);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }

};



exports.editProductId = async (request, response) => {
    try {
        const { name, category, ubication, price } = request.body;
        let product = await Product.findById(request.params.id);

        if(!product) {
            response.status(404).json({ message: 'Product dont exist' });
        }
        product.name = name;
        product.category = category;
        product.ubication = ubication;
        product.price = price;

        product = await Product.findOneAndUpdate({ _id: request.params.id },product, { new: true} )
        response.status(200).json(product);
        
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: error.message });
    }
};


exports.deleteProduct = async (request, response) => {
    try {
        await Product.deleteOne({ _id: request.params.id });
        response.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
        response.status(404).json({ message: error.message });
    }

};