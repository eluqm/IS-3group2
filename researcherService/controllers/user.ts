import { Request, Response } from "express";
import User from "../models/user";

export const postNewUser = async (req: Request, res: Response): Promise<any> => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
        msg: `The user of ${body.user} exist`
      });
    }
  } catch (error : any) {
    throw new Error(error);
  }
}

export const updateUser = async (req : Request, res : Response): Promise<any> => {
  const { id } = req.params
  const { body } = req;
  try {
    const exist = await User.findByPk(id);
    if (!exist) {
      return res.status(400).json({
        msg: `The user with id ${id} doesn't exist`
      });
    }
    if (exist?.get('user') == body.user) {
      return res.status(400).json({
        msg: `The user ${body.user} is already in use`
      });
    } else {
      await exist.update(body);
      res.json({
        msg: `Changes made in ${id} user`
      });
    }
  } catch (error : any) {
    throw new Error(error);
  }
}

export const authenticateUser = async (req : Request, res : Response): Promise<any> => {
  const { body } = req;
  try {
    const exist = await User.findOne({
      where: {
        user : body.user,
        pass : body.pass
      }
    });
    if (!exist) {
      return res.status(400).json({
        msg: `The user with user ${body.user} doesn't exists`
      });
    } else {
      res.json({
        msg: `The user ${body.user} already for start session`
      });
    }
  } catch (error : any) {
    throw new Error(error);
  }
}
