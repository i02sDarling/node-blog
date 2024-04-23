
const Apidata=require('./originData')
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

function getRes(pageNum){  
    if(Apidata.length/pageLen>=pageNum-1&&pageNum+1>0){
        error=false 
    }

    if(error){
        return{
           template:[],
           nextUrl:"/",
        }
    }else{
        begin=pageNum*pageLen+1;
        end=totalLen%pageLen===0?begin+pageLen:begin+totalLen+totalLen%pageLen;
        return {
            template:Apidata.slice(begin,end),
            nextUrl:'/?page='+pageNum+1,
        }
    }
    
    
}


module.exports=getRes