import profileIcon from '../../../assets/images/navbar/profileIcon.png';
import caret from '../../../assets/images/navbar/caret01.png';
import dashboard from '../../../assets/images/navbar/dashboard.png';
import notificationbell from '../../../assets/images/navbar/notificationBell.png';

const Navbar = () => {
    return (
        <>
            <div className=' p-5 font-inter text-sm flex flex-row space-x-3 justify-between items-center sticky top-0 bg-white z-20'>
                <div className='flex flex-row items-center font-inter font-extrabold text-xl'>
                    <img src={dashboard} alt="logo" className="h-10" />
                    <p className=' ml-2'>Admin Dashboard</p>
                </div>
                <div className='flex flex-row items-center space-x-3'>
                    <div className="relative group hover:cursor-pointer">
                        <div className=' flex flex-row items-center p-3'>
                            <button className="">Reservation</button>
                            <img src={caret} alt="caret" className="h-3 pl-1.5" />
                        </div>
                        <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg border rounded-md p-2">
                            <a href='#' className="block px-4 py-2 hover:bg-gray-100">Rooms</a>
                            <a href='#' className="block px-4 py-2 hover:bg-gray-100">Restaurant table</a>
                            <a href='#' className="block px-4 py-2 hover:bg-gray-100">Banquet</a>
                        </div>
                    </div>
                    <a href='/' className=' hover:cursor-pointer p-3'>Analytics</a>
                    <a href='/' className=' hover:cursor-pointer p-3'>Reports</a>
                </div>

                <div className='flex flex-row items-center space-x-6'>
                    <div className='max-w-md mx-auto'>
                        <div className="relative flex items-center w-full h-10 rounded-3xl bg-white overflow-hidden border border-gray-300">

                            <div className="grid place-items-center h-full w-12 text-gray-700 pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input
                                className="peer h-full w-full outline-none text-sm pl-3"
                                type="text"
                                id="search"
                                placeholder="Search something.." />

                            <button className="bg-blue-500 hover:bg-blue-700 text-white h-10 px-8 rounded-full">Search
                            </button>

                        </div>
                    </div>
                    <a className=' hover:cursor-pointer'>Log in</a>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-xl hover:cursor-pointer">Sign up</button>
                    <img src={notificationbell} alt="notificationbell" className=" h-5 hover:cursor-pointer" />
                    <img src={profileIcon} alt="logo" className=" rounded-full h-10 hover:cursor-pointer" />
                </div>

            </div >
        </>
    )
}

export default Navbar;