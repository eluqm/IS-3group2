import express, { Application } from 'express';
import cors from 'cors';
import iDataBase from "../db/connection";

class ServerForMicroservice {
  private application: Application;
  readonly port: string | number | undefined;

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
    this.application.use(cors());
    this.application.use(express.json());
    this.application.use(express.static('public'));
  }

  init() : void {
    this.dbConnection().then()
    this.middlewares();
    this.listenServer();
  }
}

export default ServerForMicroservice;
