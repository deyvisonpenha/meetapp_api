import { Router } from 'express';

const routes = new Router();

routes.get('/', (_req, res) => res.json({ message: 'oi teste' }));

export default routes;
