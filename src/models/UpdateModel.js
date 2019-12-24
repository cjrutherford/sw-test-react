import Cacheous from 'cacheous';
import {UpdateSchema} from './schemas';

export const UpdateModel = (storeURI) => new Cacheous({
    name: 'Updates',
    schema: UpdateSchema,
    storeURI
});