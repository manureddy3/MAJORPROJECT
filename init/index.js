const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js"); 


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("connection made by manu to db is grand success");
})
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data =  initData.data.map((obj)=>({...obj, owner:"66acd9f8702516f0b00fc626"}));
    await Listing.insertMany(initData.data);
    console.log("data was intialized");

}

initDB();