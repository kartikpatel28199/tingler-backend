import * as Joi from 'joi';

const schema = Joi.object({
  PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_SCHEMA: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_LOGGING: Joi.number().required(),
});
export default schema;
