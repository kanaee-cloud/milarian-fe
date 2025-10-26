import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "UMKM", link: "/umkm" },
    ];

    const handleMenuClick = () => setIsMobileMenuOpen(false);

    const linkStyle = { textDecorationColor: 'transparent' };
    const handleMouseEnter = (e) => e.currentTarget.style.textDecorationColor = '#FF0000';
    const handleMouseLeave = (e) => e.currentTarget.style.textDecorationColor = 'transparent';

    const renderMenuItems = (isMobile = false) => (
        menuItems.map((navItem, index) => (
            <li key={index}>
                <a 
                    href={navItem.link} 
                    className="text-light font-medium hover:underline decoration-2 underline-offset-4"
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={isMobile ? handleMenuClick : undefined}
                >
                    {navItem.name}
                </a>
            </li>
        ))
    );

    return (
        <nav className={`flex justify-between px-6 md:px-24 py-4 mb-6 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled || isMobileMenuOpen ? 'bg-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
            <h1 className="font-semibold text-lg text-light md:block absolute md:relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0">Milarian</h1>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 mr-16">
                {renderMenuItems()}
            </ul>

            {/* Burger Menu Button */}
            <button 
                className="md:hidden text-light focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`absolute top-full left-0 right-0 bg-dark/80 backdrop-blur-md md:hidden overflow-hidden transition-all duration-300 ease-in-out shadow-lg ${
                isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div style={{ height: '2px', backgroundColor: '#FF0000', margin: '8px 24px 0' }}></div>
                <ul className="flex flex-col items-center py-6 gap-6">
                    {renderMenuItems(true)}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar