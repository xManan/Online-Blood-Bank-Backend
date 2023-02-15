import 'module-alias/register'
import StatesController from '@/resources/state/state.controller'
import DonorController from '@/resources/donor/donor.controller'
import App from './app'
import BankController from './resources/bank/bank.controller'

// validateEnv()

const app = new App([
    new StatesController(),
    new DonorController(),
    new BankController(),
], 6969)

app.listen()
