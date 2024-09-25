import mongoose from "mongoose";

export const dbConnect = async() =>{
    try {
        const conn = await mongoose.connect(process.env.DB_URL)
        if(conn){
            console.log('db Connected');
            
        }
    } catch (error) {
        console.error('failed connect to DB err:'+error)
    }
}