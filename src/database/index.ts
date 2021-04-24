import {createConnection} from "typeorm";

createConnection().then(r => console.log("Successfully connected to database."));
