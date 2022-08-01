import jwt from "jsonwebtoken";

const KEY = process.env.KEY || 'CHUPETÍN';

export function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  console.log(authHeader);
  if (!token)
    return res.status(401).send(`Token don't found`);
  jwt.verify(token, KEY, (err, user) => {
    if (err)
      return res.status(403).send('Invalid token');
    console.log(user);
    req.user = user;
    next();
  });
}