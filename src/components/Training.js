import React from "react";
// import { Link } from "react-router-dom";
import {  ChevronRight } from 'lucide-react';
 

function Training() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              PowerBI <span className="text-yellow-400">Training</span> Programs
            </h1>
            <p className="my-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training to master Microsoft PowerBI for data
              analysis and visualization.
            </p>
            <div className="flex flex-col justify-center md:flex-row md:space-x-4 space-y-2 md:space-y-0">
  <a
    href="https://forms.office.com/Pages/ResponsePage.aspx?id=EeE0QF5AFEWcUOAwYgqu_WbD0_OTVQ5GkKF2vVltsHxURTNWV1VDVkRVRE9RNExZTktDWlZNWE4zTS4u"
    target="_blank"
    className="bg-yellow-400 text-black px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors"
  >
    Register for Training
  </a>
  <a
    href="/pricing.docx"
    className="bg-yellow-400 text-black px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors"
  >
    See Our Pricing
  </a>
</div>


          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our PowerBI Training?
            </h2>
            <p className="text-gray-600">
              Our training programs are designed by certified PowerBI
              professionals with years of practical experience. We focus on
              real-world applications and provide hands-on exercises that
              reinforce learning.
            </p>
          </div>

          {/* Training Levels */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Training Levels
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="bg-yellow-400 p-4">
                  <h3 className="text-black text-xl font-bold">Beginner</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>Introduction to PowerBI Desktop</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>Connecting to Data Sources</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>Creating Basic Visualizations</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>Publishing and Sharing</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <p className="text-gray-900 font-semibold">
                      Duration: 12 Weeks
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Perfect for those new to PowerBI and data visualization
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="bg-yellow-400 p-4">
                  <h3 className="text-black text-xl font-bold">Intermediate</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>Advanced Data Modeling</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>Introduction to DAX Formulas</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>Interactive Dashboard Design</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>Row-Level Security</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <p className="text-gray-900 font-semibold">
                      Duration: 12 Weeks
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      For users with basic PowerBI knowledge looking to advance
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="bg-yellow-400 p-4">
                  <h3 className="text-black text-xl font-bold">Advanced</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>Complex DAX Functions</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>Performance Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>PowerBI Service Administration</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>Custom Visuals & Advanced Analytics</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <p className="text-gray-900 font-semibold">
                      Duration: 12 Weeks
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      For experienced users seeking to master PowerBI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              What You'll Learn
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Data Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to clean, reshape, and prepare your data for
                  analysis using PowerBI's powerful Query Editor. Master
                  techniques for handling missing values, duplicates, and
                  creating calculated columns.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Power Query fundamentals</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Data cleansing techniques</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Creating custom columns and measures</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Data Modeling</h3>
                <p className="text-gray-600 mb-4">
                  Understand the principles of dimensional modeling and how to
                  create efficient data models in PowerBI. Learn to establish
                  relationships, manage cardinality, and implement best
                  practices.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Star and snowflake schemas</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Relationship types and cardinality</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Role-playing dimensions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">DAX Formulas</h3>
                <p className="text-gray-600 mb-4">
                  Master the Data Analysis Expressions (DAX) language to create
                  powerful calculations. From basic aggregations to advanced
                  time intelligence functions, you'll learn to solve real-world
                  business problems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Filter context and row context</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Time intelligence functions</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Advanced DAX patterns</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Visualization & Design
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to choose the right visuals for your data and design
                  intuitive dashboards. Discover techniques for creating
                  compelling stories with your data that drive action.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Visualization best practices</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Interactive features and bookmarks</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Custom visuals and themes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Training Format */}
          <div className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Training Format
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  In-Person Training
                </h3>
                <p className="text-gray-600 mb-4">
                  Join us for hands-on, instructor-led sessions at our training
                  center. Benefit from direct interaction with our experts and
                  networking with other professionals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Small class sizes (maximum 12 participants)</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Comprehensive course materials provided</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Practice exercises on real-world datasets</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Virtual Training</h3>
                <p className="text-gray-600 mb-4">
                  Learn from anywhere with our live, interactive virtual
                  sessions. All the benefits of our in-person training delivered
                  to your home or office.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Live instruction and Q&A sessions</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Digital course materials and recordings</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <ChevronRight
                      size={16}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>30 days of post-training support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to master PowerBI?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Register for our upcoming training sessions and take your data
              analysis skills to the next level.
            </p>
            <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=EeE0QF5AFEWcUOAwYgqu_WbD0_OTVQ5GkKF2vVltsHxURTNWV1VDVkRVRE9RNExZTktDWlZNWE4zTS4u"
            target="blank"
              className="bg-yellow-400 text-black px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors"
            >
              Register for Training
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Training;
