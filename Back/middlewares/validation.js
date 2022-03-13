const { body, validationResult } = require('express-validator');
exports.registerValidation=[
    body('email','not valid email').isEmail(),
    body('password','Password should be >= 6 caracter').isLength({ min: 6 }),
]

exports.validator=(req,res,next)=>{
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next()
}