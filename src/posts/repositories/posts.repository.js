class PostsRepository {
    constructor(dynamoDb) {
        this.dynamoDb = dynamoDb;
    }
}

module.exports = { PostsRepository };