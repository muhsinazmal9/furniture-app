
import Logo from "../assets/logo.png"

function Navbar() {
    const Items = [
        { 'name': "Home", 'link': "/" },
        { 'name': "Shop", 'link': "/" },
        { 'name': "About", 'link': "/" },
        { 'name': "Contact", 'link': "/" },
    ]

    return (
        <div className="flex justify-between items-center bg-white py-8 container mx-auto px-5">
            <div>
                <img src={Logo} alt="Site Logo" />
            </div>
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
            <div>
                {/* cart icon */}
            </div>
        </div>
    )
}

export default Navbar
