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

