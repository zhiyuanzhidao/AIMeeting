
//查询园区所有房间
const QUERY_PARK_INFO_AND_ALL_ROOM = (
    parkId: string
) => `select mt.id as mt_id,mt.room_number,mt.level_position,mt.vertical_position,
             mt.capacity,mt.status as mtStatus,mt.park_id,mt.gmt_created,mt.gmt_modified,
             p.id,p.park_number,p.park_name,p.status,p.gmt_created,p.gmt_modified from meeting_room 
             as mt left join park as p on mt.park_id=p.id where park_id = "${parkId}";`

//插入一个基础园区信息            
const ADD_BASE_PARK = (
    parkNumber: string,
    parkName: string,
    status: string | number
) => `insert into park (park_number,park_name,status,gmt_created,gmt_modified) values("${parkNumber}","${parkName}","${status}",now(),now())`;

module.exports = {
    QUERY_PARK_INFO_AND_ALL_ROOM,
    ADD_BASE_PARK
}