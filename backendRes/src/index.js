import app from "./app.js";
import {ORM} from "./database/database.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

async function main() { 
  try {
    await ORM.authenticate();
    console.log('CONECTADO A DB');
    app.listen(PORT, () => {
      console.log(`PUERTO: ${PORT}`);
    });
  } catch (err) {
    console.error('ERROR DB');
  }
}

main().then();