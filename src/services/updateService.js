import { UpdateModel } from "../models";

export class CommentService {
  uri = process.env.REACT_APP_STORE_URI;
  constructor() {
    this.model = UpdateModel(this.uri);
    console.log('initialized update service');
  }

  async createNew(comments, haveBlockers) {
    try {
      const update = await this.model.insert({
        ticketComments: [...comments],
        haveBlockers
      });
      if (!update) throw new Error("Issue Creating update.");
      return update;
    } catch (e) {
      throw e;
    }
  }

  async addCommentToUpdate(updateId, commentId) {
    try {
      const update = await this.model.getById(updateId);
      if (!update) throw new Error("unable to retrieve update");
      update.ticketComments.push(commentId)
      const saved = await this.model.insert(update);
      if (!saved) throw new Error("unable to save update comments.");
      return saved;
    } catch (e) {
      throw e;
    }
  }

  async removeCommentFromUpdate(updateId, commentId) {
      try{
          const update = await this.model.getById(updateId);
          if(!update) throw new Error('unable to get update from data store');
          const index = update.ticketComments.indexOf(commentId);
          if(index === -1) throw new Error('Sorry that comment does not exist on that update.');
          update.ticketComments.splice(index, 1);
          const saved = await this.model.insert(update);
          if(!saved) throw new Error('Issue saving the update to data store.');
          return saved;
      }catch(e) {
          throw e;
      }
  }

  async deleteUpdate(updateId) {
    try {
      const deleted = await this.model.destroy(updateId);
      if (!deleted) throw new Error("unable to delete comment.");
      return deleted;
    } catch (e) {
      throw e;
    }
  }
}