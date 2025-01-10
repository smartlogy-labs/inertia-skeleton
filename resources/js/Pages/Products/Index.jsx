import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";

function Index({ products }) {
    const [showMenu, setShowMenu] = useState(null); // Menyimpan id produk yang menu-nya ditampilkan
    const toggleMenu = (id) => {
        setShowMenu(showMenu === id ? null : id); // Menampilkan/menyembunyikan menu berdasarkan id
    };

    const deleteProduct = (id) => {
        if (confirm("Are you sure?")) {
            router.delete(`/products/${id}`);
        }
    };

    return (
        <>
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl font-bold mb-5">Data Products</h1>
                <Link href="/products/create">
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                        Add New Product
                    </button>
                </Link>
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
                        {products.map((product) => (
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
                                                    <button
                                                        onClick={() =>
                                                            (window.location.href = `/products/${product.id}/edit`)
                                                        }
                                                        className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100"
                                                    >
                                                        Edit
                                                    </button>
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
        </>
    );
}

Index.layout = (page) => <AdminLayout children={page} />;

export default Index;
