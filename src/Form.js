import React, {useState} from 'react'

export default function Form() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");


    function handleFirstname(event){
        setFirstname(event.target.value);
    }

    function handleLastname(event){
        setLastname(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        const user = {
            firstname: firstname,
            lastname: lastname
        };
        console.log(user);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={firstname} onChange={handleFirstname}/>
            <input type="text" value={lastname} onChange={handleLastname}/>
            <button type="submit"> Envoyer </button>
        </form>
    )
}
