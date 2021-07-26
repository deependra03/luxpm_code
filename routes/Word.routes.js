var word = require("../controllers/Word.Controller");
const { check, validationResult } = require('express-validator');


module.exports = async (app) => {
    app.get("/call/pyscriptandinsertdb",
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }else{
            let results = word.callpyscriptandinsertdb(req, res);
        }
    });
};