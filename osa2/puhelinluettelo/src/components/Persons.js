import Person from './Person'

const Persons = (props)  =>{
    console.log("props ",props)
    return(
        <div>
            {props.contacts.map(person =>
                <Person key={person.name} name={person.name} number={person.number}/>
            )}
        </div>
    )
}
export default Persons;