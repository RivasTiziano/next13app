//this este componente esta en app pero se ejecuta en el cliente
//this porque es chico

'use client'

import { useState } from "react"

export default function LikeButton() {

    const [like, setlike] = useState()

    const onLike = () => {
        setlike( !like )
    }

    return (
        <button onClick={onLike}>{ like ? '<3' : '-' }</button>
    )
}