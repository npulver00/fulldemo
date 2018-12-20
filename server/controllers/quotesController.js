
module.exports={

    getQuotes: (req, res)=>{
        const db = req.app.get("db");
        db.read_quotes().then(quotes=>{
            res.send(quotes);
        }).catch(error =>{
            console.log("error in getQuotes", error);
            res.status(500).send("Something wrong with our server");
        })
    },
    
}