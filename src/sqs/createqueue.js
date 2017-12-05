// const credentials = new AWS.SharedIniFileCredentials({profile: 'work-account'});


const AWS = require('aws-sdk');
// Set the region 
// AWS.config.credentials = credentials;

AWS.config.update({ region: 'us-west-2' });
console.log(process.env.AWS_PROFILE)

// Create SQS service object
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });
// Load the AWS SDK for Node.js

var params = {
 DelaySeconds: 10,
 MessageAttributes: {
  "Title": {
    DataType: "String",
    StringValue: "The Whistler"
   },
  "Author": {
    DataType: "String",
    StringValue: "John Grisham"
   },
  "WeeksOn": {
    DataType: "Number",
    StringValue: "6"
   }
 },
 MessageBody: "Information about current NY Times fiction bestseller for week of 12/11/2016.",
 QueueUrl: "https://sqs.us-east-2.amazonaws.com/791347282543/FirstQueue"
};




function send() {
  sqs.sendMessage(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.MessageId);
    }
  });
}