import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from  "./entities/Post";
import microConfig from "./mikro-orm.config";
import express from "express";
import {ApolloServer} from 'apollo-server-express';
import{buildSchema} from 'type-graphql';
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/posts";

const main = async () => {
const orm = await MikroORM.init(microConfig); // Connects to database
await orm.getMigrator().up();
// Run migrations before anything else
// const post = orm.em.create(Post, {title: 'first'});
// await orm.em.persistAndFlush(post); // Lets you insert const post into postgressql database
// const posts = await orm.em.find(Post, {});
// console.log(posts)
const app = express()

// app.get('/', (req, res) => { //unncessary if using graphql
//     res.send('hello')
// })
const apolloServer = new ApolloServer({ 
    schema: await buildSchema({
        resolvers: [HelloResolver, PostResolver],
        validate: false
    }),
    context: () => ({ em: orm.em })//PostResolver needs access to database through 'orm'. context is a special object that is accessible by all of your resolvers
})

apolloServer.applyMiddleware( {app} )

app.listen(4000, () => {
    console.log('Running on localhost:4000')
})

}

main().catch(err => {
    console.error(err)
})