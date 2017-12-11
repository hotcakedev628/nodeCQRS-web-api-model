const events = require('events');
const eventEmitter = new events.EventEmitter();

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sqs = new AWS.SQS({ apiVersion: '2012-11-05', params: { QueueUrl: process.env.AWS_PUBLISHED_EVENTS_QUEUE_URL } });


const receiveMessageParams = {
    MaxNumberOfMessages: 1,
    VisibilityTimeout: 10,
    WaitTimeSeconds: 5,
};


function processMessage(message) {
    console.log(message)
    
    return new Promise((resolve) => {
        eventEmitter.emit(message.Body.eventName, message.Body)
        resolve();
    });
}

function deleteMessage(message) {
    const params = {
        ReceiptHandle: message.ReceiptHandle,
    };

    return sqs.deleteMessage(params).promise()
        .then(() => console.info('Message deleted'));
}

function pollQueueForMessages() {
    // console.log('Waiting for message ...');
    sqs.receiveMessage(receiveMessageParams).promise()
        .then((res) => {
            if (!res.Messages) {
                // console.info('No new message');
                return;
            }
            const message = res.Messages[0];
            return processMessage(message)
                .then(() => deleteMessage(message));
        })
        .then(pollQueueForMessages)
        .catch((rmErr) => {
            console.error('Error:', rmErr);
            pollQueueForMessages();
        });
}




module.exports = { eventEmitter, pollQueueForMessages }


