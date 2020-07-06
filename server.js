const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/leadsApp" || "mongodb://heroku_4w9bh03q:9ubovg67gtpq7cp6lame40j5jh@ds133311.mlab.com:33311/heroku_4w9bh03q",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

mongoose.connection.on('connected',()=>{
    console.log('successfully connected to database mongodb @3001');
    
    });

mongoose.connection.on('error',()=>{

        if(err)
        {
    
            console.log('Error in database connection:'+err);
        }
    
    
        });
// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "client", "build", "index.html"));
});

// server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
