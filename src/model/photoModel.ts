import knex from "knex"
import config from "../config/knexfile"

const db = knex(config.development)
export interface Photo {
    id?: number;
    photoName : string;
    photoUrl : string;
    details : string

}

export const photoModel = {
create : (Photos : Photo) => db("Photo").insert(Photos)
}