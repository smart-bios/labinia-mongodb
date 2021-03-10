import { Router } from 'express';
import Gene from '../controllers/gene';

const route = Router();

route.post( '/add', Gene.add );
route.get( '/list', Gene.list);
route.put( '/edit/:id', Gene.edit);
route.delete( '/delete/:id', Gene.delete);

export default route;