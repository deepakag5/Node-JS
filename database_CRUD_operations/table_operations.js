// get the required package
const AWS = require("aws-sdk");
// specify the region and resource
AWS.config.update({region: 'us-east-2'});
const dynamodb = new AWS.DynamoDB();

// list tables
dynamodb.listTables({}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// create table
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

// describe table
dynamodb.describeTable({
    TableName: "test_table_ops"
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});


// update table with increased read capacity
dynamodb.updateTable({
    TableName: "test_table_ops",
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

// delete table - using describe table after this should give an error
dynamodb.deleteTable({
    TableName: "test_table_ops"
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});




