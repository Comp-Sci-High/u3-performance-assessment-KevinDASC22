// Good luck!
const express = require("express")
const { request } = require("http")
const app = express()

const operators = {
    attackers:[
        {name:"Ash",weapon: ["R4-C", "M1014"],abilities:"M320 Grenade Launcher"},
        {name:"Thermite",weapon:["M1014", "556XI"],abilities:"Exothermic Charge"},
        {name:"Sledge",weapon:["L85A2", "M1014"],abilities:"Sledgehammer"},
        {name:"Hibana",weapon:["Type-89", "SuperNova"],abilities:"X-Kairos"},
        {name:"Motagne",weapon: ["P90", "SR-25"],abilities:"Extendable Shield"},
    ],
defenders:[
 {name:"Jäger",weapon: ["M870", "416-C"],abilities:"Active Defense System"},
{name:"Mira",weapon: ["Vector .45 ACP", "Uzi Pro"],abilities:"Black Mirror"},
{name:"Bandit",weapon: ["MP7", "M1014"],abilities:"Shock Wire"},
{name:"Smoke",weapon:["M590A1", "FMG9"],abilities:"Toxic gas canisters"},
{name:"Caveira",weapon: ["M12", "USP40"],ability:"Silent step"},
],
}

app.use((request,response,next)=>{
    console.log(request.method+""+request.url)
    next();
})
app.get("/",(request,response)=>{
response.status(200).send("<h1>Welcome to my website.Put /docs at the end of the url to see more information</h1>")

})
app.get("/docs",(request,response)=>{
    response.status(200).send("<h1>To see the attackers array put /attackers at the end of the url.To see the defenders array put /defenders at the end of the url.")
})
app.get("/attackers",(request,response)=>{
response.status(200).json(operators.attackers)
})
app.get("/defenders",(request,response)=>{
    response.status(200).json(operators.defenders)
    })


    
    app.use((resquest,response,next)=>{
        response.status(404).send("404 not found")
    })
   
app.listen(3000, () => {
    console.log("Hell nah")
})