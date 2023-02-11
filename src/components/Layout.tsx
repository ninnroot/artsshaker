import { NavBar } from "./navigation"

const Layout = ( {children}:any ) => {
    return (
        <>
        <NavBar></NavBar>
        {children}
        </>
    )
}

export default Layout;