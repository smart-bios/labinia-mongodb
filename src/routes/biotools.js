import { Router } from 'express';
import biotools from '../controllers//biotools';
import Biotools from '../controllers//biotools';


const route = Router();

route.post( '/blast', Biotools.blast);
route.post( '/fastqc', biotools.fastqc);
route.post( '/bbduk', Biotools.bbduk);
route.post( '/fscreen', Biotools.fscreen);
route.post( '/unicycler', Biotools.unicycler);
route.post( '/quast', Biotools.quast);
route.post( '/prokka', Biotools.prokka);


export default route;