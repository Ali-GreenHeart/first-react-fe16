import { useState } from "react"

const Login = ({ }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <>
            <form>
                <input
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    type="email"
                    placeholder="enter your email"
                />
                <input
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    type="password"
                    placeholder="enter your password"
                />
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        console.log(` email: ${email}, password: ${password}`)
                    }}
                >log in</button>
            </form>
        </>
    )
}
export default Login
