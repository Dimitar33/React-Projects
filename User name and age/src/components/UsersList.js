
export default function UsersList(props){

    return(
        <li>{`${props.userData.userName} (${props.userData.userAge} years old)`}</li>
    )
}