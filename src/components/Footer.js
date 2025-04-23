import React from "react";
import { Link } from "react-router-dom";
import { Youtube, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4"><span className="text-yellow-400">PowerBI</span> Pro</h3>
            <p className="text-white-400">
              Professional PowerBI consultation and training services to
              transform your data into actionable insights.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/" className="text-white-400 hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)}
                  to="/consultation"
                  className="text-white-400 hover:text-yellow-400"
                >
                  Consultation
                </Link>
              </li>

              <li>
                {" "}
                <Link onClick={() => window.scrollTo(0, 0)}
                  to="/training"
                  className="text-white-400 hover:text-yellow-400"
                >
                  Training
                </Link>
              </li>
              <li>
  <a
    href="/pricing.docx"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white-400 hover:text-yellow-400"
  >
    Pricing
  </a>
</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
            <address className="not-italic text-white-400">
              <p> 6200 Memorial Dr SUITE F, Stone</p>
              <p className="my-3">Mountain, GA 30083</p>
              <a href="mailto:info@amoconsultinggroup.com">
                info@powerbipro.com
              </a>
              <p className="my-3">770-770-1482</p>
            </address>
          </div>
        </div>
        <div className=" mt-8 flex justify-center items-center">
          <div className="flex gap-6">
            <a
              href="https://youtube.com/@powerbiprotrainingandconsultin?si=W36hZZUnYOw4EaRD"
              target="blank"
              rel="noopener noreferrer"
            >
              <Youtube className="text-yellow-400 w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/powerbiprotrainingandconsulting/about/?viewAsMember=true"
              target="blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-yellow-400 w-6 h-6 cursor-pointer" />
            </a>
            <a href="/" target="blank" rel="noopener noreferrer">
              <Instagram className="text-yellow-400 w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
