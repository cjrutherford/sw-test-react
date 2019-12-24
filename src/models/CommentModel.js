import Cacheous from 'cacheous';
import {CommentSchema} from './schemas';

export const CommentModel = (storeURI) => new Cacheous({
    name: 'Comments',
    schema: CommentSchema,
    storeURI
});