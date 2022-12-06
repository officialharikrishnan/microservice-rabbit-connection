const axios=require('axios')
const http=require('http')

module.exports = {

    getData:()=>{
            axios.get("http://localhost:3000/products/").then((res)=>{
                // res.json()
                console.log(res.data);
            }).then((data)=>{
                // console.log(data);
            })

        
    } 
}  