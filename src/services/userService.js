import {UserModel} from '../models';
import {SaltedHash} from '../utils';

export class UserService{
    uri = process.env.REACT_APP_STORE_URI;
    constructor(){
        this.model = UserModel(this.uri);
        console.log('initialized user service');
    }

    async createNew(name, userName, password, teamId){
        try{
            const hashed = await SaltedHash(password)
            const newUser = await this.model.insert({name, userName, password: hashed, teams: [teamId]});
            if(!newUser) throw new Error('Unable to Create User....');
            return newUser;
        } catch (e) {
            throw e;
        }
    }

    async login(userName, pass) {
        try{
            const user = await this.model.where(x => x.userName === userName);
            if(!user) throw new Error('unable to locate user in database.');
            const comparison = await CompareHash(pass, user.password);
            if(!comparison) throw new Error('Sorry there was something wrong.....');
            return user;cj
        }catch(e) {
            throw e;
        }
    }

    async addToTeam(userId, teamId){
        try{
            const user = await this.model.getById(userId);
            if(!user) throw new Error('user not available in List.');
            user.teams.push(teamId);
            const saveduser = await this.model.insert(user);
            if(!saveduser) throw new Error('Unable to save user to data store');
            return saveduser;
        }catch(e){
            throw e;
        }
    }

    async removeFromTeam(userId, teamId) {
        try{
            const user = await this.model.getById(userId);
            if(!user) throw new Error('user not available in list.');
            const index = team.members.indexOf(teamId);
            user.teams.splice(index, 1);
            const saveduser = await this.model.insert(user);
            if(!saveduser) throw new Error('Unable to save user to data store');
            return saveduser;
        }catch(e) {
            throw e;
        }
    }

    async deleteUser(userId){
        try{
            const destroyed = await this.model.destroy(userId);
            if(!destroyed) throw new Error('unable to remove team from data store');
            return destroyed;
        } catch(e) {
            throw e;
        }
    }
}