export default function test({ products }) {
    return (
        <>
            <h1>My Products</h1>
            <hr />
            {products &&
                products.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </div>
                ))}
        </>
    );
}
