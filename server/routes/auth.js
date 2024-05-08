import { Router } from 'express';
import { register, login, getMe } from '../controllers/auth.js'; // .js important when you work on backend
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();
//* End points
//  Registration
router.post('/register', register);
// Login
router.post('/login', login);

// Get me
router.get('/getMe', checkAuth, getMe);

export default router;
