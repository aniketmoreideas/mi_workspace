export default function FeatureSection() {
  return (
    <div className="container mx-auto p-4 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Prime Locations Block */}
        <div className="flex flex-col justify-center">
          <h3 className="text-yellow-600 font-semibold text-sm uppercase mb-2">Checkout Our</h3>
          <h2 className="text-3xl font-bold mb-4">Prime Locations</h2>
          <p className="text-gray-600 mb-4">
            Our offices are strategically located in the heart of the city, putting you right where the action is. Impress clients, attract talent, and network with industry peers, all from your prestigious address.
          </p>
          <a href="#" className="text-gray-900 font-semibold hover:underline">
            See more
          </a>
        </div>
        <div>
          <img
            src="/images/prime-locations.jpg" // Replace with actual image path
            alt="Prime Locations"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Future of Office Space Block */}
        <div>
          <img
            src="/images/future-of-office.jpg" // Replace with actual image path
            alt="Future of Office Space"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-yellow-600 font-semibold text-sm uppercase mb-2">Experience</h3>
          <h2 className="text-3xl font-bold mb-4">The Future of Office Space</h2>
          <p className="text-gray-600 mb-4">
            Discover a new way to work – one that prioritizes flexibility, convenience, and community. Your success is our priority, and we’re here to provide the workspace you need to thrive.
          </p>
          <a href="#" className="text-gray-900 font-semibold hover:underline">
            See more
          </a>
        </div>
      </div>
    </div>
  );
}
