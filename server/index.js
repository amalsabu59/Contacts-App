const express = require("express");
const router = require("express").Router();
const mongoose = require("mongoose");
const Cors = require("cors")
const asyncHandler = require("express-async-handler")
const userRoutes = require("./routes/user")
const { accoutnSID, authToken, serviceSID } = require("./config")
const client = require("twilio")(accoutnSID, authToken);

//APP CONFIG
const app = express();
const port = process.env.PORT || 8001


//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
const connection_url = "mongodb+srv://kissan:akYarmhmXH3iW6Sy@cluster0.qvmiowc.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
   
    useNewUrlParser: true,
    useUnifiedTopology: true,

    
    
  }).then(()=> console.log("connected  to mongodb !!"))
  
    .catch(err => console.log(err));

//Routes
app.use("/users",userRoutes);

app.post("/send",
    asyncHandler(async (req, res) => {
      res.header("Content-Type", "application/json");
  
      client.messages
        .create({
          from: +16203180955,
          to: "+91" + req.query.recipient,
          body: req.query.textmessage,
        })
        .then(() => {
          res.send(JSON.stringify({ success: true }));
        })
        .catch((err) => {
          console.log(err);
          res.send(JSON.stringify({ success: false }));
        });
    })
  );

  app.get("/send", async (req, res) => {
    client.messages.list({ limit: 20 }).then((messages) => {
      const data = messages.map((m) => ({
        body: m.body,
        to: m.to,
        date: m.dateSent,
        status: m.status,
        sid: m.sid,
      }));
      res.json(data);
    });
  });



app.listen(port, ()=> {
    console.log(`listening in : ${port}`)
})