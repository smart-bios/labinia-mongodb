import { Router } from 'express';
import Protein from '../controllers/protein';

const route = Router();

route.post( '/add', Protein.add );
route.get( '/list', Protein.list);
route.get( '/find/:id', Protein.find);
route.put( '/edit/:id', Protein.edit);
route.delete( '/delete/:id', Protein.delete);

export default route;