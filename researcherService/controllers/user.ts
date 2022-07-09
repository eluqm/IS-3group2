import { Request, Response } from "express";
import User from "../models/user";

export const postNewUser = async (req: Request, res: Response) : Promise<any> => {
  const { body } = req;
  try {
    const exist = await User.findOne({
      where: {
        user : body.user
      }
    });
    if (!exist) {
      const user = new User(body);
      await user.save();
      res.json({
        user,
        msg: `user ${body.user} created OK`
      });
    } else {
      return res.status(400).json({
        body,
        msg: `The user of ${body.user} exist`
      })
    }
  } catch (error : any) {
    throw new Error(error);
  }
}
