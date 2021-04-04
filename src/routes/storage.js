import { Router } from 'express';
import Storage from '../controllers/storage'

const route = Router();

route.post( '/upload', Storage.upload );
route.delete( '/delete/:id', Storage.delete);
route.get( '/list', Storage.list);
route.get( '/find/:uid', Storage.find);
route.get( '/download/:id', Storage.download);
route.post( '/download', Storage.fastDownload);

export default route