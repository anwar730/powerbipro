import React from "react";
// import { Link } from 'react-router-dom'
import { Calendar, Clock, Users, BookOpen } from "lucide-react";

function Consultation() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              PowerBI <span className="text-yellow-400">Consultation</span>{" "}
              Services
            </h1>
            <p className="mt-4 mb-8 text-xl text-gray-300 max-w-3xl mx-auto">
              Expert guidance to help you implement PowerBI solutions that drive
              business value.
            </p>
            <a
              href="https://outlook.office.com/owa/calendar/PowerBIProConsulting@amoconsultinggroup.com/bookings/"
              target="blank"
              className="bg-yellow-400 mt-6 text-black px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors"
            >
              Register for Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Offering */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Consultation Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="bg-yellow-400 p-2 rounded-full mr-3">
                    <Users size={20} className="text-black" />
                  </div>
                  PowerBI Implementation
                </h3>
                <p className="text-gray-600">
                  We'll help you set up PowerBI from scratch, ensuring it
                  integrates seamlessly with your existing data sources. Our
                  experts will configure workspaces, security settings, and
                  deployment pipelines tailored to your organization's needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="bg-yellow-400 p-2 rounded-full mr-3">
                    <Calendar size={20} className="text-black" />
                  </div>
                  Dashboard Design & Development
                </h3>
                <p className="text-gray-600">
                  Transform your business requirements into intuitive,
                  actionable dashboards. We'll help you design and develop
                  interactive reports that make data analysis straightforward
                  and insights readily accessible to stakeholders.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="bg-yellow-400 p-2 rounded-full mr-3">
                    <Clock size={20} className="text-black" />
                  </div>
                  Data Modeling & DAX
                </h3>
                <p className="text-gray-600">
                  Get expert assistance with complex data models and DAX
                  formulas. Our consultants will help you optimize performance,
                  implement best practices, and solve challenging analytical
                  problems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="bg-yellow-400 p-2 rounded-full mr-3">
                    <BookOpen size={20} className="text-black" />
                  </div>
                  PowerBI Audit & Optimization
                </h3>
                <p className="text-gray-600">
                  Already using PowerBI? Our audit service will identify
                  bottlenecks, security risks, and opportunities for
                  improvement. We'll provide a detailed report with actionable
                  recommendations to optimize your current implementation.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Consultation Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-black">1</span>
                </div>
                <h3 className="font-semibold mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">
                  We analyze your current situation, data sources, and business
                  requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-black">2</span>
                </div>
                <h3 className="font-semibold mb-2">Planning</h3>
                <p className="text-gray-600 text-sm">
                  We develop a customized strategy and implementation roadmap.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-black">3</span>
                </div>
                <h3 className="font-semibold mb-2">Implementation</h3>
                <p className="text-gray-600 text-sm">
                  Our experts work with your team to execute the plan
                  efficiently.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-black">4</span>
                </div>
                <h3 className="font-semibold mb-2">Knowledge Transfer</h3>
                <p className="text-gray-600 text-sm">
                  We ensure your team is equipped to maintain and build upon our
                  work.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to transform your data analytics?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with our PowerBI experts and take the
              first step toward data-driven decision making.
            </p>
            <a
              href="https://outlook.office.com/owa/calendar/PowerBIProConsulting@amoconsultinggroup.com/bookings/"
              target="blank"
              className="bg-yellow-400 mt-6 text-black px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors"
            >
              Register for Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Consultation;
