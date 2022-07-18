import User from "../models/user";
import jwt from "jsonwebtoken";

export const refreshToken = async(req: any, res: any) => {
  try {
    const refreshToken = req.cookies.refToken;
    if (!refreshToken)
      res.sendStatus(401);
    const user = await User.findOne({
      where: {
        refreshtoken: refreshToken
      }
    });
    if (!user)
      res.sendStatus(403);
    const key: string = process.env.REFRESH_TOKEN_SECRET || 'perukistan';
    jwt.verify(refreshToken, key, (err: any, decoded: any) => {
      if (err)
        res.sendStatus(403);
      const idU = user.get('id');
      const nameU = user.get('namecompleto');
      const emailU = user.get('user');
      const key1: string = process.env.ACCESS_TOKEN_SECRET || 'perusalen';
      const accessToken = jwt.sign({idU, nameU, emailU}, key1, {
        expiresIn: '20s'
      });
      res.json({
        accessToken
      });
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
