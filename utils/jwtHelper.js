import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export const generateToken = async payload => {
  return await jwt.sign(payload, process.env.JWTSECRET, {
    expiresIn: parseInt(process.env.TOKENEXPIRATIONTIME, 10),
  });
};

export const jwtValidator = async token => {
  try {
    const decodedToken = await jwt.verify(token, process.env.JWTSECRET,);
    return decodedToken;
  } catch (error) {
    return false;
  }
};
