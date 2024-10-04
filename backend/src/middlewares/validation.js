import { AppError } from '../utilities/error.handler.js'

export const validate = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate({...req.body,...req.params,...req.query}, { abortEarly: false });
      if (error) {
        const { details } = error;
        const messages = details.map(i => i.message);
       next(new AppError(messages,403,'failed'))
      }
      next();
    };
  };