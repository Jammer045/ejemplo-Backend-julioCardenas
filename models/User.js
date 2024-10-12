import {Schema, model} from "mongoose";

let collection = "users"
let schema= new Schema({
    name: {type:String, require: true},
    email:{type:String, require: true},
    password: {type:String, require: true},
    photo: {type:String, require: true},
    role: {type:Number, require: true},
}, {
    timestamps: true
})

let User= model(collection, schema)
export default User