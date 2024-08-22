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
    return (
        <div className="flex flex-wrap mt-5">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

function Product() {
    return (
        <div className="w-full md:w-1/4 p-3">
            <img className="w-full aspect-square object-cover object-center" src={product1} alt="Product 1" />
            <div className="bg-gray-100 p-3 space-y-1">
                <h4 className="font-semibold text-lg">Product 1</h4>
                <p className="text-gray-500 text-sm">Night lamp</p>
                <h4 className="font-semibold">$99 <span className="font-normal text-gray-500 text-sm">
                        <del>$199</del>
                    </span></h4>
            </div>
        </div>
    )
}