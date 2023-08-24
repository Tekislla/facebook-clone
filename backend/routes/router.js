import express from "express";
import {
  getPostsWithUser
} from '../controller/post-controller.js';

const routes = express.Router();

routes.get("/posts", getPostsWithUser);

export { routes as default };
