export const Navbar = () => {

    const item = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "UMKM", link: "/umkm" },
    ]

    return (
        <nav className="flex justify-between shadow-md px-8 py-4 rounded-full bg-dark/70 backdrop-blur-md items-center">
            <h1 className="font-semibold text-lg text-light">Milarian</h1>
            <ul className="flex gap-6">
                {item.map((navItem, index) => (
                    <li key={index}>
                        <a href={navItem.link} className="text-light font-medium hover:text-accent">
                            {navItem.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}