import {TeamModel} from '../models';

export class TeamService{
    uri = process.env.REACT_APP_STORE_URI;
    constructor(){
        this.model = TeamModel(this.uri);
    }

    async createNew(name){
        try{
            const newTeam = await this.model.insert({name, lastUpdated: Date.now()});
            if(!newTeam) throw new Error('Unable to Create Team....');
            return newTeam;
        } catch (e) {
            throw e;
        }
    }

    async addMember(memberId, teamId){
        try{
            const team = await this.model.getById(teamId);
            if(!team) throw new Error('Team not available in List.');
            team.members.push(memberId);
            team.lastUpdated = Date.now();
            const savedTeam = await this.model.insert(team);
            if(!savedTeam) throw new Error('Unable to save team to data store');
            return savedTeam;
        }catch(e){
            throw e;
        }
    }

    async removeMember(memberId, teamId) {
        try{
            const team = await this.model.getById(teamId);
            if(!team) throw new Error('Team not available in list.');
            const index = team.members.indexOf(memberId);
            team.members.splice(index, 1);
            team.lastUpdated = Date.now();
            const savedTeam = await this.model.insert(team);
            if(!savedTeam) throw new Error('Unable to save team to data store');
            return savedTeam;
        }catch(e) {
            throw e;
        }
    }

    async deleteTeam(teamId){
        try{
            const destroyed = await this.model.destroy(teamId);
            if(!destroyed) throw new Error('unable to remove team from data store');
            return destroyed;
        } catch(e) {
            throw e;
        }
    }
}