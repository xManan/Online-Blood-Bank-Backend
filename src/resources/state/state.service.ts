import StateModel from '@/resources/state/state.model'
import State from '@/resources/state/state.interface'

class StateService {
    private state = StateModel
    public async find(): Promise<State[]> {
        try {
            const states = await this.state.find({}, {'state':1})
            return states
        } catch(e) {
            throw new Error('Unable to fetch states')
        }
    }
    public async findCities(state: string): Promise<State[]> {
        try {
            const states = await this.state.find({state: `${state}`})
            return states
        } catch(e) {
            throw new Error('Unable to fetch states')
        }
    }
}

export default StateService
