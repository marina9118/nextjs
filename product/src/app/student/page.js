async function usersList(){
    let data = await fetch('https://dummyjson.com/users');
    data = await data.json();
    return data.users;
}
export default async function user(){
    let users = await usersList();
    console.log(users);
    return (
        <div>
            <h1>User</h1>
            {
                users.map((item,index)=>(
            <div>
            <p key={index}>Name : {item.firstName} {item.lastName}</p>
            </div>
        ))
            }
        </div>
    );
}