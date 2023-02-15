import Joi from 'joi'

const create = Joi.object({
    full_name: Joi.string().required(),
    mobile: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    blood_grp: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    pincode: Joi.string().required(),
})

export default { create }
