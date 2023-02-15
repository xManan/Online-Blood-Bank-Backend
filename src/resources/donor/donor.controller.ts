import { Router, Request, Response, NextFunction } from 'express'
import Controller from '@/utils/interfaces/controller.interface'
import HttpException from '@/utils/exceptions/http.exception'
import validationMiddleware from '@/middleware/validation.middleware'
import validate from '@/resources/donor/donor.validation'
import DonorService from '@/resources/donor/donor.service'

class DonorController implements Controller {
    public path = '/register-donor'
    public findDonor = '/find-donors'
    public router = Router()
    private DonorService = new DonorService()

    constructor() {
        this.initialiseRoutes()
    }
    
    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.register
        )

        this.router.post(
            `${this.findDonor}`,
            this.get
        )
    }
    private register = async (req: Request, res: Response, next: NextFunction): Promise<Response|void> => {
        try {
            const donor = await this.DonorService.register(req.body)
            res.status(201).json({ donor })
        } catch(e){
            next(new HttpException(400, e.message))
        }
    }
    private get = async (req: Request, res: Response, next: NextFunction): Promise<Response|void> => {
        try {
            const donors = await this.DonorService.get(req.body)
            res.status(201).json({ donors })
        } catch(e){
            next(new HttpException(400, e.message))
        }
    }

}

export default DonorController
