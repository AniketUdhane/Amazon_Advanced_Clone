// define some utility functions like generate token

import jwt from 'jsonwebtoken';
export const generateToken = (user) => {
  //using sign method generate token - 3 para - object,jwt token
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'somethingsecret', // in production use only JWT_SECRET
    {
      expiresIn: '30d',
    }
  );
};
