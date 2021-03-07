import { Router } from 'express';
import Project from '../controllers/project';

const route = Router();

route.post( '/add', Project.add );
route.get( '/list', Project.list);
route.put( '/edit/:id', Project.edit);
route.delete( '/delete/:id', Project.delete);

export default route;