import { Document } from 'mongoose'

interface Donor extends Document {
    full_name: string
    mobile: string
    email: string
    password: string
    blood_grp: string
    state: string
    city: string
    pincode: string
}

export default Donor
