import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Over 15 years of leadership in information security and compliance strategy for global enterprises.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', email: 'sarah.johnson@synergionix.com' },
  },
  {
    name: 'Michael Chen',
    role: 'Head of AI Solutions',
    bio: 'Architect of enterprise AI systems, with expertise in agentic workflows and applied machine learning.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', email: 'michael.chen@synergionix.com' },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Compliance',
    bio: 'Expert in ISMS and AIMS implementation, with a focus on high-stakes regulatory environments.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', email: 'emily.rodriguez@synergionix.com' },
  },
  {
    name: 'David Thompson',
    role: 'Head of Transformation',
    bio: 'Leads digital transformation strategies with expertise in change management and enterprise systems.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', email: 'david.thompson@synergionix.com' },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Meet Our <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The driving force behind our success is our team of dedicated and commited professionals with decades of industry expertise and exposure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50/70 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Avatar */}
              <div className="relative w-32 h-32 mb-4">
                <img
                  alt={`Portrait of ${member.name}`}
                  src={member.image}
                  className="rounded-full w-full h-full object-cover shadow-md"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>

              {/* Bio with fixed height */}
              <p className="text-gray-600 text-sm mb-6 h-16 leading-relaxed">
                {member.bio}
              </p>

              {/* Socials */}
              <div className="mt-auto flex justify-center space-x-4 pt-2">
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${member.socials.email}`}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
