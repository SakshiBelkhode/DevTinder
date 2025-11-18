const express = require("express")

const app = express();

app.use("/user" , (req, res) => {
    res.send("HAHAHAHAHAHA");
});

//This will only handle GET call to/ user
app.get("/user", (req, res) => {
    res.send({firstname: "Sakshi" , lastname: "Belkhode"});
});

app.post("/user" , (req, res)=> {
    //saving data to DB
    res.send("Data Successfully saved to database");
});

app.delete("/user", (req , res) => {
    res.send("Deleted Sussessfully");
});

//This will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
    res.send("Hello from the server");
}); 


app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777.....")
});