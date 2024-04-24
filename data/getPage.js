
const Apidata=require('./mockdata')
const pageLen=13;
const totalLen=Apidata.length;



function getRes(pageNum){ 
    let error=false;
    pageNum=parseInt(pageNum);
    
    if(pageNum<0&&pageNum*pageLen>Apidata.length){
        error=true; 
    }
    

    if(error){
        return{
           pages:Apidata.slice(0,13),
           nextUrl:"/",
        }
    }else{
        begin=pageNum*pageLen;
        end=totalLen%pageLen===0?begin+pageLen:begin+totalLen%pageLen+1;
        nextUrl='/?page='+(pageNum+1);
        let res=Apidata.slice(begin,end);
        if(pageLen-res.length!==0){
            nextUrl='/';
            fillLen=pageLen-res.length;
            for(let i=0;i<fillLen;i++){
            res=res.concat({
                id:totalLen+i,
                title:'未完待续..',
                date:'...',
                content:'...'
            })}
        }
        return {
            pages:res,
            nextUrl,
        }

    }
              
        
    
}
    
    



module.exports=getRes