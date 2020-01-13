// get the required package
const AWS = require('aws-sdk');

// specify the region and resource
AWS.config.update({region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.put({
    TableName: 'test_table_ops',
    Item: {
        user_id: 'user_1',
        timestamp: 1,
        title: 'title_1',
        content: 'content_1'
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        cosole.log(data);
    }
});


docClient.put({
    TableName: 'test_table_ops',
    Item: {
        user_id: 'user_1',
        timestamp: 2,
        title: 'title_2',
        content: 'content_2'
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

docClient.update({
    TableName: 'test_table_ops',
    Key: {
        user_id: 'user_1',
        timestamp: 2
    },
    UpdateExpression: 'set #t = :t',
    ExpressionAttributeNames: {
        '#t': 'title'
    },
    ExpressionAttributeValues: {
        ':t': 'update title'
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

docClient.delete({
    TableName: 'test_table_ops',
    Key: {
        user_id: 'user_1',
        timestamp: 1
    }
    }, (err, data) =>
{
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}
);

docClient.batchWrite({
    RequestItems: {
        'test_table_ops': [
            {
                DeleteRequest: {
                    Key: 'user_1',
                    timestamp: 2
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'user_2',
                        timestamp: 1,
                        title: 'title_2',
                        content: 'content_2'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'user_3',
                        timestamp: 1,
                        title: 'title_3',
                        content: 'content_3'
                    }
                }
            }
        ]
    }

}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

