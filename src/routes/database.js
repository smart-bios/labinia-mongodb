import { Router } from 'express';
import Database from '../controllers/database';

const route = Router();

route.post( '/add', Database.add );
route.get( '/list/:database', Database.list);
route.put( '/edit/:id', Database.edit);
route.delete( '/delete/:id', Database.delete);

export default route;