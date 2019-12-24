import Cacheous from 'cacheous';
import {UserSchema} from './schemas'

export const UserModel = (storeURI) =>  new Cacheous({
    name: 'Users',
    schema: UserSchema,
    storeURI
});