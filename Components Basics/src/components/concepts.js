

export default function Concepts(props){

    return (

     <li className="concept">
        <img src={props.conceptsData.image} alt="TODO: TITLE" />
        <h2>{props.conceptsData.title}</h2>
        <p>{props.conceptsData.description}</p>
     </li>
    )
};