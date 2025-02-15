const model = require("../models/article.model.js");

// Get all articles
async function getArticles(req, res) {
    try {
        const data = await model.find();
        if (!data || data.length === 0) {
            return res.status(404).json({ message: "No articles found!" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal server error!" });
    }
}

// Get article by ID
async function getArticlesById(req, res) {
    try {
        const data = await model.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Article not found!" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal server error!" });
    }
}

// Post an article
async function postArticles(req, res) {
    const { articlename, publishDate, content } = req.body;
    try {
        const newArticle = new model({ articlename, publishDate, content });
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(500).json({ message: "Internal server error!" });
    }
}

// Update article by ID
async function updateArticleById(req, res) {
    try {
        const updatedArticle = await model.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!updatedArticle) {
            return res.status(404).json({ message: "Article not found!" });
        }
        res.status(200).json({ message: "Article updated successfully!", updatedArticle });
    } catch (error) {
        res.status(500).json({ message: "Internal server error!" });
    }
}

// Delete article by ID
async function deleteArticleById(req, res) {
    try {
        const result = await model.deleteOne({ _id: req.params.id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Article not found!" });
        }
        res.status(200).json({ message: "Article deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error!" });
    }
}

module.exports = {
    getArticles,
    getArticlesById,
    postArticles,
    updateArticleById,
    deleteArticleById
};
