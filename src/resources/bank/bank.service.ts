import BankModel from '@/resources/bank/bank.model'
import Bank from '@/resources/bank/bank.interface'

class BankService {
    private bank = BankModel

    public async get(query: any): Promise<Bank[]> {
        const { state, city } = query
        try {
            if(!state.length){
                throw new Error('provide state')
            }
            const res = await this.bank.find({
                state,
                city: {
                    $regex: city.length ? `${city}` : '.*'
                }
            })
            return res
        } catch(e) {
            throw new Error(e)
        }
    }
}

export default BankService
