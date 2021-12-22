const AWS = require('aws-sdk')

AWS.config.update( {
    region: 'local',
    endpoint: 'http://localhost:8000'
})

const getAWSConfig = () => {
    return AWS
}

module.exports = {
    AWS
}

