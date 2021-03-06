import { Request, Response } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';

export const postNewUser = async (req: Request, res: Response): Promise<any> => {
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
      const idU: number = exist.get('id');
      const nameU: string = exist.get('namecompleto');
      const emailU: string = exist.get('user');
      const key = process.env.ACCESS_TOKEN_SECRET || 'perukistan';
      const key1 = process.env.REFRESH_TOKEN_SECRET || 'perusalen';

      const accToken = jwt.sign({idU, nameU, emailU}, key, {expiresIn: '20s'});
      const refToken = jwt.sign({idU, nameU, emailU}, key1, {expiresIn: '1d'});

      await exist.update({refreshtoken: refToken});
      res.cookie('refToken', refToken, {
        httpOnly: true,
        maxAge: 60*60*1000,
        secure: true
      });
      res.json({
        //accToken
        refToken
      });
    }
  } catch (error : any) {
    res.status(404).json({
      msg: "Error al iniciar sesi??n"
    });
  }
}

export const Logout = async (req : Request, res : Response) => {
  const refreshToken = req.cookies.refToken;
  if (!refreshToken)
    res.sendStatus(204);
  const user = await User.findOne({
    where: {
      refreshtoken: refreshToken
    }
  });
  if (!user)
    res.sendStatus(204);
  await user.update({refreshtoken: null});
  res.clearCookie('refreshToken');
  return res.sendStatus(
    200
  );
}
