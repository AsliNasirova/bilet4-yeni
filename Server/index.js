import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'


const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const watchURL=process.env.URL
console.log(watchURL);
const port = 5000


const Schema = mongoose.Schema;

const WatchSchema = new Schema({
  image: {type:String, required:true},
  title:  {type:String, required:true},
  price: {type:Number, required:true}
  
});

const Watchs = mongoose.model('Watch', WatchSchema);


app.get('/',async (req, res) => {
    try {
        const allWatch=await Watchs.find({})
        res.send(allWatch)
    } catch (error) {
        res.status(500).json({message:error})
        
    }

})

app.get('/:id',async (req, res) => {
    try {
        const {id}=req.params
        const watch=await Watchs.findById(id)
        res.send(watch)
    } catch (error) {
        res.status(500).json({message:error})
        
    }

})

app.post('/',async (req, res) => {
    try {
        const watch=new Watchs(req.body)
        await watch.save()
        res.send(watch)
    } catch (error) {
        res.status(500).json({message:error})
        
    }

})


app.delete('/:id',async (req, res) => {
    try {
        const {id}=req.params
        const watch=await Watchs.findByIdAndDelete(id)
        res.status(200).json({message:"deleted"})
    } catch (error) {
        res.status(500).json({message:error})
        
    }

})
mongoose.connect(watchURL)
  .then(() => console.log('Connected!'))
  .catch(() => console.log('db not connect'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})