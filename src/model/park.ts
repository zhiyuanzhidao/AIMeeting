import Room from './room'
export default class Park {
    //园区编号
    public parkNumber: string
    //园区名称
    public parkName: string
    // 园区容纳的房间个数
    public roomList: Room[];
    // 园区状态
    public status: number | string;

    public constructor(
        parkNumber: string, parkName: string, roomList: Room[], status: number | string
    ) {
        this.parkNumber = parkNumber;
        this.parkName = parkName;
        this.roomList = roomList;
        this.status = status;
    }
    getParkInfo() {
        let content = '';
        for (let i = 0; i < this.roomList.length; i++) {
            let room: Room = this.roomList[i];
            let roomInfo: string = JSON.stringify(room.getRoomInfo());
            content += `园区编号:${this.parkNumber}\n园区名称:${this.parkName}\n会议室信息:${roomInfo}\n园区状态:${this.status}\n`+"\n";
        }
        return content;
    }
}