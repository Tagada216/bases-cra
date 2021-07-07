import React, {useState} from 'react'

export default function Comments() {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    const [commentCounter, setCommentCounter] = useState(2);

    const [comments, setComments] = useState([
        {pseudo: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"},
        {pseudo: "Jean-Claude", message: "Oublies que t'as aucune chance, vas-y fonce!"}
    ]);

    function handleUsername(e){
        setUsername(e.target.value);
    }

    function handleComment(e){
        setComment(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        let newcomments = comments;
        newcomments.push({
            pseudo: username, message: comment
        });
        setComments(newcomments)
        setCommentCounter(commentCounter +1)
    }

    return (
        <>
        <h3> Liste de commentaire ({commentCounter})</h3>
        <ul>
        
                {
                    comments.map(co =>{
                        return <li key={co.pseudo}> {co.pseudo}  | {co.message} </li>
                    })
                }
            
        </ul>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={handleUsername}/>
            <input type="textarea" value={comment} onChange={handleComment}/>
            <button>Envoyer mon commentaire</button>
        </form>
        </>
    )
}
