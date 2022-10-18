require('dotenv').config();

class PostsRepository {
    constructor(dynamoDb) {
        this.dynamoDb = dynamoDb;
        this.table = process.env.POSTS_TABLE
    }
    async getAllPosts(pages) {
        let params = {
            TableName: this.table,
            Limit: pages,
        };

        if (pages === 0 || pages === undefined) {
            params = {
                TableName: this.table,
            };
        }

        const result = await this.dynamoDb.scan(params).promise();

        if (result.Item === undefined || result.Item === null) {
            return [];
        }

        return result.Item;
    }

    async getPostById(id) {
        const params = {
            TableName: this.table,
            Key: {
                id,
            },
        };
        const result = await this.dynamoDb.get(params).promise();

        if (result.Item === undefined || result.Item === null) {
            return {};
        }

        return result.Item;
    }

    async createPost(post) {
        const params = {
            TableName: this.table,
            Item: post,
        };
        const createdPost = await this.dynamoDb.put(params).promise();

        if (createdPost.Item === undefined || createdPost.Item === null) {
            return {};
        }

        return createdPost.Item;
    }

    async updatePostContent(id, post) {
        const params = {
            TableName: this.table,
            Key: {
                id,
            },
            UpdateExpression: 'SET #content = list_append(#content, :content), #updatedAt = list_append(#updatedAt, :updatedAt)',
            ExpressionAttributeNames: {
                '#content': 'content',
                '#updatedAt': 'updatedAt',
            },
            ExpressionAttributeValues: {
                ':content': [post.content],
                ':updatedAt': [post.updatedAt],
            },
            ReturnValues: 'ALL_NEW',
        };
        const result = await this.dynamoDb.update(params).promise();

        if (result.Attributes === undefined || result.Attributes === null) {
            return {};
        }

        return result.Attributes;
    }

    async updatePostStatus(id, post) {
        const params = {
            TableName: this.table,
            Key: {
                id,
            },
            UpdateExpression: 'SET #status = :status',
            ExpressionAttributeNames: {
                '#status': 'status',
            },
            ExpressionAttributeValues: {
                ':status': post.status === false ? false : true,
            },
            ReturnValues: 'ALL_NEW',
        };

        const result = await this.dynamoDb.update(params).promise();

        if (result.Attributes === undefined || result.Attributes === null) {
            return {};
        }

        return result.Attributes;
    }

    async deletePost(id) {
        const params = {
            TableName: this.table,
            Key: {
                id,
            },
        };
        const deletedPost = await this.dynamoDb.delete(params).promise();

        if (deletedPost.Item === undefined || deletedPost.Item === null) {
            return {};
        }

        return deletedPost.Item;
    }
}

module.exports = { PostsRepository };

//status code if query is wrong -> 400
//status code if query is right