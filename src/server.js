const jsonServer = require('json-server')
const auth = require('json-server-auth')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./earthoer-api_numer.json');
const app = jsonServer.create()
const router = jsonServer.router('./Data/db.json')

const middlewares = jsonServer.defaults({noCors:true})
var cors = require("cors");
const rules = auth.rewriter({
    "items":664,

})
app.db = router.db
app.use(cors())
app.use(rules)
app.use(auth)
app.use(middlewares); 
app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocument)) 
app.use(router)
app.listen(3001,()=>
{
    console.log("JSON SERVER is running!!");
})