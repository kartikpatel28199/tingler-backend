import * as Joi from 'joi';

const schema = Joi.object({
  PORT: Joi.number().required(),
});
export default schema;
