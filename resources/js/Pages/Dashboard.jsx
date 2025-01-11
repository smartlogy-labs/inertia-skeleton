import AdminLayout from "../Layouts/AdminLayout";

export default function Dashboard({ products }) {
    return (
        <>
            <h1>My Dashboard</h1>
        </>
    );
}

Dashboard.layout = (page) => <AdminLayout children={page} />;
