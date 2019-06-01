import * as Koa from 'koa';
import * as Router from 'koa-router';
import koaBody = require("koa-body");
// 引用路由文件
const room = require('./api/roomapi');
const park = require('./api/parkapi');

const app = new Koa();
const router = new Router();

// 配置总路由
router.use('/api/room', room);
router.use('/api/park', park);

app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods);
app.listen(3000);
console.log('Server running on port 3000');
