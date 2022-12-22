import { Suspense } from "react";
import { ListOfPosts } from "./components/ListOfPosts";

export default function PostsPage() {
    return (
        <Suspense fallback={<p>Loading Posts...</p>}> 
            <h1> Posts: </h1>
            <ListOfPosts/>
        </Suspense>
    )
}