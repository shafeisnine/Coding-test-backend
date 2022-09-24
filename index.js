const express = require('express'); // Importing express module
  
const app = express(); // Creating an express object
const fs = require('fs');
const cors = require("cors");
  
const port = 7000;  // Setting an port for this application
app.use(express.json());
app.use(cors());

  
app.get('/', function (req, res) {
    res.send('node.js application is running');
  })







app.post("/customer-add", async (req, res) => {
  

     let customer = req.body;
    let customers = [];
    fs.readFile('customer-data.json', (err, data) => { // get the data from the file
        if(data != ''){
          customers = JSON.parse(data);
        }
        customers.push(customer);
        fs.writeFile('customer-data.json', JSON.stringify(customers , null, 2),
         res.send({ message: "Insert successfull" }),
        (err) => {
            console.log(err,"Error");
        });            
    });

  });
// Starting server using listen function
app.listen(port, function (err) {
   if(err){
       console.log("Error while starting server");
   }
   else{
       console.log("Server has been started at "+port);
   }
})