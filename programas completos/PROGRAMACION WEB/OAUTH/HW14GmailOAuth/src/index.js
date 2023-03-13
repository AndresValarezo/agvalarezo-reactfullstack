const express= require('express');
const path= require('path');
const nodemailer= require('nodemailer');
const {google}= require('googleapis');
const app = express();

const port = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public')));

app.post('/send-email',function(req, res){
    const {name, email,phone, message} = req.body;
    const CLIENT_ID="699170672538-jquebr1j914bh73lii39ai2qd67n929k.apps.googleusercontent.com";
    const CLIENT_SECRET="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";
    const REDIRECT_URI="https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN="1//04L_Tron5ZGIeCgYIARAAGAQSNwF-L9IrEG-wH5uyUocCVWkcUBTjBiyBiVwtFunD4hXJRhAsgMm4k2kd3_hjXHtNQzEI1A11mPs";
    const contentHtml= `
    <h1>Formulario de nodemailer</h1>
    <ul> 
        <li>name: ${name}</li>
        <li>email: ${email}</li>
        <li>celular: ${phone}</li>
        
    </ul>
    <p>${message}</p>
    `;
    res.send('User: ' + name +" authorized by OAuth2       email send to: agvalarezo1@espe.edu.ec");
   
   
    const oAuth2Client= new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)

    oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

    async function sendEmail(){
        try{
            const access_token = await  oAuth2Client.getAccessToken();
            const transporte= nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: "OAuth2",
                    user: "agvalarezo1@espe.edu.ec",
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: access_token
                }


            });
            const mailOptions = {
                form: "Pagina de OAuth <agvalarezo1@espe.edu.ec>",
                to: "agvalarezo1@espe.edu.ec",
                subject: "Correo desde Aplicacion Web",
                html: contentHtml,
            };
            const result = await transporte.sendMail(mailOptions);
            return result;
        }catch(error){
            console.log(error);
        }
        
    }
    sendEmail()
        .then(result=>res.status(200).send(''))
        .catch((error)=>console.log(error.message));
});

app.listen(port, function() {
    console.log('listening on port ' + port);
});