// pages/ContactForm.js
import Image from 'next/image';

export default function ContactForm() {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/contact-us-bg.png')" }}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center md:max-w-2xl motion-preset-pop">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Let us find your ideal workspace</h2>
        <p className="text-gray-500 mb-6">Complete the form and a WeWork team member will be in touch with you shortly</p>
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="text"
            placeholder="Company"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input type="tel"
            placeholder="Phone*"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required={true}
          />
          <input type="email" placeholder="Email*" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
          <input type="text" placeholder="Location" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" />
          <input type="number" placeholder="Number of people" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" />
        </form>
        <button type="submit" className="mt-6 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">Submit</button>
      </div>
    </div>
  );
}
