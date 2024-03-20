"use client"
export default function product({price}){
    return (
        <div>
            <button onClick={()=>alert(price)} style={{backgroundColor:"blue",color:"white",padding:"6px",border:"none",borderRadius:"3px",cursor:"pointer"}}>Check Price</button>
        </div>
    )
}