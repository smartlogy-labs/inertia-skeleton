// resources/js/Components/Pagination.jsx
import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const Pagination = ({ links }) => {
    return (
        <nav className="flex justify-center mt-4">
            <ul className="inline-flex -space-x-px">
                {links.map((link, index) => (
                    <li key={index}>
                        <button
                            className={`px-4 py-2 border ${
                                link.active
                                    ? 'text-blue-500 border-blue-300'
                                    : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                            } ${!link.url ? 'cursor-not-allowed' : ''}`}
                            onClick={() => link.url && Inertia.visit(link.url)}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            disabled={!link.url}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
