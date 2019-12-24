import Schema from 'schm';

export const UserSchema = new Schema({
    name: {type: String, required: true},
    userName: {type: String, required: true},
    password: {type: String, reqiuired: true},
    teams: [{type: Schema.Types.ObjectId}]
});