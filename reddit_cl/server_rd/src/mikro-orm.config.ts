import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from 'path'; // built into node


export default {
    migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations. __dirname gives the absolute directory home/ln/reddit_cli/...
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files. ts --> [tj]s
    },

    entities: [Post],
    dbName: 'loch_ness',
    password: 'Z1uw2c5vph',
    type: 'postgresql',
    debug: !__prod__,
    
} as Parameters<typeof MikroORM.init>[0]; // changes steven.type from type: string to type:posgresql

