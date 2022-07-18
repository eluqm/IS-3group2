import jwt from "jsonwebtoken";

export const verifytoken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token)
    return res.sendStatus(401);
  const key: string = process.env.ACCESS_TOKEN_SECRET || 'perukistan';
  jwt.verify(token, key, (err: any, decoded: any) => {
    if (err)
      return res.sendStatus(403);
    req.emailU = decoded.emailU;
    next();
  })
};
