const AWS = require('aws-sdk')
const dynamoose = require('dynamoose')
const awsConfig = require('./awsConfig')

let dynamoDB = new AWS.DynamoDB({
    region: 'local',
    endpoint: 'http://localhost:8000'
})

const getDynamoDbInstance = () => {
    return dynamoDB
}

dynamoose.aws.ddb.set(dynamoDB)

module.exports = {
    instance: dynamoose
}
