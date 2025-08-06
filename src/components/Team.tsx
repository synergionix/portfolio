import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'S Raja Ramachandran',
    role: 'CEO & Founder',
    bio: 'Over 25 years of leadership in IT Services spearheading many projects across the globe, specialising in ISMS/AIMS compliance strategy for global enterprises.',
    image: '<ToBeAdded>',
    socials: { linkedin: '#', email: 'rajaramachandran.s@synergionix.com' },
  },
  {
    name: 'Arvind R',
    role: 'Head of AI Solutions',
    bio: 'Architect of enterprise AI systems, with expertise in Agentic Workflows, LLM Integrations, RAG, Model Fine-Tuning and applied Machine Learning in a diverse range of business cases.',
    image: '<ToBeAdded>',
    socials: { linkedin: '#', email: 'arvind.r@synergionix.com' },
  },
  {
    name: 'Ramanathan Kumar',
    role: 'Director of Compliance',
    bio: 'Veteran in ISMS and InfoSec implementation, with a focus on high-stakes regulatory environments across top global organisations across a broad range of industries and domains.',
    image: '<ToBeAdded>',
    socials: { linkedin: '#', email: 'kumar.ramanathan@synergionix.com' },
  },
  {
    name: 'Nithya R',
    role: 'Head of Transformation',
    bio: 'Leads enterprise-scale digital modernization and systems integration programs across SaaS and cloud environments with expertise in architecture and strategy.',
    image: '<ToBeAdded>',
    socials: { linkedin: '#', email: 'nithya.r@synergionix.com' },
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
              {/* TODO: Add actual images, LinkedIn for each member */}
              {/* <div className="relative w-32 h-32 mb-4">
                <img
                  alt={`Portrait of ${member.name}`}
                  src={member.image}
                  className="rounded-full w-full h-full object-cover shadow-md"
                />
              </div> */}

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>

              {/* Bio with fixed height */}
              <p className="text-gray-600 text-sm mb-6 h-16 leading-relaxed">
                {member.bio}
              </p>

              <br />

              {/* Socials */}
              <div className="mt-auto flex justify-center space-x-4 pt-2">
                {/* <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={20} />
                </a> */}
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
