import { Schema, model } from 'mongoose'
import State from '@/resources/state/state.interface'

const StateSchema = new Schema(
    {
        state: {
            type: String,
            required: true,
        },

        cities: {
            type: [String],
            required: true,
        }
    }
)

export default model<State>('State', StateSchema)
