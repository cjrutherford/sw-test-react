import Schema from 'schm';

export const TeamSchema = new Schema({
    name: {type: String, required: true, unique: true},
    members: [{type: Schema.Types.ObjectId}],
    lastUpdated: {type: Date}
});


