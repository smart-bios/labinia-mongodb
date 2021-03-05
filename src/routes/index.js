import { Router } from 'express';
import userRoute from './user';
import storageRoute from "./storage";

const route = Router()

route.use( '/user', userRoute );
route.use( '/storage', storageRoute);

export default route