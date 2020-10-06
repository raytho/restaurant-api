const MongoLib = require("../lib/mongo");

class MenuItemsService {
  constructor() {
    this.collection = "menu_options";
    this.mongoDB = new MongoLib();
  }

  async getOptions({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const options = await this.mongoDB.getAll(this.collection, query);
    return options || [];
  }

  async getOption({ itemId }) {
    const option = await this.mongoDB.get(this.collection, itemId);
    return option || {};
  }

  async createOption({ option }) {
    const createOptionId = await this.mongoDB.create(this.collection, option);
    return createOptionId;
  }

  async updateOption({ itemId, option } = {}) {
    const updatedOptionId = await this.mongoDB.update(
      this.collection,
      itemId,
      option
    );
    return updatedOptionId;
  }

  async deleteOption({ itemId }) {
    const deletedOptionId = await this.mongoDB.delete(this.collection, itemId);
    return deletedOptionId;
  }
}

module.exports = MenuItemsService;
