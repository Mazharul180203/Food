import {model, models, Schema} from "mongoose";
import {error} from "next/dist/build/output/log";

const UserSchema = new Schema({
    email:{type:String, required:true, unique:true},
    password: {
        type:String,
        required: true,
        validate: pass=>{
            if(!pass?.length || pass.length < 5){
                new error("password must be at least 5 charecter")
            }
        },
    },
}, {timestamps: true});

export const User = models?.User || model('User', UserSchema);