import Schema from 'schm';

export const CommentSchema = new Schema({
    ticketNumber: {type: String, required: true},
    status: {type: String, enum: ['Done','Review', 'In Process', 'To Do', 'Blocked']},
    description: {type: String, required: true}
});