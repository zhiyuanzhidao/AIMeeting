
import * as Router from 'koa-router';
import koaBody = require("koa-body");
import Room from '../model/room';

const pool = require('../lib/pool');
const psql = require('../lib/sql/parksql');
const rsql = require('../lib/sql/roomsql');

const router = new Router();

//增加一个新房间
router.post("/addRoom", async ctx => {
    const { roomNumber, levelPosition, verticalPosition, capacity, status, parkId } = ctx.request.body;
    const result = await pool.query(rsql.INSERT_NOT_RENOVATED_ROOM(roomNumber, levelPosition, verticalPosition, capacity, status, parkId));
    ctx.body = JSON.stringify(ctx.body);
    console.log(ctx.request.body);
    ctx.redirect('/api/room');
});

//更新房间为会议室
router.post("/updateRoomStatus", async ctx => {
    const { id, status } = ctx.request.body;
    const result = await pool.query(rsql.UPDATE_ROOM_STATUS(id, status));
    ctx.body = JSON.stringify(ctx.body);
    console.log(ctx.request.body);
})

module.exports = router.routes();

