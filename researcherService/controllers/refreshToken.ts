import User from "../models/user";
import jwt from "jsonwebtoken";
import {Request, Response} from "express";

export const refreshToken = async(req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies.refToken;
    if (!refreshToken)
      return res.sendStatus(401);
    const user = await User.findAll({
      where: {
        refreshtoken: refreshToken
      }
    });
    if (!user)
      return res.sendStatus(403);
    const key: string = process.env.REFRESH_TOKEN_SECRET || 'perusalen';
    jwt.verify(refreshToken, key, (err: any, decoded: any) => {
      if (err)
        return res.sendStatus(403);
      const idU = user.get('id');
      const nameU = user.get('namecompleto');
      const emailU = user.get('user');
      const key1: string = process.env.ACCESS_TOKEN_SECRET || 'perukistan';
      const accessToken = jwt.sign({idU, nameU, emailU}, key1, {
        expiresIn: '20s'
      });
      res.json({
        accessToken
      });
    });
  } catch (error: any) {
    console.log(`${error}`)
  }
};
