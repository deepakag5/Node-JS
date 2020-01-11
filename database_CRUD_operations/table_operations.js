const AWS = require("aws-sdk");

AWS.config.update({region: 'us-east-2'});

const dynamodb = new AWS.DynamoDB();

dynamodb.listTables({}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


dynamodb.createTable({
    TableName: "test_table_ops",
    AttributeDefinitions: [
        {
            AttributeName: "user_id",
            AttributeType: "S"
        },
        {
            AttributeName: "timestamp",
            AttributeType: "N"
        }
    ],
    KeySchema: [
        {
            AttributeName: "user_id",
            KeyType: "HASH"
        },
        {
            AttributeName: "timestamp",
            KeyType: "RANGE"
        }
    ]
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }

}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2))
    }
});

dynamodb.describeTable({
    TableName: "test_table_ops"
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});


dynamodb.updateTable({
    TableName: "td_notes_sdk",
    ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 1
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});




