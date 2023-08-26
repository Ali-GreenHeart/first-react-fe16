import axios from "axios"
import { useEffect, useState } from "react"

const backend_url = 'https://jsonplaceholder.typicode.com/users'

const Istifadeciler = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(backend_url)
            .then(({ data }) => {
                setUsers(data)
            })
            .catch((err) => {
                console.log('err oldu!')
            })
    }, [])

    return (
        <>
            <h1>Welcome to Users page</h1>

            {
                users.map((user) => {
                    return <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h1>{user.username}</h1>
                        <h1>{user.company.name}</h1>
                        <hr />
                    </div>
                })
            }
        </>
    )
}
export default Istifadeciler
