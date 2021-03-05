import path from 'path'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import rutas from './routes'

const app = express()

//middllewares
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({extended:false}));


//setings
app.set('port', process.env.PORT || 3000 )


//Rutas
app.use('/api',rutas);

//Archivos estaticos
app.use(express.static(path.join(__dirname ,'/public')));


export default app


/* app.listen(process.env.PORT, () => {
    console.log('Sirviendo en puerto ', process.env.PORT);
}); */