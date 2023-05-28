const Product = require('../models/productModels');

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                res.status(200).json(newProduct)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    findAllProducts: (req, res) => {
        Product.find()
            .then((allProducts) => {
                res.status(200).json(allProducts)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    findOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) => {
                res.status(200).json(oneProduct)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    updateProduct: (req, res) => {
        Product.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new:true, runValidators:true})
            .then((updatedProduct) => {
                res.json({show:updatedProduct})
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        }); 
    }
}