const express = require('express');
const app = express();
const AWS = require('aws-sdk');
require('dotenv').config();

// check to see if your credentials are properly configured
// AWS.config.getCredentials(function (err) {
//   if (err) console.log(err.stack);
//   // credentials not loaded
//   else {
//     console.log('Access key:', AWS.config.credentials);
//   }
// });

app.get('/', (req, res) => {
  const { number, message } = req.query;
  const sns = new AWS.SNS({ apiVersion: '2010-03-31' });
  const params = {
    Message: message,
    PhoneNumber: number,
  };

  sns.publish(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
});

app.listen(3000);
