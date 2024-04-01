const UserController = require('../controllers/userController');
const { authenticate  } = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/user/getcart', authenticate, UserController.getCartUser);
    app.post('/api/user/removecart', authenticate, UserController.removeCartUser);
    app.post('/api/user/addcart', authenticate, UserController.addToCart);
}