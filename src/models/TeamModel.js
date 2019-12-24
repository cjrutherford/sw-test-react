import Cacheous from 'cacheous';
import {TeamSchema} from './schemas';

export const TeamModel = (storeURI) => new Cacheous({
    name: 'Teams',
    schema: TeamSchema,
    storeURI
});