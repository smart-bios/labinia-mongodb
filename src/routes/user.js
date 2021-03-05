import { Router } from 'express';
import User from '../controllers/user'

const route = Router();

route.post( '/add', User.add );
route.get( '/list', User.list );
route.put( '/edit/:id', User.edit);
route.delete( '/delete/:id', User.delete);
route.post( '/login', User.login);

export default route