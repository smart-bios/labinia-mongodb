import { Router } from 'express';
import Assembly from '../controllers/assembly';

const route = Router();

route.post( '/add', Assembly.add );
route.get( '/list', Assembly.list);
route.get( '/find/:id', Assembly.find);
route.put( '/edit/:id', Assembly.edit);
route.delete( '/delete/:id', Assembly.delete);

export default route;