import LikeButton from "../../components/LikeButton"

const fetchSinglePosts =  async ( id ) => {

    await new Promise( resolve => setTimeout( resolve, 3000 ) )

    throw new Error( ' Error comentarios ' )

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,
                 /* el contenido que se carga del feth con no-stores ese hace con server side y no lo guarda en la cache estaticamente*/ 
                 /* { cache: 'no-store' } */
                 { next: {
                    //significa que va a hacer el fetch cada 60 segundos
                    revalidate: 60
                 } }
                 )
        .then( res => res.json() )
}


export default async function Comments({ params }) {

    const { id } = params

    const comments = await fetchSinglePosts( id )

    return (
        <ul>
            
            { comments.slice(0, 10).map( ({ id, body, name, email }) => (
                <article key={ id }>
                    <h1>{ name }</h1>
                    <p>{ email }</p>
                    <p>{ body }</p>
                    <LikeButton/>
                </article>
            ))}
        
        </ul>
    )
}