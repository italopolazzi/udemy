const functions = require('firebase-functions');
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
    // const cors = require('cors')({ origin: true })
admin.initializeApp()

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});

/*
exports.sendMail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const { sender } = request.query
        const mailOptions = {
            to: 'itpzzi@gmail.com',
            from: sender,
            subject: "I'm a subject test",
            html: `
              <p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
              <br />
              <p>E-mail test body</p>
            `
        }

        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return response.send(error.toString())
            }
            return response.send('Sender')
        })
    })

});
*/

exports.sendMail = functions.https.onCall((data, context) => {
    const mailOptions = {
        to: 'itpzzi@gmail.com',
        from: 'Fred Foo 👥 <itpzzi@outlook.com>',
        subject: data.subject,
        text: data.content,
        html: `
              <p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
              <br />
              <p>E-mail test body</p>
            `
    }
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            error ? reject(new functions.https.HttpsError('unknown', error.toString())) : resolve(mailOptions, data)
        })
    })
});