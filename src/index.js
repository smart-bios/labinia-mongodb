import mongoose from 'mongoose';
import app from './server'
import { uri, option} from './database'
//require('./database')

app.listen(app.get('port'), () => {

    console.log('Sirviendo en puerto ', app.get('port'));
    
    mongoose.connect(uri, option)
    .then(() => console.log(`conenctado a base de datos ${process.env.DATABASE}`))
    .catch(e => console.log(e));
});