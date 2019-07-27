const express = require('express');
const router = express.Router();
const {check, validationResult} = require ('express-validator');
// @route   POST api/users
// @desc    Register User
// @Access  Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check ('email', 'Please Include a valid Email').isEmail(),
    check ('password', 'Please Enter a Password with at least 6 Characters').isLength({min:6})
],(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }
    res.send('User Route')
} ); 


module.exports = router;