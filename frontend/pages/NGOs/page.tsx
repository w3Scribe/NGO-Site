import { createFileRoute } from '@tanstack/react-router';
import { Button } from 'components/ui/button';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

export const Route = createFileRoute('/NGOs/')({
  component: RouteComponent,
});

function RouteComponent() {
  // Add styles to the document
  React.useEffect(() => {
    // Create style element
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes appear {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-appear {
        animation: appear 0.8s ease-out forwards;
      }
      
      .text-shadow-lg {
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
      }
      
      .text-shadow-sm {
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    `;
    document.head.appendChild(styleEl);

    // Cleanup function
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // NGO data - you can replace this with data from your API or database
  const ngos = [
    {
      id: 1,
      name: 'Itti si Khushi Foundation',
      description:
        'Working to provide education to underprivileged children across India, focusing on both academic and skill development.',
      image: '/itti si khushi.jpg',
      location: 'Mumbai, Maharashtra',
      category: 'Education',
      impact: 'Supported over 5,000 children',
      website: '#',
    },
    {
      id: 2,
      name: 'Ekal Vidyalaya',
      description:
        'Bringing primary education to rural and tribal India, with the goal of eradicating illiteracy from remote areas.',
      image: '/ekal.jpg',
      location: 'Pan-India',
      category: 'Education & Rural Development',
      impact: 'Operating in 80,000+ villages',
      website: '#',
    },
    {
      id: 3,
      name: 'Charity for Smile',
      description:
        'Focusing on healthcare for children with cleft lip and palate, providing free surgeries and rehabilitation.',
      image: '/pexels-liza-summer-6347738.jpg',
      location: 'Delhi NCR',
      category: 'Healthcare',
      impact: 'Changed over 10,000 smiles',
      website: '#',
    },
    {
      id: 4,
      name: 'Green Earth Initiative',
      description:
        'Working towards environmental conservation, tree plantation, and sustainable development practices.',
      image: '/pexels-pixabay-161688.jpg',
      location: 'Bangalore, Karnataka',
      category: 'Environment',
      impact: 'Planted 1 million trees',
      website: '#',
    },
    {
      id: 5,
      name: 'Women Empowerment Network',
      description:
        'Empowering women through skill development, entrepreneurship training, and creating economic opportunities.',
      image: '/pexels-shvetsa-5029853.jpg',
      location: 'Jaipur, Rajasthan',
      category: 'Women Empowerment',
      impact: 'Trained 25,000+ women',
      website: '#',
    },
    {
      id: 6,
      name: 'Feeding India Foundation',
      description:
        'Working to eradicate hunger and malnutrition by providing meals to those in need and reducing food waste.',
      image: '/pexels-cup-of-couple-6963695.jpg',
      location: 'Pan-India',
      category: 'Food & Nutrition',
      impact: 'Served 30 million meals',
      website: '#',
    },
    {
      id: 7,
      name: 'Animal Welfare Society',
      description:
        'Dedicated to protecting and caring for abandoned and abused animals, providing shelters and medical care.',
      image: '/pexels-ron-lach-9543401.jpg',
      location: 'Hyderabad, Telangana',
      category: 'Animal Welfare',
      impact: 'Rescued 50,000+ animals',
      website: '#',
    },
    {
      id: 8,
      name: 'Clean Water Initiative',
      description:
        'Providing access to clean drinking water in rural areas through sustainable water solutions and education.',
      image: '/ngo.jpg',
      location: 'Various States',
      category: 'Water & Sanitation',
      impact: 'Reached 500+ villages',
      website: '#',
    },
  ];

  // State for filtering
  const [filter, setFilter] = useState('All');
  const categories = [
    'All',
    'Education',
    'Healthcare',
    'Environment',
    'Women Empowerment',
    'Food & Nutrition',
    'Animal Welfare',
    'Water & Sanitation',
  ];

  // Filtered NGOs based on selected category
  const filteredNGOs =
    filter === 'All'
      ? ngos
      : ngos.filter((ngo) => ngo.category.includes(filter));

  return (
    <motion.div
      className="min-h-screen bg-slate-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Texture/Aura Effect */}
      <motion.div
        className="h-80 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/pexels-pixabay-161688.jpg')" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 mix-blend-multiply"></div>

        {/* Aura Effects - Light Orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 -right-20 w-80 h-80 bg-purple-400 rounded-full opacity-25 blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>

        {/* Noise Texture (Subtle) */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px',
          }}
        ></div>

        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-center text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our NGO Partners
          </motion.h1>
          <motion.p
            className="text-xl text-center max-w-3xl text-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Discover and support trusted organizations making a difference
            across India
          </motion.p>
        </div>
      </motion.div>

      {/* Filtering Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="mb-10">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Browse by Category
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* NGO Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNGOs.map((ngo, index) => (
            <motion.div
              key={ngo.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden relative">
                {/* Card Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-purple-500/40 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>

                {/* Image */}
                <motion.img
                  src={ngo.image}
                  alt={ngo.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-6 relative">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 bg-primary rounded-bl-full"></div>
                <div className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                  {ngo.category}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {ngo.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {ngo.description}
                </p>
                <div className="flex items-start space-x-2 text-sm text-gray-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{ngo.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-primary font-medium mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span>{ngo.impact}</span>
                </div>
                <div className="flex gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      className="flex-1 text-primary hover:text-primary/90 hover:bg-primary/5 transition-all duration-200 rounded-md p-2"
                      asChild
                    >
                      <a
                        href={`/ngo/${ngo.id}`}
                        className="flex items-center justify-center"
                      >
                        <span>Learn More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      className="flex-1 text-purple-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200 rounded-md p-2"
                      asChild
                    >
                      <a href="#" className="flex items-center justify-center">
                        <span>Donate</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredNGOs.length === 0 && (
          <motion.div
            className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 px-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 11v4M9 12h6"
                />
              </svg>
            </div>
            <motion.h3
              className="text-2xl font-bold text-gray-700 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              No NGOs Found
            </motion.h3>
            <motion.p
              className="text-gray-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              No organizations match your selected filters. Please try another
              category.
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                className="text-primary hover:text-primary/90 hover:bg-primary/5 transition-all duration-200 group"
                onClick={() => setFilter('All')}
              >
                <span className="flex items-center justify-center">
                  View All NGOs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Call to Action with Texture/Aura Effect */}
      <div className="relative overflow-hidden mt-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600"></div>

        {/* Texture Effects */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E\')',
            backgroundSize: '200px',
          }}
        ></div>

        {/* Aura Light Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>

        {/* Wave Pattern */}
        <div className="absolute w-full h-20 top-0 left-0 opacity-10">
          <svg
            viewBox="0 0 1440 320"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 py-16 px-4">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold text-white mb-6 text-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Are You an NGO Looking to Partner With Us?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto text-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join our network of trusted organizations and reach more donors
              and volunteers. Together, we can create a bigger impact.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  asChild
                >
                  <a href="/contact">Contact Us</a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/25 transition-all duration-300 font-medium shadow-lg"
                  asChild
                >
                  <a href="#">Learn About Partnership</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
