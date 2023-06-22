const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const reportService = require('./report.service');

// routes
router.post('/register', registerSchema, register);

module.exports = router;

function registerSchema(req, res, next) {
    const schema = Joi.object({
        empId: Joi.number().required(),
        userName: Joi.string().required(),
        date: Joi.string().required(),
        project: Joi.string().required(),
        workReport: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    reportService.create(req.body)
        .then(() => res.json({ message: 'Registration successful' }))
        .catch(next);
}
