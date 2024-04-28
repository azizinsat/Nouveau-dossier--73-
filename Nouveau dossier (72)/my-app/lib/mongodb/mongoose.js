import mongoose from "mongoose";
let isConnected= false;
export const connectToDB= async ()=>{
    mongoose.set('strickQuery',true)
    if(isConnected){
        console.log("MongoDb is already connected")
        return
    }
    try{
        await mongoose.connect('mongodb+srv://mohamedazizelhadjkhalifa:QexECiaHerHoUhC9@cluster0.qsjoxh3.mongodb.net/?retryWrites=true&w=majority',{
            dbName: "aid",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected=true
        console.log("Mongodb is connected")
    }catch(error){
        console.log(error)
    }
}