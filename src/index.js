import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'

import mainRoute from './routes/mainRoute'

const app = new Koa()

app.use(logger())
app.use(bodyParser())
app.use(mainRoute.routes())

app.listen(80, async ()=> {
  console.log('App start to listen at port 5000')
})


