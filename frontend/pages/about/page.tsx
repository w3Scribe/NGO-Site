import { createFileRoute } from '@tanstack/react-router';
import { Button } from 'components/ui/button';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
});

function RouteComponent() {
  // Team members data
  const teamMembers = [
    {
      name: "Aisha Sharma",
      role: "Founder & CEO",
      image: "/ngo4.jpg",
      bio: "With over 15 years in the social sector, Aisha founded CharitySmile with a vision to connect resources to those who need them most."
    },
    {
      name: "Raj Mehta",
      role: "Director of Operations",
      image: "/volunteer.jpg",
      bio: "Raj oversees all operational aspects of CharitySmile, ensuring our programs deliver maximum impact while maintaining transparency."
    },
    {
      name: "Priya Singh",
      role: "NGO Partnership Manager",
      image: "/ngo2.jpg",
      bio: "Priya builds and nurtures relationships with our NGO partners, identifying collaboration opportunities for greater social impact."
    },
    {
      name: "Vikram Patel",
      role: "Head of Volunteer Initiatives",
      image: "/ngo1.jpg",
      bio: "Vikram coordinates our volunteer network, creating meaningful opportunities for people to contribute their time and skills."
    }
  ];

  // Values data
  const values = [
    {
      title: "Transparency",
      description: "We maintain complete transparency in our operations, finances, and impact metrics to build trust with all stakeholders.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Inclusivity",
      description: "We embrace diversity and ensure our programs and services are accessible to all, regardless of background or circumstance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Empowerment",
      description: "We believe in enabling communities to become self-reliant through education, skill development, and sustainable resources.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "We foster partnerships with NGOs, corporations, and individuals to combine strengths and create greater collective impact.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  // Milestones data
  const milestones = [
    {
      year: "2018",
      title: "Foundation Established",
      description: "CharitySmile was founded with a mission to bridge the gap between resources and needs in underserved communities."
    },
    {
      year: "2019",
      title: "First Partner NGOs",
      description: "We partnered with our first five NGOs, establishing the collaborative model that defines our approach today."
    },
    {
      year: "2020",
      title: "COVID-19 Response",
      description: "Launched emergency relief programs during the pandemic, providing essential supplies to over 50,000 families."
    },
    {
      year: "2022",
      title: "Digital Platform Launch",
      description: "Released our digital platform to connect donors and volunteers directly with causes that match their interests."
    },
    {
      year: "2024",
      title: "Nationwide Expansion",
      description: "Expanded operations to all major cities in India, with a network of over 30 partner NGOs across the country."
    },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Texture/Aura Effect */}
      <motion.section 
        className="relative h-80 bg-cover bg-center flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/pexels-rdne-6646852.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Overlay with texture */}
        <div className="absolute inset-0 bg-black bg-opacity-50 mix-blend-multiply"></div>
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
               backgroundSize: "200px" 
             }}>
        </div>
        
        {/* Aura/Glow Effects */}
        <motion.div 
          className="absolute -top-20 -left-20 w-64 h-64 bg-teal-400 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-40 -right-20 w-80 h-80 bg-primary rounded-full opacity-25 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.2
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-400 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.7
          }}
        ></motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ textShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
            >
              About CharitySmile
            </motion.h1>
            <motion.p 
              className="text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              Our story, mission, and the impact we&apos;re making together.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Our Mission
              </motion.h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                CharitySmile is dedicated to bringing happiness to underprivileged children, elderly individuals, and those in need. We work tirelessly to provide food, education, medical care, and shelter to those who require support.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our unique approach involves collaborating with multiple NGOs across India to expand our reach and maximize impact. Through these strategic partnerships, we ensure that resources reach those who need them most efficiently and effectively.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that by working together, we can create sustainable solutions that empower individuals and communities, promoting long-term social well-being and breaking cycles of poverty.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Our Vision
              </motion.h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We envision a world where every individual has access to the resources, opportunities, and support they need to thrive. A society where compassion and collaboration drive meaningful change.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our goal is to build a robust platform that connects donors, volunteers, and NGOs seamlessly, creating an ecosystem of giving that maximizes social impact while ensuring complete transparency.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By 2030, we aim to impact the lives of over 10 million individuals across India, establishing a model that can be replicated globally to address critical social challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="py-20 bg-slate-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our Core Values
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <motion.p 
              className="max-w-3xl mx-auto text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              These principles guide everything we do, from program design to partnerships.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5
                }
              }
            }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-sm p-8 text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 24,
                    }
                  }
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {value.icon}
                </motion.div>
                <motion.h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</motion.h3>
                <motion.p className="text-gray-600">{value.description}</motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Meet Our Team
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <motion.p 
              className="max-w-3xl mx-auto text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Dedicated professionals committed to our mission of creating positive change.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.5
                }
              }
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 24,
                    }
                  }
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="h-64 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </motion.div>
                <motion.div className="p-6">
                  <motion.h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</motion.h3>
                  <motion.p className="text-primary font-medium mb-4">{member.role}</motion.p>
                  <motion.p className="text-gray-600">{member.bio}</motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Milestones Section */}
      <motion.section 
        className="py-20 bg-slate-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our Journey
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <motion.p 
              className="max-w-3xl mx-auto text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Key milestones in our journey of creating positive impact.
            </motion.p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
            
            <motion.div 
              className="space-y-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.7
                  }
                }
              }}
            >
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      x: index % 2 === 0 ? 50 : -50
                    },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 24,
                      }
                    }
                  }}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.8 + (index * 0.3), 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 15
                    }}
                    whileHover={{ scale: 1.3 }}
                  ></motion.div>
                  
                  {/* Content */}
                  <motion.div 
                    className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <motion.span 
                      className="inline-block px-4 py-1 bg-primary/10 text-primary font-bold rounded-full mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {milestone.year}
                    </motion.span>
                    <motion.h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</motion.h3>
                    <motion.p className="text-gray-600">{milestone.description}</motion.p>
                  </motion.div>
                  
                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join Us in Making a Difference
          </motion.h2>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-10 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Whether you donate, volunteer, or spread the word, your support helps us create lasting positive change.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 transition-all duration-200 hover:shadow-md"
              >
                <a href="/NGOs" className="flex items-center justify-center">
                  <span>Donate Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
              >
                <a href="/contact" className="flex items-center justify-center">
                  <span>Contact Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
