import React from "react";
import { Link } from "react-router-dom";
// import { useState } from 'react';
import {  BookOpen, ChevronRight, MessageSquare, Award } from 'lucide-react';
 


function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Transform Your Data with{" "}
              <span className="text-yellow-400">PowerBI</span>
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Professional consultation and training services to help you
              unleash the full potential of Microsoft PowerBI.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              {/* <button onClick={() => navigateTo('consultation')} className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors">Get Consultation</button> */}
              <Link
                to="/consultation"
                className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors"
              >
                Consultation
              </Link>
              {/* <button
                onClick={() => navigateTo("training")}
                className="bg-gray-800 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 transition-colors"
              >
                Explore Training
              </button> */}
              <Link
                to="/training"
                className="bg-gray-800 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 transition-colors"
              >
                Training
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive PowerBI solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
              <div className="bg-yellow-400 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare size={20} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Expert Consultation
              </h3>
              </div>
              <p className="text-gray-600">
                "The PowerBI consultation transformed how we visualize our sales
                data. 
              </p>
              <Link to="/training"
                // onClick={() => navigateTo("training")}
                className="text-black mt-4 font-medium flex items-center hover:text-yellow-600"
              >
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
            <div className="bg-yellow-400 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare size={20} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">PowerBI Training</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive training programs for beginners to advanced users.
              </p>
              
              <Link to="/training"
                // onClick={() => navigateTo("training")}
                className="text-black  font-medium flex items-center hover:text-yellow-600"
              >
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-yellow-400 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award size={20} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">About Our Team</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Meet our certified PowerBI professionals with years of industry
                experience.
              </p>
           
              <Link
                to="/about"
                className="text-black font-medium flex items-center hover:text-yellow-600"
              >
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
             
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Success stories from businesses we've helped
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-yellow-400 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">
                    Data Analyst, Tech Corp
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                "The PowerBI consultation transformed how we visualize our sales
                data. The insights we gained helped us increase revenue by 23%
                in just three months."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-yellow-400 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Rodriguez</h4>
                  <p className="text-sm text-gray-600">CEO, DataDrive Inc.</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The training our team received was comprehensive and practical.
                We're now building dashboards in-house that we used to
                outsource, saving us both time and money."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-yellow-400 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Jennifer Lee</h4>
                  <p className="text-sm text-gray-600">
                    BI Manager, Global Finance
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                "Working with PowerBI Pro has been a game-changer for our
                analytics department. Their expertise helped us implement
                complex DAX formulas that we couldn't figure out on our own."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
