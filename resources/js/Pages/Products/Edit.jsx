import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";

function Edit({ product }) {
    const categoryData = ["TV/Monitors", "PC", "Gaming/Console", "Phones"];
    const [productDetails, setProductDetails] = useState({
        name: product.name,
        price: product.price,
        stock: product.stock,
        category: product.category,
        description: product.description,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(`/products/${product.id}`, productDetails);
    };

    return (
        <>
            <div className="flex justify-between px-4">
                <h1 className="font-bold text-2xl mb-8">Update Product</h1>
                <Link href="/products">
                    <button
                        type="button"
                        className="h-[50px] text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    >
                        Back to Products
                    </button>
                </Link>
            </div>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 max-w-2xl lg:py-4">
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            {/* Product Name */}
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Product Name
                                </label>
                                <input
                                    value={productDetails.name}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type product name"
                                    required
                                />
                            </div>

                            {/* Price */}
                            <div className="w-full">
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Price
                                </label>
                                <input
                                    value={productDetails.price}
                                    onChange={handleInputChange}
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="$2999"
                                    required
                                />
                            </div>

                            {/* Stock */}
                            <div className="w-full">
                                <label
                                    htmlFor="stock"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Stock
                                </label>
                                <input
                                    value={productDetails.stock}
                                    onChange={handleInputChange}
                                    type="number"
                                    name="stock"
                                    id="stock"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="0"
                                    required
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label
                                    htmlFor="category"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Category
                                </label>
                                <select
                                    value={productDetails.category}
                                    onChange={handleInputChange}
                                    name="category"
                                    id="category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                    <option value="">Select Category</option>
                                    {categoryData.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Description */}
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <textarea
                                    value={productDetails.description}
                                    onChange={handleInputChange}
                                    name="description"
                                    id="description"
                                    rows="8"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Your description here"
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                        >
                            Update product
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

Edit.layout = (page) => <AdminLayout children={page} />;
export default Edit;
