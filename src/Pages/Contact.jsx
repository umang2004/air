const Contact = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 py-16 px-4 " >
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md outline-2">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
        
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you. Please reach out with any questions, feedback, or booking inquiries.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="How can we help you?"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-10 text-center text-sm text-gray-500">
          Or reach us at: <span className="font-medium">support@airlinex.com</span> | 📞 +1 (800) 123-4567
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
