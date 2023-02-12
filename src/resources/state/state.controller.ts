import { Router, Request, Response, NextFunction } from 'express'
import Controller from '@/utils/interfaces/controller.interface'
import HttpException from '@/utils/exceptions/http.exception'
import validationMiddleware from '@/middleware/validation.middleware'
import validate from '@/resources/post/post.validation'
import StateService from '@/resources/state/state.service'

class StatesController implements Controller {
    public path = '/states'
    public citiesPath = '/cities/:state'
    public router = Router()
    private StateService = new StateService()

    constructor() {
        this.initialiseRoutes()
    }
    
    private initialiseRoutes(): void {
        this.router.get(
            `${this.path}`,
            this.find
        )
        this.router.get(
            `${this.citiesPath}`,
            this.findCities
        )
    }
    private findCities = async (req: Request, res: Response, next: NextFunction): Promise<Response|void> => {
        try {
            const cities = await this.StateService.findCities(req.params.state)
            if(cities.length)
                res.status(201).json({ cities: cities[0].cities })
            else
                res.status(201).json({ cities: [] })
        } catch(e){
            next(new HttpException(400, e.message))
        }
    }
    private find = async (req: Request, res: Response, next: NextFunction): Promise<Response|void> => {
        try {
            const states = await this.StateService.find()
            res.status(201).json({ states })
        } catch(e){
            next(new HttpException(400, e.message))
        }
    }
}

export default StatesController
