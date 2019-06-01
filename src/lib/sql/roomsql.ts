// 查询未装修房间
const QUERY_NOT_RENOVATED_ROOM = 'select * from meeting_room where status = 0';

// 查询已装修房间
const QUERY_RENOVATED_ROOM = 'select * from meeting_room where status = 1';

//插入一个未装修的房间
const INSERT_NOT_RENOVATED_ROOM = (
    roomNumber: number,
    levelPosition: string,
    verticalPosition: string,
    capacity: string,
    status: number | string,
    parkId: number
) => `insert into meeting_room(room_number,level_position,vertical_position,capacity,status,park_id,gmt_created,gmt_modified)
values("${roomNumber}", "${levelPosition}", "${verticalPosition}", ${capacity}, "${status}",${parkId},now(),now())`;

//更新房间的状态
const UPDATE_ROOM_STATUS = (
    id: number,
    status: string
) => `update meeting_room set gmt_modified =now(),status="${status}" where id =${id}`;

module.exports = {
    QUERY_NOT_RENOVATED_ROOM,
    QUERY_RENOVATED_ROOM,
    INSERT_NOT_RENOVATED_ROOM,
    UPDATE_ROOM_STATUS
};