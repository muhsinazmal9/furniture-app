import Logo from "../assets/logo.png"

function NavLogo() {
    return (
        <a href="/">
            <img src={Logo} alt="Site Logo" />
        </a>
    )
}

function NavIcons() {
    return (
        <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
    )
}

function NavItems() {

    const Items = [
        { 'name': "Home", 'link': "/" },
        { 'name': "Shop", 'link': "/" },
        { 'name': "About", 'link': "/" },
        { 'name': "Contact", 'link': "/" },
    ]

    return (
        <div>
            <ul className="flex gap-16 flex-wrap">
                {/* nav items list */}
                {Items.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function Navbar() {
    return (
        <div className="flex justify-between items-center bg-white py-8 container mx-auto px-5">
            <NavLogo />
            <NavItems />
            <NavIcons />
        </div>
    )
}

export default Navbar
