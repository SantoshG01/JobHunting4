import { MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-slate-100 shadow-md lg:w-[100%]">
            <div className="max-w-7xl mx-auto lg:h-[10vh]   px-4 sm:px-7 lg:px-8">
                <div className="flex justify-between lg:h-20  h-14">
                    <div className="flex items-center justify-start">
                        <div className="flex-shrink-0 lg:relative right-[100px]">
                            <h2 className='font-bold cursor-pointer text-3xl text-blue-950'>LOGO</h2>
                        </div>
                        <div className="flex-grow hidden md:flex justify-center lg:relative left-28">
                            <div className="ml-32 flex  space-x-4  text-xl font-semibold">
                                <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md ">About Us</a>
                                <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md ">Resume builder</a>
                                <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md ">Services</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="ml-4 flex items-center md:ml-6 lg:relative left-28">
                            <a href="/LogIn" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-lg font-semibold">Login</a>
                            <a href="/Register" className="bg-blue-950 text-white px-3 py-2 rounded-md text-lg font-semibold">Sign up</a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md
                         text-gray-800 hover:text-gray-600 hover:bg-gray-200 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="text-gray-800 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Skill tests</a>
                    <a href="#" className="text-gray-800 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Resume builder</a>
                    <a href="#" className="text-gray-800 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
                    <a href="/LogIn" className="text-gray-800 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Login</a>
                    <a href="/Register" className="bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium">Sign up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
