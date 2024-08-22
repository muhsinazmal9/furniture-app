function HeroSection() {
    return (
        <div className="py-40 bg-[url('./assets/hero.png')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto px-5 flex justify-end">
                <div className="bg-primary-100 pt-14 p-10 inline-block rounded-md max-w-[643px]">
                    <div className="space-y-3">
                        <p className="tracking-widest font-semibold">New Arrival</p>
                        <h1 className="text-6xl font-bold text-primary-900">Discover Our <br className="hidden md:block" /> New Collection</h1>
                        <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    </div>
                    <button className="px-16 py-6 bg-primary-900 text-white font-bold text-base mt-10">BUY NOW</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection