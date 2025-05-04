import { motion } from 'framer-motion';
import { Calendar, DollarSign, Users } from 'lucide-react';
// import Image from 'next/image';
// Use a standard img tag instead of next/image
import { localProjects, marathiPhrases } from '../../constants';
import { Button } from '../ui/button';

export default function ProjectsGallery() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          महाराष्ट्रातील प्रकल्प
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="relative h-48 w-full">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-3 right-3 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                  {project.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-3">{project.location}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>प्रारंभ: {new Date(project.startDate).toLocaleDateString('mr-IN')}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{project.impact}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>एकूण निधी: {project.donation}</span>
                  </div>
                </div>
                
                <Button className="w-full">
                  {marathiPhrases.readMore}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
