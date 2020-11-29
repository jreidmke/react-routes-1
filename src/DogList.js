const DogList = ({name, age, src, facts}) => {
    return(
        <div>
            <h3>{name}, {age} Years Old</h3>
            <ul>
                {facts.map(f => <li>{f}</li>)}
            </ul>
        </div>
    )
}

export default DogList;