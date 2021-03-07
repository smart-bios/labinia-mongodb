import { Router } from 'express';
import Specie from '../controllers/specie';

const route = Router();

route.post( '/add', Specie.add );
route.get( '/list', Specie.list);
route.put( '/edit/:id', Specie.edit);
route.delete( '/delete/:id', Specie.delete);

export default route;