import { useEffect, useState } from "react"
import { v4 } from "uuid"

const Istifadeciler = () => {
    const [users, setUsers] = useState([])

    // useEffect(() => { }, []) // dependency list

    // [] -> mounting
    // [users] -> users deyisende bu isi gor.

    useEffect(() => {
        return () => {
            console.log('RIP ☠')
        }
    }, [])

    useEffect(() => {
        console.log('users deyisdi')
    }, [users])

    useEffect(() => {
        console.log('men geldim...')
        setUsers([
            {
                id: v4(),
                ad: 'ali',
                yas: 12
            }
        ])
    }, [])

    return (
        <>
            <h1>Welcome to Users page</h1>

            {
                users.map((user) => {
                    return <div key={user.id}>
                        <h1>{user.ad} {user.yas}</h1>
                    </div>
                })
            }
        </>
    )
}
export default Istifadeciler
