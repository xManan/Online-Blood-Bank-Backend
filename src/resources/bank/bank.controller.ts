import { Router, Request, Response, NextFunction } from 'express'
import Controller from '@/utils/interfaces/controller.interface'
import HttpException from '@/utils/exceptions/http.exception'
import validationMiddleware from '@/middleware/validation.middleware'
import validate from '@/resources/donor/donor.validation'
import BankService from '@/resources/bank/bank.service'

class BankController implements Controller {
    public path = '/find-blood-bank'
    public router = Router()
    private BankService = new BankService()

    constructor() {
        this.initialiseRoutes()
    }
    
    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            this.get
        )
    }
    private get = async (req: Request, res: Response, next: NextFunction): Promise<Response|void> => {
        console.log('kk')
        try {
            const banks = await this.BankService.get(req.body)
            res.status(201).json({ banks })
        } catch(e){
            next(new HttpException(400, e.message))
        }
    }

}

export default BankController
