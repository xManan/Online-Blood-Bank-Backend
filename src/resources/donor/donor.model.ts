import { Schema, model } from 'mongoose'
import Donor from '@/resources/donor/donor.interface'

const DonorSchema = new Schema(
    {
        full_name: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        blood_grp: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        pincode: {
            type: String,
            required: true,
        },
    }
)

export default model<Donor>('Donor', DonorSchema)
