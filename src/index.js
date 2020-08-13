import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import cors from 'koa2-cors'

import mainRoute from './routes/mainRoute'

const app = new Koa()
const port = process.env.PORT || 3000

app.use(logger())
app.use(bodyParser())
app.use(mainRoute.routes())
app.use(cors())

app.listen(port, async ()=> {
  console.log(`App start to listen at port ${port}`)
})


