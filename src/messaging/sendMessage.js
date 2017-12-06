const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });



function send(commandName, payload) {
    const params = {
        DelaySeconds: 0,
        MessageAttributes: { },
        QueueUrl: process.env.AWS_QUEUE_URL
    };
    return new Promise((resolve, reject) => {
        payload.commandName = commandName
        params.MessageBody = JSON.stringify(payload)        
        sqs.sendMessage(params, function (err, data) {
            if (err) reject(err);
            else resolve(data.MessageId);
        });
    })
}



module.exports = { send }