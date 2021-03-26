import { Router } from 'express';
import Biotools from '../controllers//biotools';

const route = Router();

route.post( '/blast', Biotools.blast);
route.post( '/bbduk', Biotools.bbduk);


export default route;