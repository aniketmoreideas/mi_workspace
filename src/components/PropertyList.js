const properties = [
    {
        location: 'Beverly Hills, CA',
        address: '8383 Wilshire Boulevard',
        price: '$60/hour',
        capacity: '2-8 people',
        size: '5,215 sf',
        image: '/images/beverly-hills.png',
    },
    {
        location: 'Washington',
        address: '800 Connecticut Ave NW',
        price: '$60/hour',
        capacity: '2-8 people',
        size: '5,215 sf',
        image: '/images/beverly-hills.png',
    },
    {
        location: 'Federal Plaza, NY',
        address: '305 Broadway',
        price: '$60/hour',
        capacity: '2-8 people',
        size: '5,215 sf',
        image: '/images/beverly-hills.png',
    },
    {
        location: 'Albany, NY',
        address: '890 State St 7th Floor',
        price: '$60/hour',
        capacity: '2-8 people',
        size: '5,215 sf',
        image: '/images/beverly-hills.png',
    },
    {
        location: 'Dallas, TX',
        address: '8150 N Central Expy',
        price: '$60/hour',
        capacity: '2-8 people',
        size: '5,215 sf',
        image: '/images/beverly-hills.png',
    },
];
// console.log(properties[0].image);

export default function PropertyList() {
    return (
        <div className="p-4 sm:p-8 sm:py-20">
            <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-yellow-600 font-semibold text-sm sm:text-base">CHECKOUT OUR NEW</h2>
                <h1 className="text-3xl sm:text-4xl font-bold">Latest Listed Offices</h1>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                    Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {properties.map((property, index) => (

                    <a href="#" key={index} >
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="relative">
                                <img src={property.image} alt={property.location} className="w-full h-32 sm:h-48 object-cover" />
                                <div className="absolute top-2 left-2 bg-yellow-600 text-white px-2 py-1 rounded text-xs sm:text-sm">
                                    {property.price}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-sm sm:text-lg font-semibold">{property.location}</h3>
                                <p className="text-xs sm:text-sm text-gray-500">{property.address}</p>
                                <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-2">
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                            <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.9 12.006c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0ZM14.002 12h-1.59a2.556 2.556 0 0 0-.04-.29 6.476 6.476 0 0 0-1.167-2.603 3.002 3.002 0 0 1 3.633 1.911c.18.522-.283.982-.836.982ZM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                        </svg>
                                        <span>{property.capacity}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                            <path fill-rule="evenodd" d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd" />
                                        </svg>

                                        <span>{property.size}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                ))}
            </div>
        </div>
    );
}
