import React from "react";
import { Link } from "react-router-dom";
import { Users, Send, ChevronRight, MessageSquare, Award } from "lucide-react";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto px-8 py-16 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Hero Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unlock the Power of Your Data with PowerBI <span className="text-yellow-400">Pro</span>
            </h1>
            <p className="text-lg mb-8">
              Transform your business intelligence with expert consultation,
              training, and implementation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/consultation"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-center"
              >
                Get a Consultation
              </Link>
              <Link
                to="/training"
                className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg text-center"
              >
                Explore Training
              </Link>
            </div>
          </div>

          {/* Hero Images with yellow and black theme */}
          <div className="md:w-1/4 relative">
            {/* Main dashboard image with yellow-black styling */}
            <div className="relative overflow-hidden rounded-lg shadow-xl border-2 border-yellow-500">
              <div className="bg-gradient-to-br from-yellow-100 to-gray-100 p-6 rounded-lg">
                {/* Stylized dashboard content */}
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-lg">Power BI Dashboard</div>
                  <div className="flex ml-2 space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Chart area 1 */}
                <div className="bg-white p-3 rounded-lg shadow mb-4">
                  <div className="h-4 w-1/3 bg-yellow-500 mb-2 rounded"></div>
                  <div className="flex h-32 items-end space-x-2">
                    <div className="w-1/6 h-1/6 bg-black rounded-t"></div>
                    <div className="w-1/6 h-2/6 bg-black rounded-t"></div>
                    <div className="w-1/6 h-3/6 bg-black rounded-t"></div>
                    <div className="w-1/6 h-5/6 bg-yellow-500 rounded-t"></div>
                    <div className="w-1/6 h-4/6 bg-yellow-500 rounded-t"></div>
                    <div className="w-1/6 h-3/6 bg-black rounded-t"></div>
                  </div>
                </div>

                {/* Chart area 2 */}
                <div className="bg-white p-3 rounded-lg shadow mb-4">
                  <div className="h-4 w-1/4 bg-black mb-2 rounded"></div>
                  <div className="flex space-x-2">
                    <div className="w-1/2">
                      <div className="aspect-square rounded-full border-8 border-t-yellow-500 border-r-yellow-500 border-b-black border-l-black flex items-center justify-center">
                        <span className="text-lg font-bold">75%</span>
                      </div>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center space-y-2">
                      <div className="h-3 bg-yellow-500 rounded w-full"></div>
                      <div className="h-3 bg-black rounded w-3/4"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* Data table */}
                <div className="bg-white p-3 rounded-lg shadow">
                  <div className="h-4 w-1/3 bg-yellow-500 mb-2 rounded"></div>
                  <div className="space-y-2">
                    <div className="flex bg-gray-100 p-1 rounded">
                      <div className="w-1/3 h-3 bg-black rounded mr-2"></div>
                      <div className="w-1/3 h-3 bg-yellow-500 rounded"></div>
                    </div>
                    <div className="flex bg-gray-100 p-1 rounded">
                      <div className="w-1/3 h-3 bg-black rounded mr-2"></div>
                      <div className="w-1/3 h-3 bg-yellow-500 rounded"></div>
                    </div>
                    <div className="flex bg-gray-100 p-1 rounded">
                      <div className="w-1/3 h-3 bg-black rounded mr-2"></div>
                      <div className="w-1/3 h-3 bg-yellow-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating image 1 with yellow theme */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 overflow-hidden rounded-lg shadow-lg border-4 border-yellow-500 bg-yellow-500 p-2">
              <div className="bg-white h-full w-full rounded overflow-hidden">
                <div className="p-2">
                  <div className="h-3 w-3/4 bg-yellow-500 mb-2 rounded"></div>
                  <div className="flex justify-center items-center h-24">
                    <div className="w-16 h-16 rounded-full border-4 border-t-yellow-500 border-r-black border-b-yellow-500 border-l-black animate-spin"></div>
                  </div>
                  <div className="h-3 w-1/2 bg-black mb-1 rounded mt-2"></div>
                  <div className="h-3 w-3/4 bg-yellow-500 rounded"></div>
                </div>
              </div>
            </div>

            {/* Floating image 2 with black theme */}
            <div className=" hidden md:block absolute -top-10 -right-12 w-40 h-40 overflow-hidden rounded-lg shadow-lg border-4 border-black bg-black p-2">
              <div className="bg-white h-full w-full rounded overflow-hidden">
                <div className="p-2">
                  <div className="h-3 w-3/4 bg-black mb-2 rounded"></div>
                  <div className="grid grid-cols-2 gap-1 h-24">
                    <div className="bg-yellow-500 rounded"></div>
                    <div className="bg-black rounded"></div>
                    <div className="bg-black rounded"></div>
                    <div className="bg-yellow-500 rounded"></div>
                  </div>
                  <div className="h-3 w-1/2 bg-yellow-500 mb-1 rounded mt-2"></div>
                  <div className="h-3 w-3/4 bg-black rounded"></div>
                </div>
              </div>
            </div>

            {/* Yellow accent element */}
            <div className="absolute -bottom-4 right-12 w-24 h-24 bg-yellow-500 rounded-full -z-10"></div>
            {/* Black accent element */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-black rounded-full -z-10"></div>
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
              <Link
                to="/training"
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

              <Link
                to="/training"
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
          {/* Flyer Section */}
<div className="mt-12">
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: 0,
      paddingTop: '150%',
      paddingBottom: 0,
      boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
      marginTop: '1.6em',
      marginBottom: '0.9em',
      overflow: 'hidden',
      borderRadius: '8px',
      willChange: 'transform',
    }}
  >
    <iframe
      loading="lazy"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        border: 'none',
        padding: 0,
        margin: 0,
      }}
      src="https://www.canva.com/design/DAGmTY9gqaw/2ewLhO6gaHHQ-ClisnESPw/view?embed"
      allow="fullscreen"
      title="PowerPi Flyer"
    />
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
                  <h4 className="font-semibold">Eric Buta</h4>
                  <p className="text-sm text-gray-600">Data Analyst</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I’ve been learning from Power BI Pro Training & Consulting for
                going on 2 years now attending their Microsoft 365 boot camp as
                well as Power BI Data Analytics boot camp I would have to say
                that my learning experience from Power BI Pro Training &
                Consulting has been rewarding and fulfilling. And patience with
                students and teaching the material is from one of their sign
                posts as well as making sure everyone whom attends understands
                the material. I would absolutely recommend learning from Power
                BI Pro Training & Consulting."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-yellow-400 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Duan Threatt</h4>
                  <p className="text-sm text-gray-600">Data Analyst</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Having experience with Power BI, I found the Power BI Bootcamp
                well organized and easy to follow. It never hurts to learn other
                points of view and the instructors did an amazing job of
                presenting and giving examples of doing things in ways I had
                never thought of. I was able to learn different ways of
                accomplishing great results. Easy to follow and great networking
                opportunities with fellow students and instructors.I would
                absolutely recommend learning from Power BI Pro Training &
                Consulting."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-yellow-400 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Umar Umar</h4>
                  <p className="text-sm text-gray-600">Data Analyst</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I have attended their Microsoft 365 boot camp as well as Power
                BI Data Analytics boot camp and my learning experience from
                their Training & Consulting has been tremendously rewarding and
                fulfilling. From my experience, the main reason for their
                success in delivering the materials is the use of repitative and
                simple methods ensuring that every participant is carried along
                and also having extra tutors who take a student in a separate
                breakout room to ensure he understands the basic principles of
                what is being discussed.I would absolutely recommend learning
                from Power BI Pro Training & Consulting."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg p-8 mx-6 my-8 md:mx-60">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Have questions about our services? Contact us today to speak with
            one of our PowerBI experts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-yellow-400 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageSquare size={20} className="text-black" />
              </div>
              <a
                href="mailto:info@amoconsultinggroup.com"
                className="text-white"
              >
                info@powerbipro.com
              </a>
            </div>

            <div>
              <div className="bg-yellow-400 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users size={20} className="text-black" />
              </div>
              <p className="text-white">770-770-1482</p>
            </div>

            <div>
              <div className="bg-yellow-400 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Send size={20} className="text-black" />
              </div>
              <p className="text-white">
                6200 Memorial Dr SUITE F,
                <br />
                Stone Mountain, GA 30083
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
