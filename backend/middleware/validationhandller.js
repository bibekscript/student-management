import { z } from "zod";

const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (err) {
    err = z.flattenError(err);

    res.status(400).send({ error: err.fieldErrors });
  }
};

export default validate;