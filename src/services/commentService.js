import { CommentModel } from "../models";

export class CommentService {
  uri = process.env.REACT_APP_STORE_URI;
  constructor() {
    this.model = UserModel(this.uri);
    console.log('initialized comment service');
  }

  async createNew(ticketNumber, status, description, blocker, user) {
    try {
      const comment = await this.model.insert({
        ticketNumber,
        status,
        description,
        blocker,
        user
      });
      if (!comment) throw new Error("Issue Creating comment.");
      return comment;
    } catch (e) {
      throw e;
    }
  }

  async updateComment(description, commentId) {
    try {
      const comment = await this.model.getById(commentId);
      if (!comment) throw new Error("unable to retrieve comment");
      comment.description = description;
      const saved = await this.model.insert(comment);
      if (!saved) throw new Error("unable to save comment updates.");
      return saved;
    } catch (e) {
      throw e;
    }
  }

  async deleteComment(commentId) {
    try {
      const deleted = await this.model.destroy(commentId);
      if (!deleted) throw new Error("unable to delete comment.");
      return deleted;
    } catch (e) {
      throw e;
    }
  }
}
