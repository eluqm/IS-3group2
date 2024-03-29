import {User} from "../models/user.js";
import jwt from 'jsonwebtoken';
import { AreaResearch } from "../models/area_rese.js";

const KEY = process.env.KEY || 'CHUPETÍN';

export const authUser = async (req, res) => {
  const {user, pass} = req.body;
  try {
    const datos = await User.findOne({
      where: {user: user, pass: pass}
    });
    if (!datos)
      return res.status(400).json({msg: `User ${user} don't exist!`});
    else {
      const token = jwt.sign({datos}, KEY, {expiresIn: '2h'});
      let data = {...datos, token};
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(404).json({msg: 'Error en Auth'});
  }
}

export const signNewUser = async (req, res) => {
  const {body} = req;
  try {
    const exits = await User.findOne({where: {user: body.user}});
    if (!exits) {
      const user = new User(body);
      await user.save();
      res.json({msg: `User ${body.user} created`});
    } else
      return res.status(400).json({msg: `The user ${body.user} exist`})
  } catch (err) {
    res.status(404).json({msg: `Error en Sign`});
  }
}

export const updateUser = async (req, res) => {
  const {id} = req.params;
  const {body} = req;
  try {
    const exist = await User.findByPk(id);
    if (!exist)
      return res.status(400).json({msg: `User with id ${id} doesn't exist`});
    if (exist?.get('user') == body.user) 
      return res.status(400).json({msg: `The user ${body.user} already in use`});
    else {
      await exist.update(body);
      res.status(200).json({msg: `Changes made in ${body.id}`})
    }
  } catch (err) {
    res.status(404).json({msg: 'Error en updateUser'});
  }
}

export const getDataFromUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await User.findByPk(id);
    res.status(200).json(data);
  } catch (err) { 
    res.status(404).json({msg: 'Error en getDataFromUserById'});
  }
}

export const getAreasResearchById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await AreaResearch.findAll({where: {idUser: id}});
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({msg: 'Error en getAreasResearchById'});
  }
}

export const addAreaResearchToUser = async (req, res) => {
  const { body } = req;
  try {
    const newAR = new AreaResearch(body);
    await newAR.save();
    res.status(200).json({msg: 'AreaER creada!'}); 
  } catch (err) {
    res.status(404).json({msg: 'Error en addAreaResearchToUser'})
  }
}
