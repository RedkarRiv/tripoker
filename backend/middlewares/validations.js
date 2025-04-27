export const validate = (schema) => async (req, res, next) => {
    const error = schema(req.body);
    if (error) {
      return res.status(400).json({ errors: [{ field: 'general', msg: error }] });
    }
    next();
  };