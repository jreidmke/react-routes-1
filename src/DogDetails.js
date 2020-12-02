import { useParams, Link } from "react-router-dom";

const DogDetails = ({dogs}) => {
    const {name} = useParams();

    const dog = dogs.find(d => d.name.toLowerCase() === name);

    return(
        <div>
            <img src={dog.src}/>
            <h3>{dog.name}, {dog.age} Years Old</h3>
            <ul>
                {dog.facts.map(f => <li>{f}</li>)}
            </ul>
            <h3><Link to="/dogs">Return Home</Link></h3>
        </div>
    )
}


export default DogDetails;