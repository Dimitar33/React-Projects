import UsersList from "./UsersList";

export default function UserTable(props){


    function usersHandler(ev){

        console.log(ev.target.value);
    }

    return(
        <div className="users">
            <ul onClick={usersHandler}>
              {props.data.map(x => <UsersList key={x.id} userData={x}></UsersList>)}  
            </ul>
        </div>
    )
}