import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PowerBI Pro</h3>
            <p className="text-gray-400">
              Professional PowerBI consultation and training services to
              transform your data into actionable insights.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li><button onClick={() => navigateTo('consultation')} className="text-gray-400 hover:text-yellow-400">Consultation</button></li>
                <li><button onClick={() => navigateTo('training')} className="text-gray-400 hover:text-yellow-400">Training</button></li>
                <li><button onClick={() => navigateTo('about')} className="text-gray-400 hover:text-yellow-400">About Us</button></li> */}
              <li>
                <Link
                  to="/consultation"
                  className="text-gray-400 hover:text-yellow-400"
                >
                Consultation
                </Link>
              </li>
             
              <li>
                {" "}
                <Link
                  to="/training"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Training
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>123 Analytics Drive</p>
              <p>Data City, DC 10101</p>
              <p className="mt-3">info@powerbi-pro.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PowerBI Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
