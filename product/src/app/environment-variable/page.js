export default function index(){
    console.log(process.env.PORT);
    return <>
        <h1>Environment variable</h1>
        <p>{process.env.OWNER}</p>
        
    </>
}