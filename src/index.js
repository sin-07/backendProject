import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on the port number ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
  });

// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on('error',(error)=>{
//             console.log("ERR:",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is running on port ${process.env.PORT}`)
//         })

//     }catch(err){
//         console.log("ERROR:",err)
//         throw err
//     }
// })
