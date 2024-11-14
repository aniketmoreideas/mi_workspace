import { FaCalendarAlt, FaUsers, FaBolt, FaTag, FaMapMarkerAlt, FaThumbsUp } from 'react-icons/fa';

const features = [
  {
    icon: <FaCalendarAlt size={24} className="text-yellow-600" />,
    title: 'Easy Booking Process',
    description:
      'Renting an office with us is simple and hassle-free. Our user-friendly online platform allows you to book your ideal workspace in just a few clicks.',
  },
  {
    icon: <FaUsers size={24} className="text-yellow-600" />,
    title: 'Community and Networking',
    description:
      'Join a vibrant community of professionals and entrepreneurs. Network, collaborate, and exchange ideas in an environment that fosters innovation and growth.',
  },
  {
    icon: <FaBolt size={24} className="text-yellow-600" />,
    title: 'Modern Amenities',
    description:
      'Enjoy a comfortable and productive work environment with state-of-the-art facilities. High-speed internet, meeting rooms, ergonomic furniture.',
  },
  {
    icon: <FaTag size={24} className="text-yellow-600" />,
    title: 'Best Price',
    description:
      'Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.',
  },
  {
    icon: <FaMapMarkerAlt size={24} className="text-yellow-600" />,
    title: 'Strategic Location',
    description:
      'Located in the city center close to the shopping center. Surrounded by international education centers, start-up office centers.',
  },
  {
    icon: <FaThumbsUp size={24} className="text-yellow-600" />,
    title: 'Transparency',
    description:
      'We believe in transparency. Our pricing is straightforward, and there are no hidden fees. What you see is what you get, so you can budget with confidence.',
  },
];

export default function FeaturesGrid() {
  return (
    <div className="container mx-auto p-4 sm:py-20 sm:p-8">
      <h2 className="text-center text-3xl font-bold mb-8">Giving you peace of mind</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start text-left hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}