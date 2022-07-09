import { Router } from 'express';
import { getAllPost, createPost, updatePost, deletePost, bringOnePost } from '../controllers/posts.controllers.js'

const router = Router();

router.get('/posts', getAllPost )

router.post('/posts', createPost )

router.put('/posts/:id', updatePost)

router.delete('/posts/:id', deletePost )

router.get('/posts/:id', bringOnePost )


export default router