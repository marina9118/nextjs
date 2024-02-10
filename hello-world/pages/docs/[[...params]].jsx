import {useRouter} from 'next/router'
export default function Docs(){
    const router = useRouter();
    const { params = [] } = router.query;
    let p = "";
   
    if(params.length===1){
        p = params[0]; 
    }else if(params.length===2){
        p = params[0]+" "+params[1];
    }else if(params.length===3){
        p = `${params[0]} ${params[1]} ${params[2]}`;
       
    }
    return (
        <>
            <h1>Document Home Page {p} </h1>
        </>
    )
}