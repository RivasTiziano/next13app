'use client'

const fetchUser = (formData) => {                                
    return fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(formData)
    },
                 /* el contenido que se carga del feth con no-stores ese hace con server side y no lo guarda en la cache estaticamente*/ 
                 /* { cache: 'no-store' } */
                 { next: {
                    //significa que va a hacer el fetch cada 60 segundos
                    revalidate: 60
                 } }
                 )
}

export default function FormPage() {

    const onSubmitForm = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            password: e.target.password.value
        }
        await fetchUser(formData)

    }

    return (
        <form onSubmit={onSubmitForm}>
            <input type='text' name="name"/>
            <input type='text' name="password"/>
            <button>send</button>
        </form>
        
    )
}