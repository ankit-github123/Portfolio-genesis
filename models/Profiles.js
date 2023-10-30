import { Schema, models, model } from "mongoose";

const ProfilesSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    image: {
        type: String
    }

})

export default models.Profiles || model('Profiles', ProfilesSchema);