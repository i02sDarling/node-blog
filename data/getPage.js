
const Apidata=require('./mockdata')
const res=[]
const pageLen=13;
const totalLen=38

function order() {
    let orderN = 0;
    
    function get_order() {
        orderN += 1;
        return orderN;
    }

    return get_order;
}

function getRes(start,end){  
    return Apidata.slice(start,end);
}

module.exports=getRes
// async function(pageNum){
//     if(Apidata.length/pageLen>pageNum+1){
//         error=true 
//     }
//     const data=await new Promise((resolve,reject)=>{
//         if(error) reject('out of length')
//         else{
//             begin=(pageNum-1)*pageLen+1;
//             end=totalLen%pageLen===0?begin+pageLen:begin+totalLen+totalLen%pageLen;
//             return getRes(begin,end)
//         }
//     })
// } 
