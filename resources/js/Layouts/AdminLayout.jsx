import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function AdminLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    return (
        <>
            <div className="antialiased bg-gray-50 dark:bg-gray-900">
                {/* Navbar */}
                <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex justify-start items-center">
                            <button
                                data-drawer-target="drawer-navigation"
                                data-drawer-toggle="drawer-navigation"
                                aria-controls="drawer-navigation"
                                className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <svg
                                    aria-hidden="true"
                                    className="hidden w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Toggle sidebar</span>
                            </button>
                            <Link
                                to={"/"}
                                className="flex items-center justify-between mr-4"
                            >
                                <img
                                    src="/images/smartlogy_logo.svg"
                                    className="mr-3 h-8"
                                    alt="Flowbite Logo"
                                />
                            </Link>
                            <form
                                action="#"
                                method="GET"
                                className="hidden md:block md:pl-2"
                            >
                                <label
                                    htmlFor="topbar-search"
                                    className="sr-only"
                                >
                                    Search
                                </label>
                                <div className="relative md:w-64">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg
                                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        id="topbar-search"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Search"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center lg:order-2">
                            <button
                                type="button"
                                className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                id="user-menu-button"
                                aria-expanded="false"
                                data-dropdown-toggle="dropdown"
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                                    alt="user photo"
                                />
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            <div
                                className="hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
                                id="dropdown"
                            >
                                <div className="py-3 px-4">
                                    <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                                        Neil Sims
                                    </span>
                                    <span className="block text-sm text-gray-900 truncate dark:text-white">
                                        name@flowbite.com
                                    </span>
                                </div>
                                <ul
                                    className="py-1 text-gray-700 dark:text-gray-300"
                                    aria-labelledby="dropdown"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            My profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            Account settings
                                        </a>
                                    </li>
                                </ul>
                                <ul
                                    className="py-1 text-gray-700 dark:text-gray-300"
                                    aria-labelledby="dropdown"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <svg
                                                className="mr-2 w-5 h-5 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            My likes
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <svg
                                                className="mr-2 w-5 h-5 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                            </svg>
                                            Collections
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <span className="flex items-center">
                                                <svg
                                                    aria-hidden="true"
                                                    className="mr-2 w-5 h-5 text-primary-600 dark:text-primary-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                Pro version
                                            </span>
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                                <ul
                                    className="py-1 text-gray-700 dark:text-gray-300"
                                    aria-labelledby="dropdown"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* <!-- Sidebar --> */}
                <button
                    className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-200 rounded-lg dark:bg-gray-700 focus:outline-none"
                    onClick={toggleSidebar}
                    aria-label="Toggle Sidebar"
                >
                    <svg
                        className="w-6 h-6 text-gray-700 dark:text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isSidebarOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>

                {/* Sidebar */}
                <aside
                    className={`fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
                    aria-label="Sidenav"
                >
                    <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
                        {/* Search Input */}
                        <form
                            action="#"
                            method="GET"
                            className="md:hidden mb-2"
                        >
                            <label htmlFor="sidebar-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="sidebar-search"
                                    className="w-full p-2 pl-10 text-sm bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Search"
                                />
                            </div>
                        </form>

                        {/* Sidebar Menu */}
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/admin"
                                    className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-6 h-6 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                    <span className="ml-3">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/admin/product"
                                    className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-6 h-6 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                    <span className="ml-3">Product</span>
                                </Link>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="flex items-center w-full p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    onClick={toggleDropdown}
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"></path>
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                        Pages
                                    </span>
                                    <svg
                                        className={`w-6 h-6 transition-transform ${
                                            isDropdownOpen ? "rotate-180" : ""
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                    </svg>
                                </button>
                                <ul
                                    className={`py-2 space-y-2 ${
                                        isDropdownOpen ? "block" : "hidden"
                                    }`}
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center p-2 pl-11 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center p-2 pl-11 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        >
                                            Kanban
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>

            <main className="p-4 md:ml-64 h-auto pt-20">{children}</main>
        </>
    );
}
