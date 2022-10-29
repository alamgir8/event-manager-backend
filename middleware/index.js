import { jwtValidator } from '../utils/jwtHelper.js';

export const authGuard = async (req, res, next) => {
  console.log('authGuard', req.headers.authorization.split(' ')[1]);
  const token = req.headers.authorization
    ? req.headers.authorization.split('')[1]
    : req.params.token;

  const validatedToken = await jwtValidator(token);

  console.log('validatedToken', validatedToken);

  if (!validatedToken) {
    return res.status(401).send({
      error: true,
      message: 'Unauthorized user.',
    });
  }

  req.validatedToken = validatedToken;

  next();
};
