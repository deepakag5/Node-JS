const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.get({
    TableName: 'test_table_ops',
    Key: {
        user_id: 'user_1',
        timestamp: 1
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

docClient.query({
    TableName: 'test_table_ops',
    KeyConditionExpression: "user_id= :uid",
    ExpressionAttributeValues: {
        ":uid": "A"
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


docClient.scan({
    TableName: "test_table_ops",
    FilterExpression: "cat=:cat",
    ExpressionAttributeValues: {
        ":cat": "general"
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});