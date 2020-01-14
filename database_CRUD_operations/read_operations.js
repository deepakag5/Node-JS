const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

// read a single item matching condition
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


// read operations only within partition
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

// read operations across partition
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

// reaad multiple items and tables
docClient.batchGet({
    RequestItems: {
        'test_table_ops': {
            Keys: [
                {
                    user_id: 'user_1',
                    timestamp: 1
                },
                {
                    user_id: 'user_2',
                    timestamp: 2
                }
            ]
        },
        'test_read_ops': {
            Keys: [
                {
                    user_id: 'user_read_1',
                    timestamp: 1
                }
            ]
        }
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});