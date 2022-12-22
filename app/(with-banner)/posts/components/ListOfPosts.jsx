import Image from "next/image"
import Link from "next/link"
import LikeButton from "./LikeButton"


const fetchPosts = () => {                                
    return fetch('https://jsonplaceholder.typicode.com/posts',
                 /* el contenido que se carga del feth con no-stores ese hace con server side y no lo guarda en la cache estaticamente*/ 
                 /* { cache: 'no-store' } */
                 { next: {
                    //significa que va a hacer el fetch cada 60 segundos
                    revalidate: 60
                 } }
                 )
        .then( res => res.json() )
}


export async function ListOfPosts() {

    const posts = await fetchPosts()

    return (
        <section>
            { posts.slice(0, 10).map( ({ title, body, id }) => (
                <article style={{ margin: 50 }} key={ id }>
                    <Image width='50' height='50' alt={title} src={`https://avatars.dicebear.com/api/initials/${title}.svg`} />
                    <Link href={`/posts/${id}`}><h2>{ title }</h2></Link>
                    <p>{ body }</p>
                    <LikeButton/>
                    <hr/>
                </article>
            ))}
        </section>
    )
}