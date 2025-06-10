import express from "express";
const router = express.Router()

//import controller
import * as contactController from './controller/contactController'

export function appRoute(app) {
    router.get('/home', contactController.find)

    app.use('/api/', router);
}