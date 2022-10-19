const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");
const { posts } = require("./src/posts/factories/posts.factory");

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

const app = express();

app.get('/posts', posts.getAllPosts.bind(posts));
app.get('/posts/:id', posts.getPostById.bind(posts));
app.post('/posts/', posts.createPost.bind(posts));
app.put('/posts/:id', posts.updatePostContent.bind(posts));
app.patch('/posts/:id', posts.updatePostTitle.bind(posts));
app.delete('/posts/:id', posts.deletePost.bind(posts));

module.exports.handler = serverless(app);
