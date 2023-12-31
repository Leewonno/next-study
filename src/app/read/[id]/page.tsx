import axios from "axios"

export default async function Read(props:any){

    const res = await fetch(`http://localhost:9999/topics/${props.params.id}`, {cache:'no-store'})
    const topic = await res.json();

    return(
        <>
            <h2>Read</h2>
            {topic.body}
        </>
    )
}