import * as Router from 'koa-router';
import koaBody = require("koa-body");
import Park from '../model/park';
import Room from '../model/room';
const pool = require('../lib/pool');
const psql = require('../lib/sql/parksql');
const rsql = require('../lib/sql/roomsql');

const router = new Router();

enum RoomStatus {
    //未装修 0
    NOT_RENOVATED,
    //已装修 1
    RENOVATED
}
enum ParkStatus {
    //未使用 0
    NOT_USE,
    //已使用 1
    IN_USE
}
//查询园区所有房间信息
router.get("/queryAllRoom", async ctx => {
    let parkId: string = "1";
    const result = await pool.query(psql.QUERY_PARK_INFO_AND_ALL_ROOM(parkId));
    ctx.body = JSON.stringify(result);
    let i: number = 0;
    let roomList: Room[] = [];
    let parkStatus: string;
    let parkNumber: string;
    let parkName: string;
    for (let r of result) {
        console.log(r.mtStatus);
        let status: string = RoomStatus[r.mtStatus];
        let room = new Room(r.room_number, r.level_position, r.vertical_position, r.capacity, status);
        i++;
        roomList.push(room);
        parkStatus = ParkStatus[r.status];
        parkNumber = r.park_number;
        parkName = r.park_name;

    }
    console.log("目前园区房间总数为：" + i + "\n")
    let parkInfo = new Park(parkNumber, parkName, roomList, parkStatus);
    console.log(parkInfo.getParkInfo());
});

//增加一个新园区
router.post("/addPark", async ctx => {
    const { parkNumber, parkName, status } = ctx.request.body;
    console.log(ctx.request.body);
    const result = await pool.query(psql.ADD_BASE_PARK(parkNumber, parkName, status));
    ctx.body = JSON.stringify(ctx.body);
    ctx.redirect('/api/park');
});

module.exports = router.routes();