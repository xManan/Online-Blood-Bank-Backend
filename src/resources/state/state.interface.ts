import { Document } from 'mongoose'

interface State extends Document {
    state: string
    cities: string[]
}

export default State
