import { Router } from 'express';
import Biotools from '../controllers//biotools';

const route = Router();

route.post( '/blast', Biotools.blast);
route.post( '/bbduk', Biotools.bbduk);
route.post( '/unicycler', Biotools.unicycler);
route.post( '/quast', Biotools.quast);
route.post( '/prokka', Biotools.prokka);


export default route;