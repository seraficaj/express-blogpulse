let express = require("express");
let db = require("../models");
let router = express.Router();

router.post("/", (req, res) => {
    db.comment
        .create({
            name: req.body.name,
            articleId: req.body.articleId,
            content: req.body.content,
        })
        .then((comment) => {
            res.redirect(`/articles/${req.body.articleId}`);
        })
        .catch((error) => {
            res.status(400).render("main/404");
        });
});

module.exports = router;
