import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "../../Components/Pagination";

function Index({ products, searchQuery }) {
    const [showMenu, setShowMenu] = useState(null); // Menyimpan id produk yang menu-nya ditampilkan
    const [search, setSearch] = useState(searchQuery || "");
    const toggleMenu = (id) => {
        setShowMenu(showMenu === id ? null : id); // Menampilkan/menyembunyikan menu berdasarkan id
    };

    const deleteProduct = (id) => {
        if (confirm("Are you sure?")) {
            router.delete(`/products/${id}`);
        }
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        Inertia.get("/products", { search: value }, { preserveState: true });
    };

    return (
        <>
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl font-bold mb-5">Data Products</h1>

                <div className="flex justify-between gap-4">
                    <form
                        method="GET"
                        className="hidden md:block md:pl-2"
                        onSubmit={handleSearchChange}
                    >
                        <label htmlFor="topbar-search" className="sr-only">
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
                                name="search"
                                id="topbar-search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </form>

                    <Link href="/products/create">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                            Add New Product
                        </button>
                    </Link>
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-slate-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {(products.data || products).map((product) => (
                            <tr
                                key={product.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {product.name}
                                </th>
                                <td className="px-6 py-4">
                                    {product.category}
                                </td>
                                <td className="px-6 py-4">{product.price}</td>
                                <td className="px-6 py-4">{product.stock}</td>
                                <td className="px-6 py-4">
                                    {product.description}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() => toggleMenu(product.id)}
                                        className="font-medium text-black dark:text-blue-500 hover:underline"
                                    >
                                        <i className="fas fa-ellipsis-h"></i>
                                    </button>
                                    {showMenu === product.id && (
                                        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-40">
                                            <ul className="py-2">
                                                <li>
                                                    <Link
                                                        href={`/products/${product.id}/edit`}
                                                        className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100"
                                                    >
                                                        Edit Product
                                                    </Link>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            deleteProduct(
                                                                product.id
                                                            )
                                                        }
                                                        className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100"
                                                    >
                                                        Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination links={products.links} />
        </>
    );
}

Index.layout = (page) => <AdminLayout children={page} />;

export default Index;
