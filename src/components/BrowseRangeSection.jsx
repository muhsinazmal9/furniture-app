import browseGalleryImage1 from "../assets/browseGalleryImage-1.png"
import browseGalleryImage2 from "../assets/browseGalleryImage-2.png"
import browseGalleryImage3 from "../assets/browseGalleryImage-3.png"


function BrowseRangeSection() {
    const galleryItems = [
        {'url' : browseGalleryImage1, 'title' : 'Dining'},
        {'url' : browseGalleryImage2, 'title' : 'Living'},
        {'url' : browseGalleryImage3, 'title' : 'Bedroom'}
    ]

    return (
        <div className="container mx-auto px-5 mt-16">
            <h3 className="text-center font-bold text-3xl">Browse The Range</h3>
            <p className="text-center text-lg mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="flex flex-wrap mt-8">
                {galleryItems.map((item, index) => (
                    <div key={index} className="w-full md:w-1/3 p-2">
                        <img className="w-full rounded-md lg:min-h-96 h-64 object-cover object-center" src={item.url} alt={item.title} />
                        <p className="font-semibold text-xl mt-5 text-center">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BrowseRangeSection