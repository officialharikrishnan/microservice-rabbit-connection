const db=require('./connection')

module.exports={
    getData:()=>{
        return new Promise(async(resolve,reject)=>{
            var data=await db.get().collection('mobile').find().toArray()
            // console.log(data);
            resolve(data)
        })
    }
}