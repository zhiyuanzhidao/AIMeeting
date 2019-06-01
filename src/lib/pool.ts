import mysql = require("promise-mysql");
const pool = mysql.createPool({
    host:"rm-bp1ygn720pi0ay768o.mysql.rds.aliyuncs.com",
    port:3306,
    user:"qingguatang",
    password:"!WDVzdt7",
    database:"member"
})
module.exports = {
    query: async(sql:any,data:any)=>{
        try{
            const result = await pool.query(sql,data);
            return result;
        }catch(error){
           console.log(error);
        }
    }
}