export default async function Product({ params }) {
    const { id } = await params;
    return <h2>Product: {id}</h2>;
}
