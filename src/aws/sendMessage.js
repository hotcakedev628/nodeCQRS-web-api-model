const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });
var params = {
    DelaySeconds: 10,
    MessageAttributes: {},
    MessageBody: "Information about current NY Times fiction bestseller for week of 12/11/2016.",
    QueueUrl: process.env.AWS_QUEUE_URL
};


function send(commandName, payload) {
    return new Promise((resolve, reject) => {
        sqs.sendMessage(params, function (err, data) {
            params.MessageAttributes['command'] = commandName
            params.MessageBody = payload
            if (err) reject(err);
            else resolve(data.MessageId);
        });
    })
}


module.exports = { send }