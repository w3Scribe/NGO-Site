import { createFileRoute } from '@tanstack/react-router';
import { Button } from 'components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [stats, setStats] = useState({
    volunteers: 0,
    ngos: 0,
    donations: 0,
    beneficiaries: 0
  });

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => {
        const newStats = { ...prev };
        if (newStats.volunteers < 500) newStats.volunteers += 5;
        if (newStats.ngos < 30) newStats.ngos += 1;
        if (newStats.donations < 5000000) newStats.donations += 50000;
        if (newStats.beneficiaries < 10000) newStats.beneficiaries += 100;
        
        // Clear interval when all counters reach their target
        if (newStats.volunteers >= 500 && newStats.ngos >= 30 && 
            newStats.donations >= 5000000 && newStats.beneficiaries >= 10000) {
          clearInterval(interval);
        }
        
        return newStats;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Featured NGOs
  const featuredNGOs = [
    {
      id: 1,
      name: "Itti si Khushi Foundation",
      image: "/itti si khushi.jpg",
      category: "Education",
    },
    {
      id: 3,
      name: "Charity for Smile",
      image: "/pexels-liza-summer-6347738.jpg",
      category: "Healthcare",
    },
    {
      id: 4,
      name: "Green Earth Initiative",
      image: "/pexels-pixabay-161688.jpg",
      category: "Environment",
    }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Charity Gala",
      date: "May 15, 2025",
      location: "Grand Hyatt, Mumbai",
      image: "/pexels-rdne-6646852.jpg"
    },
    {
      id: 2,
      title: "Rural Education Drive",
      date: "May 25, 2025",
      location: "Pune District",
      image: "/pexels-shvetsa-5029853.jpg"
    },
    {
      id: 3,
      title: "Free Medical Camp",
      date: "June 5, 2025",
      location: "Delhi NCR",
      image: "/pexels-cup-of-couple-6963695.jpg"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "CharitySmile has transformed how we connect with donors. Our funding has increased by 40% since joining the platform.",
      author: "Rahul Sharma",
      role: "Director, Itti si Khushi Foundation",
      avatar: "/pexels-shvetsa-5029853.jpg"
    },
    {
      id: 2,
      quote: "As a volunteer, I've found meaningful opportunities that align with my values. The platform made it easy to contribute to causes I care about.",
      author: "Priya Patel",
      role: "Regular Volunteer",
      avatar: "/pexels-ron-lach-9543401.jpg"
    },
    {
      id: 3,
      quote: "The transparency in donation tracking gave me confidence that my contributions were making a real difference in children's lives.",
      author: "Amit Verma",
      role: "Monthly Donor",
      avatar: "/pexels-cup-of-couple-6963695.jpg"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section with Texture/Aura Effect */}
      <motion.section 
        className="relative h-[85vh] bg-cover bg-center flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/home.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Overlay with texture */}
        <div className="absolute inset-0 bg-black bg-opacity-40 mix-blend-multiply"></div>
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
               backgroundSize: "200px" 
             }}>
        </div>
        
        {/* Aura/Glow Effects */}
        <motion.div 
          className="absolute -top-40 left-1/3 w-96 h-96 bg-primary rounded-full opacity-15 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-purple-500 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-blue-400 rounded-full opacity-15 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.8
          }}
        ></motion.div>
             
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
            >
              Together We Can Make A Difference
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
            >
              Join our mission to empower communities and create lasting change. 
              Every donation, every volunteer hour counts.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg transition-all duration-200 group shadow-md"
                >
                  <a href="/NGOs" className="flex items-center justify-center">
                    <span>Donate Now</span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 400
                      }}
                    > 
                      <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 group text-lg"
                >
                  <a href="/contact" className="flex items-center justify-center">
                    <span>Become a Volunteer</span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 400
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Counter Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stats.volunteers}+</div>
              <div className="text-lg text-gray-600">Active Volunteers</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stats.ngos}</div>
              <div className="text-lg text-gray-600">Partner NGOs</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹{(stats.donations / 1000000).toFixed(1)}M</div>
              <div className="text-lg text-gray-600">Donations Raised</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stats.beneficiaries.toLocaleString()}+</div>
              <div className="text-lg text-gray-600">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              CharitySmile is dedicated to bringing happiness to underprivileged children, elderly individuals, and those in need. 
              We work to provide food, education, medical care, and shelter to those who require support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Education</h3>
              <p className="text-gray-600">
                Providing quality education and learning resources to underprivileged children, ensuring they have the tools to succeed.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Healthcare</h3>
              <p className="text-gray-600">
                Supporting access to essential healthcare services and medical treatment for those who cannot afford it.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Shelter</h3>
              <p className="text-gray-600">
                Creating safe living environments and supporting housing initiatives for the homeless and displaced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured NGOs */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured NGOs</h2>
              <div className="w-20 h-1 bg-primary mb-4"></div>
              <p className="text-gray-600 max-w-2xl">
                These organizations are making remarkable differences in their communities. 
                Your support can help them expand their impact.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex items-center text-primary hover:text-primary/90 hover:bg-primary/5 transition-all duration-200 rounded-md">
              <a href="/NGOs" className="flex items-center">
                <span>View All NGOs</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredNGOs.map(ngo => (
              <div key={ngo.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={ngo.image} 
                    alt={ngo.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                    {ngo.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{ngo.name}</h3>
                  <Button asChild variant="ghost" className="w-full text-primary hover:text-primary/90 hover:bg-primary/5 transition-all duration-200 rounded-md">
                    <a href={`/NGOs`} className="flex items-center justify-center">
                      <span>Support This Cause</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="ghost" className="md:hidden items-center text-primary hover:text-primary/90 hover:bg-primary/5 transition-all duration-200 rounded-md">
              <a href="/NGOs" className="flex items-center justify-center">
                <span>View All NGOs</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How You Can Help</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Making a difference is easier than you think. Here&apos;s how you can contribute to our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">1</div>
              <div className="bg-white rounded-xl shadow-sm p-8 h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Donate</h3>
                <p className="text-gray-600 mb-6">
                  Your financial contributions help fund critical programs and provide resources to those in need.
                  Every amount makes a difference.
                </p>
                <Button asChild variant="ghost" className="w-full text-primary hover:text-primary/90 hover:bg-primary/5 transition-all duration-200 rounded-md">
                  <a href="/NGOs" className="flex items-center justify-center">
                    <span>Donate Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">2</div>
              <div className="bg-white rounded-xl shadow-sm p-8 h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Share your time and skills. Our volunteer opportunities range from teaching to organizing events and administrative support.
                </p>
                <Button asChild variant="ghost" className="w-full text-primary hover:text-primary/90 hover:bg-primary/5 transition-all duration-200 rounded-md">
                  <a href="/contact" className="flex items-center justify-center">
                    <span>Become a Volunteer</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">3</div>
              <div className="bg-white rounded-xl shadow-sm p-8 h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Spread the Word</h3>
                <p className="text-gray-600 mb-6">
                  Share the mission with your network. Raising awareness is just as important as raising funds.
                </p>
                <Button asChild variant="ghost" className="w-full text-primary hover:text-primary/90 hover:bg-primary/5 transition-all duration-200 rounded-md">
                  <a href="/about" className="flex items-center justify-center">
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Join us at these upcoming events to support our cause and connect with our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary/90 transition-all duration-300">
                    <a href="/contact">Learn More</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What People Say</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Hear from our community of NGOs, volunteers, and donors about their experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-sm p-8">
                <div className="text-primary mb-4">
                  <svg width="45" height="36" className="fill-current">
                    <path d="M13.415.43c-2.523 0-4.75.428-6.683 1.284-1.944.855-3.563 1.96-4.856 3.315-1.308 1.354-2.318 2.87-3.03 4.544-.711 1.66-1.067 3.307-1.067 4.94 0 1.848.478 3.654 1.435 5.42.957 1.768 2.366 3.36 4.228 4.773-2.026 3.725-4.361 6.839-7.006 9.341.836.202 1.73.303 2.682.303 2.467 0 4.925-.888 7.373-2.664 2.448-1.776 4.621-4.254 6.521-7.433 1.195.388 2.343.578 3.443.578 2.917 0 5.402-.991 7.452-2.975 2.05-1.983 3.075-4.41 3.075-7.28 0-2.438-.8-4.544-2.399-6.319C16.584 1.318 14.42.431 13.415.43zm31.45 0c-2.518 0-4.75.428-6.681 1.284-1.944.855-3.563 1.96-4.856 3.315-1.307 1.354-2.32 2.87-3.032 4.544-.71 1.66-1.065 3.307-1.065 4.94 0 1.848.478 3.654 1.434 5.42.958 1.768 2.367 3.36 4.227 4.773-2.024 3.725-4.36 6.839-7.004 9.341.835.202 1.73.303 2.681.303 2.467 0 4.925-.888 7.374-2.664 2.448-1.776 4.62-4.254 6.52-7.433 1.195.388 2.343.578 3.444.578 2.917 0 5.4-.991 7.45-2.975 2.05-1.983 3.076-4.41 3.076-7.28 0-2.438-.8-4.544-2.4-6.319C48.035 1.318 45.87.431 44.865.43z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
            Join our community of volunteers and donors today. Together, we can create lasting change and bring smiles to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-all duration-200 shadow-md"
            >
              <a href="/NGOs" className="flex items-center justify-center">
                Donate Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
            >
              <a href="/contact" className="flex items-center justify-center">
                Get Involved
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
