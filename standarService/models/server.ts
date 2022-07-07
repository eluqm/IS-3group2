import  express, {Application} from 'express';

class ServerForMicroservice {
  private application: Application;
  private port: string | number | undefined;

  constructor() {
    this.application = express();
    this.port = process.env.PORT || '3000';
  }

  listenServer() {
    this.application.listen(
      this.port, () => {
        console.log('Server Setup : Running in : ' + this.port);
      }
    )
  }
}

export default ServerForMicroservice;

