const AWS = require('aws-sdk')
const dynamoose = require('dynamoose')

let dynamoDB = new AWS.DynamoDB({
    region: 'local',
    endpoint: 'http://localhost:8000'
})

dynamoose.aws.ddb.set(dynamoDB)

dynamoose.model.defaults.set({
    create: true,
    waitForActive: true,
    update: true,
    serverSideEncryption: true
})

module.exports = {
    instance: dynamoose
}
