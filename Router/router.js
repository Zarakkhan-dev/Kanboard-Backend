const express = require("express");

const router = express.Router();
const connectToDatabase = require("../Connection/connection");
const Workplace = require("../UserSchema/schema");
connectToDatabase();

router.get("/", (request, response) => {
    response.send("homepage")
})

router.get("/about", (request, response) => {
    response.send("Aboutpage")
})

router.post("/kandboard", async (request, response) => {
    let { workplace } = request.body;
    try{
        const response = await Workplace.find();
        if(response.length <=0){
            await Workplace.insertMany(workplace);
        }
        else{
            const deletionResult = await Workplace.deleteMany();
            if(deletionResult.acknowledged ===true){
                await Workplace.insertMany(workplace);
            }
        }
    } catch (error) {
        console.error('Error saving data:', error);
        response.status(500).send('Internal Server Error');
    }

})


router.get("/kandboardfetching", async (request, response) => {

    let responseFetching = await Workplace.find();
    if(responseFetching.length <=0){
    }
    else{
        response.status(201).send( responseFetching )
    }
 

})



module.exports = router;