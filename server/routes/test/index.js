import express from 'express';
import test from '../../controller/test.controller.js';

/* Creating a new router object. */
const TestRouter = express.Router()

TestRouter.get('/', test);

export default TestRouter;