import { Schema, model } from "mongoose";

let collection= "animes"

let schema= new Schema({
    tittle: {type:String, require: true},
    persons: {type:String, require: true},
    caps: {type:Number, require: true},
    during: {type:Number, require: true},
    maps: {type:String, require: true},
    events:{type:String, require: true},
    genre: {type:String, require: true},
    studio: {type:String, require: true},
    releaseYear: {type:Number, require: true},
    rating: {type:Number, require: true},
},{
    timestamps: true
})

let Anime= model(collection, schema)
export default Anime