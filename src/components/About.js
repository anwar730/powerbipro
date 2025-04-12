import React from 'react'
import {  MessageSquare, Users, Send } from 'lucide-react';
 

function About() {
  return (
    <>
    {/* Hero Section */}
    <div className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">About <span className="text-yellow-400">PowerBI Pro</span></h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Meet the team of experts behind our PowerBI consultation and training services.</p>
        </div>
      </div>
    </div>
    
    {/* Main Content */}
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Story */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">Founded in 2018, PowerBI Pro was born from a simple observation: organizations were collecting more data than ever before, but many lacked the expertise to transform that data into actionable insights.</p>
            <p className="text-gray-600 mb-4">Our founders, a team of data analysts and business intelligence experts, set out to bridge this gap by providing specialized PowerBI consultation and training services. What started as a small consultancy has grown into a trusted partner for businesses across industries.</p>
            <p className="text-gray-600">Today, we help organizations of all sizes harness the power of Microsoft PowerBI to make data-driven decisions that drive growth and innovation. Our commitment to excellence and client success remains at the core of everything we do.</p>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Mission</h3>
              <p className="text-gray-600">To empower organizations with the knowledge and tools they need to unlock the full potential of their data through PowerBI expertise.</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-md shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600 text-sm">We strive for excellence in all our services, continuously updating our knowledge and refining our approach.</p>
              </div>
              
              <div className="bg-white p-5 rounded-md shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Client Focus</h4>
                <p className="text-gray-600 text-sm">We put our clients' needs first, tailoring our solutions to address their unique challenges and objectives.</p>
              </div>
              
              <div className="bg-white p-5 rounded-md shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">We embrace new ideas and technologies to deliver cutting-edge solutions that stay ahead of industry trends.</p>
              </div>
              
              <div className="bg-white p-5 rounded-md shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Knowledge Sharing</h4>
                <p className="text-gray-600 text-sm">We believe in democratizing data skills and freely sharing our expertise to elevate the entire data community.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Mitchell</h3>
                <p className="text-gray-600 mb-4">Founder & Lead Consultant</p>
                <p className="text-gray-600 text-sm">Microsoft Certified: Data Analyst Associate with over 10 years of experience in business intelligence and data analytics.</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">David Rodriguez</h3>
                <p className="text-gray-600 mb-4">Senior PowerBI Trainer</p>
                <p className="text-gray-600 text-sm">PowerBI expert specializing in DAX and complex data modeling. Former Microsoft employee with a passion for teaching.</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Jennifer Lee</h3>
                <p className="text-gray-600 mb-4">Data Visualization Specialist</p>
                <p className="text-gray-600 text-sm">Award-winning dashboard designer with expertise in visual storytelling and information design principles.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Certifications</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-gray-50 p-4 rounded-lg h-32 w-32 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-gray-900">Microsoft Partner</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg h-32 w-32 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-gray-900">PowerBI Certified</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg h-32 w-32 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-gray-900">Data Analyst Associate</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg h-32 w-32 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-gray-900">Azure Data Expert</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact */}
        <div className="bg-gray-900 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">Have questions about our services? Contact us today to speak with one of our PowerBI experts.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-yellow-400 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare size={20} className="text-black" />
                </div>
                <p className="text-white">info@powerbi-pro.com</p>
              </div>
              
              <div>
                <div className="bg-yellow-400 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users size={20} className="text-black" />
                </div>
                <p className="text-white">(555) 123-4567</p>
              </div>
              
              <div>
                <div className="bg-yellow-400 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Send size={20} className="text-black" />
                </div>
                <p className="text-white">123 Analytics Drive<br />Data City, DC 10101</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    

  )
}

export default About
