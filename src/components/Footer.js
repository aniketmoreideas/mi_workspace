import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">RENTAL</h2>
          <p>+1800-123-4567</p>
          <p>info@luxuryrentals.com</p>
          <p>1234 Name Street, City, State</p>
        </div>

        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/listings">Listings</Link></li>
            <li><Link href="/terms">Terms and Conditions</Link></li>
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Discover</h2>
          <ul>
            <li>New York City</li>
            <li>Chicago</li>
            <li>Los Angeles</li>
            <li>San Diego</li>
            <li>Boston</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter!</h2>
          <form>
            <input type="email" placeholder="Email Address" className="border border-gray-700 rounded-md px-4 py-2 mb-4" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Subscribe</button>
          </form>

          <h2 className="text-2xl font-bold mt-4 mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;