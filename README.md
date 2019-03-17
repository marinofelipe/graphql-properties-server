# GraphQL properties server demo 🏡🏢
This is a very simple graphql server that is going to be used in my CocoaHeads SP talk about, you know, GraphQL on iOS.  
It exposes a property list query which provides property data, including interested contacts. It's also possible to like the properties using a mutation.

## How to run
#### clone the repo
`git clone git@github.com:marinofelipe/graphql-properties-server.git`

#### open the terminal and
open the folder
`cd ~/graphql-properties-server`

run the server
`node server.js`

#### Port
By default the server runs at localhost's 4000 port

## How to use
Open http://localhost:4000/ and play with it 🕹 on the [playground](https://www.apollographql.com/docs/apollo-server/features/graphql-playground.html)

The playground also contains information about the *schema* and the *docs*.

## iOS app
You should also see the [iOS project](https://github.com/marinofelipe/graphql-property-list-app) that consumes this server using Apollo-iOS 🚀
