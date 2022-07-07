import dotenv from 'dotenv';
import ServerForMicroservice from "./models/server";

dotenv.config();
const microServer = new ServerForMicroservice();

microServer.listenServer();
