import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Section 1 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Abstract</h2>
            <ul>
              <li className="mb-2">Branches</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Resource</h2>
            <ul>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Help Center</li>
              <li className="mb-2">FAQs</li>
              <li className="mb-2">Community</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Community</h2>
            <ul>
              <li className="mb-2">Twitter</li>
              <li className="mb-2">Linkedin</li>
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Twitter</li>
              <li className="mb-2">Dribble</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="w-full flex flex-col gap-5 md:w-1/4 mb-6 md:mb-0">
            <div>
            <div>
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            </div>
            <div>
            <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Legal</li>
            </ul>
            </div>
            </div>
            <div>
            <div><h2 className="text-xl font-semibold mb-4">Contact Us</h2></div>
           <div>
           <ul>
              <li className="mb-2">info@abstract.com</li>
            </ul>
           </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p>&copy; 2024 Abstract Studio Design, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
