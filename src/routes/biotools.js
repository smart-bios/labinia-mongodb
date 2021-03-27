import { Router } from 'express';
import Biotools from '../controllers//biotools';

const route = Router();

route.post( '/blast', Biotools.blast);
route.post( '/bbduk', Biotools.bbduk);
route.post( '/unicycler', Biotools.unicycler);


export default route;