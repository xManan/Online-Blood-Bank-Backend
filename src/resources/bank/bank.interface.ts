import { Document } from 'mongoose'

interface Bank extends Document {
    name: string
    mobile: string
    email: string
    password: string
    address: string
    state: string
    city: string
    pincode: string
}

export default Bank
