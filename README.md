### Tiny API: SMS-HMU aka Sunday scaries Messaging Service to Hype Mondays Up! 🎉

##### The WHY

I get major [Sunday scaries](https://www.urbandictionary.com/define.php?term=Sunday%20Scaries) 🥺, so I'm building this SMS-HMU API to send myself funny / motivational text messages to hype me up every Monday. Feel free to fork this as starter code for whatever text message app you're building! 😁

##### Technologies used

I built this tiny but mighty SMS (short message service) API on top of [AWS SNS](https://aws.amazon.com/sns/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc) (Amazon Simple Notification Service).

##### How do I use the API? 

Pass the API a phone number and message, and that number will receive a text with the message. 📲

This query: 'http://localhost:3000/?message=hello%20world&number=15555555555'
would send 'hello world' to +1 (555) 555-5555

#### Tiny Tutorial

1. Create a starter project

- `npm init`

2. Install express and nodemon

- `npm i express nodemon`
- add a start script to package.json "start": "nodemon app.js"
- copy/pasta the [starter express server code](https://www.npmjs.com/package/express) into app.js

3. Install dotenv and create .env and .gitignore files

- `npm i dotenv`
- `touch .env .gitignore`
- IMPORTANT: add .env to the .gitignore so you don't leak your creds
- require dotenv in app.js: require('dotenv').config();

4. Create an IAM user for the project

- sign into the [AWS IAM Console](https://console.aws.amazon.com/iam/home)
- create an IAM group / user with programatic SNS admin access
- copy/pasta the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY into the .env file

5. npm i aws-sdk

- paste the [aws-sdk starter code](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-nodejs.html#getting-started-nodejs-credentials) into app.js to check whether you've set your credentials correctly in .env
- Saving your changes should trigger console logged

6. Visit the AWS SNS Console.

- Review [SMS pricing docs](https://aws.amazon.com/sns/sms-pricing/). As of Jan 2021, Your first 100 SMS messages sent to US phone numbers each month are free.
- SNS is a regional service. Visit the [AWS SNS Console](console.aws.amazon.com/sns/) and use the upper right hand dropdown to find the closest available service region to you.
- add your region to the .env file ex: AWS_REGION=us-west-2

7. Write API code.

- destructure args off of req.query: const { sender, message, number } = req.query;
- Send a request using SNS -- [see AWS JavaScript SDK SNS docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html)

8. Test your app:

- http://localhost:3000/?message=hello%20world&number=15555555555
- replace 15555555555 with your phone number

8. Deploy!
