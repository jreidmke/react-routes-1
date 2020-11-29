import {Link} from 'react-router-dom';

const DogList = ({name, age, src, facts}) => {
    return(
        <div>
            <img src={src}/>
            <h3><Link to={`dogs/${name.toLowerCase()}`}>{name}</Link>, {age} Years Old</h3>
            <ul>
                {facts.map(f => <li>{f}</li>)}
            </ul>
        </div>
    )
}

export default DogList;
