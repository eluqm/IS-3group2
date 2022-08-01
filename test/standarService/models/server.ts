import  express, { Application } from 'express';
import iRouter from "../routes/projects";
import cors from 'cors';
import iDataBase from "../db/connection";

class ServerForMicroservice {
  private application: Application;
  readonly port: string | number;
  private apiPaths = {
    projects: '/api'
  }

  constructor() {
    this.application = express();
    this.port = process.env.PORT || 5000;
  }

  listenServer() : void {
    this.application.listen(
      this.port, () => {
        console.log(`Server running in ${this.port}`);
      }
    );
  }

  async dbConnection() : Promise<void> {
    try {
      await iDataBase.authenticate().then(e => {
        console.log(`Authentication server OK DataBase ${this.port}`);
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

  routes() {
    this.application.use(
      this.apiPaths.projects, iRouter
    )
  }

  init() : void {
    this.dbConnection().then();
    this.middlewares();
    this.routes();
    this.listenServer();
  }
}

export default ServerForMicroservice;
