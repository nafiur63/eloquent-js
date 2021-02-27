const chessBoard = (u)=>{
    let v=""
    let i=0
    let p=0
    for (i=0;i<u;i++){
        if(i%2===0)
            for(p=0;p<u;p++){
            (p%2===0)?v=v+" ":v=v+"#"
        }    
        else
            for(p=0;p<u;p++){
            (p%2===0)?v=v+"#":v=v+" "
            }
        v=v+"\n"
    }       
        return v
    }

console.log(chessBoard(8))