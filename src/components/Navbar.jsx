export const Navbar = () => {

    const item = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Contact", link: "/contact" },
    ]

    return (
        <nav className="flex justify-between shadow-md px-8 py-4 rounded-full bg-light/30 backdrop-blur-md items-center">
            <h1 className="font-semibold text-lg text-primary">Milarian</h1>
            <ul className="flex gap-6">
                {item.map((navItem, index) => (
                    <li key={index}>
                        <a href={navItem.link} className="text-primary font-medium hover:text-accent">
                            {navItem.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}