import * as Router from 'koa-router';
import Company from '../model/company';
import { DB } from '../common/db';
import * as assert from 'assert';
import Room from '../model/room';

let router = new Router();
router.get('/init', async ctx => {
  DB.company = new Company();
  ctx.body = 'init success';
});

router.get('/query', async ctx => {
  ctx.body = DB.company.print();
});

router.get('/addroom', async ctx => {
  let x = Math.floor(Math.random() * 40);
  let y = Math.floor(Math.random() * 40);
  let room = new Room(x, y, 4, 'TEST');
  DB.company.addMeetingRoom(room);
  ctx.body = DB.company.print();
});

export default router;
