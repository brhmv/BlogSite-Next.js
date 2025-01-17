import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-green-500 to-teal-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 text-white text-3xl font-extrabold">
                        My App
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {/* <Link href="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-lg font-medium transition duration-300">
                            Home
                        </Link> */}
                        <Link href="/admin" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-lg font-medium transition duration-300">
                            Admin
                        </Link>
                        <Link href="/about" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-lg font-medium transition duration-300">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-lg font-medium transition duration-300">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
