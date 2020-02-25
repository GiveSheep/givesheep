import { prop, modelOptions } from '@typegoose/typegoose';

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class User {
    @prop()
    username:string

    @prop()
    password:string
}