import dotenv from 'dotenv';
import ServerForMicroservice from './models/server';

dotenv.config();

const iServer = new ServerForMicroservice();

iServer.init();
