const express = require("express");
const app = express();
app.listen(3000);

var users = [{
    firstName: "Gagandeep",
    Kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}];

app.get("/get", function(req,res){
    const johnKidneys = users[0].Kidneys;
    const johnKidneysLength = johnKidneys.length;
    let healthyKidneys = 0;

    for(let i = 0; i < johnKidneysLength; i++){
        if(johnKidneys[i].healthy){
            healthyKidneys++;
        }
    }
    const unhealthyKidneys = johnKidneysLength - healthyKidneys;

    res.json({
        johnKidneys,
        johnKidneysLength,
        healthyKidneys,
        unhealthyKidneys
    })
});

app.use(express.json()); 
app.post("/addHealthyKidney", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].Kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/detoxAll", function(req,res){
    for(let i = 0; i < users[0].Kidneys.length; i++){
        users[0].Kidneys[i].healthy = true;
    }
    res.json({
        msg : "Done!"
    })
})

app.delete("/operateUnhealthy", function(req,res){
    
    res.json({
        msg : "Done!"
    })
})

