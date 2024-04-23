
const Apidata=require('./mockdata')
const res=[];
const pageLen=13;
const totalLen=Apidata.length;

function order() {
    let orderN = 0;
    
    function get_order() {
        orderN += 1;
        return orderN;
    }

    return get_order;
}

function getRes(pageNum){ 
    pageNum=parseInt(pageNum);

    if(Apidata.length/pageLen>=pageNum-1&&pageNum+1>0){
        error=false 
    }

    if(error){
        return{
           template:Apidata.slice(1,14),
           nextUrl:"/",
        }
    }else{
        begin=pageNum*pageLen;
        end=totalLen%pageLen===0?begin+pageLen:begin+totalLen%pageLen;
        let res=Apidata.slice(begin,end);
        // if(pageLen-res.length!==0){
        //     fillLen=pageLen-res.length;
        //     console.log(fillLen);
        //     Array.from(1,fillLen).map(i=>
        //     res.push({
        //         id:totalLen+i,
        //         title:'未完待续..',
        //         date:'...',
        //         content:'...'
        //     })
        //     )
        //     console.log(res.length);  
        // }
        
        return {
            template:res,
            nextUrl:'/?page='+(pageNum+1),
        }
    }
    
    
}


module.exports=getRes