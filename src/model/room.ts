
export default class Room {
    // 会议室编号
    public roomNumber: number;
    //会议室水平位置
    public levelPosition: number
    //会议室垂直位置
    public verticalPosition: number
    //会议室大小
    public capacity: number;
    //会议室状态
    public status: number | string;

    constructor(roomNumber: number, levelPosition: number, verticalPosition: number, capacity: number, status: number | string) {
        this.levelPosition = levelPosition;
        this.verticalPosition = verticalPosition;
        this.capacity = capacity;
        this.status = status;
        this.roomNumber = roomNumber;
    }
    public getRoomInfo() {
        return `房间编号:${this.roomNumber},水平坐标:${this.levelPosition},垂直坐标:${this.levelPosition},房间容量:${this.capacity},状态:${this.status}`
    }
}