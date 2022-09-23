const { default: mongoose } = require('mongoose')
const work = require('../model/work')
const getSong = async (req,res)=>{
    const song = await work.find({}).sort({_id:-1})
    res.status(200).json(song)
}
const createSong = async(req,res)=>{
    const {_id,name,link} = {
        _id:new mongoose.Types.ObjectId,
        ...req.body
    }
    try{
        const song = await work.create({_id,name,link})
        res.status(200).json(song)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}
const deleteSong = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout = await work.findByIdAndDelete({_id:id})
    if(!workout){
        return res.status(400).json({error:'No such workout'})
    }
    res.status(200).json(workout)
}
module.exports = {getSong,createSong,deleteSong}