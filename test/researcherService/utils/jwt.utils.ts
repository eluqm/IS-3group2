import { sign, SignOptions } from "jsonwebtoken";

/*
*  Generate a JWT
* */

export function generateWebToken(id: number, name: string, type: number) {
  const data = {
    id: id,
    name: name
  };
  const key: string  = type == 1 ? process.env.ACCESS_TOKEN_SECRET || 'rbalue' : process.env.REFRESH_TOKEN_SECRET || 'nvalue';
  const config: SignOptions = {
    algorithm: 'RS256',
    expiresIn: 60*60*60
  };
  return sign(data, key, config);
}
