const AWS = require("aws-sdk");
AWS.config.update({region: 'us-west-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.update({
    TableName: 'test_table_ops',
    Key: {
        user_id: 'user_1',
        timestamp: 1
    },
    UpdateExpression: 'set #v = #v + :incr',
    ExpressionAttributeNames: {
        '#v': 'views'
    },
    ExpressionAttributeValues: {
        ':incr': 1
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});