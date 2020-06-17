const { google } = require('googleapis');
const credentials = require('./tokens.json');
const SCOPES = [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
];
/// crear jwt para pasarle los parametros a la auth
const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    SCOPES
);

module.exports=auth

