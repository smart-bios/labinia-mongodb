import { Router } from 'express';
import userRoute from './user';
import storageRoute from "./storage";
import specieRoute from './specie';
import projectRoute from './project';
const route = Router();

route.use( '/user', userRoute );
route.use( '/storage', storageRoute);
route.use( '/specie', specieRoute);
route.use( '/project', projectRoute);

export default route;