const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/BlogModel");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    // Get all blogs from the blog collection in the db
    const blogs = await Blog.find();
    // Send the blogs as the response
    res.status(200).json(blogs);
});

app.get("/:id", async (req, res) => {
    // Get blog matching ID from the blog collection in the db
    const blog = await Blog.find({ _id: req.params.id });
    // Send the blogs as the response
    res.status(200).json(blog);
});

app.post("/", (req, res) => {
    // Body of incoming POST request
    const {title, author, content} = req.body;
    // Construct new Blog document from POST body
    const data = new Blog({title, author, content});
    // Save new Blog document to the db
    data.save();
    // Send the saved blog document as the response
    res.status(200).json({data});
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Connected to db & listening on port ${process.env.PORT}`));
    })
    .catch((error) => console.log(error));