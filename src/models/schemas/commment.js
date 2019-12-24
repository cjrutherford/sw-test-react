import Schema from 'schm';

export const CommentSchema = new Schema({
    ticketNumber: {type: String, required: true},
    date: {type: Date, default: Date.now()},
    status: {type: String, enum: ['Done','Review', 'In Process', 'To Do', 'Blocked']},
    description: {type: String, required: true},
    blocker: {type: Boolean, default: false},
    user: {type: Schema.Types.ObjectId, required: true}
});