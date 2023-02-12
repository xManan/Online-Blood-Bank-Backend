import 'module-alias/register'
import StatesController from '@/resources/state/state.controller'
import DonorController from '@/resources/donor/donor.controller'
import App from './app'

// validateEnv()

const app = new App([
    new StatesController(),
    new DonorController(),
], 6969)

app.listen()
