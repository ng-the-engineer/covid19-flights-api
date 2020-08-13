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
app.use(mainRoute.allowedMethods())

var options = {
  origin: '*'
};

app.use(cors(options))

// app.use(async (ctx, next) => {
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, append,delete,entries,foreach,get,has,keys,set,values,Authorization');
//   ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//   // ctx.set('Access-Control-Max-Age', '86400');
//   ctx.set('Access-Control-Expose-Headers', 'Origin, Content-Length,API-Key')
//   ctx.set('Access-Control-Allow-Credentials', true);
//   await next();
// });

app.listen(port, async ()=> {
  console.log(`App start to listen at port ${port}`)
})


