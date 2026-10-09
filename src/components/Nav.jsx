import { Link } from "react-router"

function Nav() {
    return (
        <>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/usuarios"}>Usuarios</Link>
            <Link to={"/posts"}>Posts</Link>
        </>
    )
}

export default Nav