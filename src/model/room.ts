export default class Room {
  //房间位置X
  positionX: number;
  //房间位置Y
  positionY: number;
  //房间限制人数
  limit: number;

  name: string;

  constructor(
    positionX: number,
    positionY: number,
    limit: number,
    name: string
  ) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.limit = limit;
    this.name = name;
  }

  print() {
    return `Room(${this.name}) (x: ${this.positionX}, y: ${
      this.positionY
    }) limit: ${this.limit}`;
  }
}
