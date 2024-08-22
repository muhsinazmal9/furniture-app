import product1 from "../assets/product-1.png"

export default function OurProductsSection() {
    return (
        <div className="container mx-auto px-5 mt-16">
            <h3 className="text-center font-bold text-3xl">Our Products</h3>
            <AllProducts />
        </div>
    )
}

function AllProducts() {
    const products = [
        { 'title': 'Synthetic', 'subtitle': 'Night lamp', 'price': '99', 'discount': '199', 'image': product1 },
        { 'title': 'Synthetic', 'subtitle': 'Night lamp', 'price': '99', 'discount': null, 'image': product1 },
    ]
    return (
        <div className="flex flex-wrap mt-5">
            {products.map((product, index) => (
                <Product key={index} {...product} />
            ))}
        </div>
    )
}

function Product({ title, subtitle, price, discount, image }) {
    return (
        <div className="w-full md:w-1/4 p-3">
            <img className="w-full aspect-square object-cover object-center" src={image} alt={title} />
            <div className="bg-gray-100 p-3 space-y-1">
                <h4 className="font-semibold text-lg">{title}</h4>
                <p className="text-gray-500 text-sm">{subtitle}</p>
                <h4 className="font-semibold">${price} {discount && <span className="font-normal text-gray-500 text-sm">
                    <del>${discount}</del>
                </span>}</h4>
            </div>
        </div>
    )
}
