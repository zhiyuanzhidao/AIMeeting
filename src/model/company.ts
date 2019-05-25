import Room from './room';
import * as assert from 'assert';

export default class Company {
  width: number;
  height: number;
  roomList: Room[][] = [];

  constructor(width: number = 40, height: number = 40) {
    this.width = width;
    this.height = height;
    for (let i = 0; i < width; i++) {
      this.roomList.push([]);
      for (let j = 0; j < height; j++) {
        this.roomList[i].push(null);
      }
    }
  }

  /**
   * 添加房间信息
   * @param room 房间
   */
  addMeetingRoom(room: Room) {
    assert(room != null, '房间不能为空');
    this.roomList[room.positionX][room.positionY] = room;
  }

  print() {
    let desc = '';
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        desc += `${this.roomList[i][j] === null ? 'X' : 'O'} `;
      }
      desc += '\n';
    }
    console.log(desc);
    return desc;
  }
}
