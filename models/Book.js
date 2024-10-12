import { Schema, model } from "mongoose";

let collection= "books"

let schema= new Schema ({
    tittle:{type: String, require: true},
    year: {type: Number, require: true},
    pages: {type: Number, require: true},
    caps: {type: Number, require: true},
    autor: {type: String, require: true},
    editorial: {type: String, require: true},
    sales: {type: Number, require: true},
    edition: {type: Number, require: true}
}, {
    timestamps: true
})

let Book= model(collection, schema)
export default Book