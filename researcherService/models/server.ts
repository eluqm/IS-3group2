import express, { Application } from 'express';
import iRouter from "../routes/user";
import cors from 'cors';
import iDataBase from "../db/connection";

const corsOptions ={
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
}

class ServerForMicroservice {
  private application: Application;
  readonly port: string | number | undefined;
  private apiPaths = {
    user: '/res'
  }

  constructor() {
    this.application = express();
    this.port = process.env.PORT || '3000';
  }

  listenServer() : void {
    this.application.listen(
      this.port, () => {
        console.log('Server Setup : Running in : ' + this.port);
      }
    )
  }

  async dbConnection() : Promise<void> {
    try {
      await iDataBase.authenticate().then(e => {
        console.log(`Authentication server OK Database ${this.port}`);
      });
    } catch (error : any) {
      throw new Error(error);
    }
  }

  middlewares() : void {
    this.application.use(cors(corsOptions));
    this.application.use(express.json());
    this.application.use(express.static('public'));
  }

  routes() : void {
    this.application.use(
      this.apiPaths.user, iRouter
    )
  }

  init() : void {
    this.dbConnection().then()
    this.middlewares();
    this.routes();
    this.listenServer();
  }
}

export default ServerForMicroservice;
