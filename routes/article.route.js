const express = require("express");
const {
    getArticles,
    getArticlesById,
    postArticles,
    deleteArticleById,
    updateArticleById
} = require("../controllers/article.controller.js");

const router = express.Router();

router.get('/', getArticles);
router.get('/:id', getArticlesById);
router.post('/', postArticles);
router.put('/:id', updateArticleById);
router.delete('/:id', deleteArticleById);

module.exports = router;
