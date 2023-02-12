import DonorModel from '@/resources/donor/donor.model'
import Donor from '@/resources/donor/donor.interface'

class DonorService {
    private donor = DonorModel

    public async register(donor: Donor): Promise<Donor> {
        try {
            await this.donor.ensureIndexes()
            const res = await this.donor.create(donor)
            return res
        } catch(e) {
            throw new Error(e)
        }
    }

    // public async get(query: any): Promise<Donor[]> {
    //     console.log(query)
    //     const { blood_grp, state, city } = query
    //     try {
    //         if(!blood_grp.length){
    //             throw new Error('provide blood grp')
    //         }
    //         const res = await this.donor.find({
    //             blood_grp: blood_grp,
    //             state: {
    //                 $regex: state.length ? `${state}` : '.*'
    //             },
    //             city: {
    //                 $regex: city.length ? `${city}` : '.*'
    //             }
    //         })
    //         return res
    //     } catch(e) {
    //         throw new Error(e)
    //     }
    // }
}

export default DonorService
