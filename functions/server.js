"use-strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 8100;
const admin = require("firebase-admin");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');
const postmark = require("postmark");
const Pusher = require("pusher-js")
const http = require('http').Server(app);
const serverless = require('serverless-http');
const io = require('socket.io')(http);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.disable("etag");

app.use( express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



const serviceAccount = require("./mopay-389e0-firebase-adminsdk-fh34l-89567dc3a6.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const auth = admin.auth();

app.get('/', (req,res) => {
   res.render("pay",{

   })
})


module.exports.handler = serverless(app);