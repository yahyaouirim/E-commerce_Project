const ProductController = require('../controllers/productController');
const { authenticate  } = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/addproduct', ProductController.addProduct);
    app.delete('/api/deleteproduct', ProductController.deleteProduct);
    app.patch('/api/updateproduct/:id', ProductController.updateProduct);
    app.get('/api/getoneproduct/:id', ProductController.getOneProduct);
    app.get('/api/getallproduct',ProductController.displayAllProduct);
    app.get('/api/popularinwomen', ProductController.popularInWomen);
    app.get('/api/popularinmen', ProductController.popularInMen);
    app.get('/api/popularinkids', ProductController.popularInKids);

    app.get('/api/newcollections', ProductController.displayNewCollections);
}