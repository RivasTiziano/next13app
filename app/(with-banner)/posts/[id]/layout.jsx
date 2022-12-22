
import Link from "next/link"
import LikeButton from "../components/LikeButton"


const fetchSinglePosts = ( id ) => {                                
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
                 /* el contenido que se carga del feth con no-stores ese hace con server side y no lo guarda en la cache estaticamente*/ 
                 /* { cache: 'no-store' } */
                 { next: {
                    //significa que va a hacer el fetch cada 60 segundos
                    revalidate: 60
                 } }
                 )
        .then( res => res.json() )
}


export default async function Post({ children, params }) {

    const { id } = params

    const { title, body } = await fetchSinglePosts( id )

    return (
        <>
            <article>
                <p>post: { id }</p>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <LikeButton/>
            </article>
            <Link href={`/posts/${id}/comments`} > ver comentarios </Link>
            { children }
        </>
    )
}