import Schema from 'schm';

export const UpdateSchema = new Schema({
    date: {type: Date, default: Date.now()},
    ticketComments: [{type: Schema.Types.ObjectId}]
});

