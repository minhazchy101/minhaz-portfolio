
import React from 'react';
import { useParams, Link } from 'react-router';

const projectDetails = {
  carRide: {
    title: 'Car Ride',
    image: 'https://i.ibb.co/1tNyptw8/Screenshot-5.png',
    description:
      'Car Ride is a user-friendly car-sharing and booking web application where users can book available cars for their rides, set or update trip times, and even post their own cars for others to book. It is a full-stack car rental platform designed to simplify the process of booking vehicles online. Users can browse, filter, and book available cars while administrators can manage the car inventory seamlessly. The platform offers a responsive UI, user authentication, secure booking, and real-time availability tracking.' ,
    tech: ['React', 'React Router', 'Tailwind CSS', 'Firebase', 'MongoDB'],
    challenges: [
      'Role-based authentication with Firebase',
      'Booking and availability logic across time slots',
      'Sync between Firebase Auth and MongoDB data',
    ],
    improvements: [
      'Payment gateway integration',
      'Route mapping with Google Maps',
      'User-to-user chat system',
    ],
    live: 'https://car-ride-89b09.web.app/',
    github: 'https://github.com/minhazchy101/Car-Ride',
  },
  hubbyHub: {
    title: 'Hubby Hub',
    image: 'https://i.ibb.co/TqtmjTgD/Screenshot-4.png',
    description:
      'HobbyHub is a dynamic web platform designed to connect individuals through shared hobbies and interests. Whether you are into painting, reading, gaming, or photography, HobbyHub makes it easy to discover and join local hobby groups. It is a platform where users can also make interest-based groups, create events, and interact through hobbies.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    challenges: [
      'Dynamic event countdown and filtering',
      'Designing intuitive group join flows',
      'Handling user-generated group content',
    ],
    improvements: [
      'Push notifications for events',
      'Private messaging in groups',
      'Improved mobile responsiveness',
    ],
    live: 'https://assignment-ten-4fa46.web.app/',
    github: 'https://github.com/minhazchy101/hobby_hub_client',
  },
  flowerWeb: {
    title: 'Flower Web',
    image: 'https://i.ibb.co/nq6Lhwyw/Screenshot-3.png',
    description:
      'A minimal and elegant flower shop website designed with HTML and CSS. Features responsive layout and clean UI.',
    tech: ['HTML', 'CSS'],
    challenges: [
      'Creating responsive layout without JavaScript',
      'Designing with only CSS grid and flexbox',
    ],
    improvements: [
      'Add interactive JS cart system',
      'Order form with backend support',
      'Category-based flower filter',
    ],
    live: 'https://minhazchy101.github.io/flower-web/',
    github: 'https://github.com/minhazchy101/flower-web',
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Project Not Found</h1>
        <p className="text-gray-500 mb-6">The project you're looking for doesn’t exist.</p>
        <Link to="/" className="btn btn-primary">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-7">
        
        {/* Project Image */}
        <div className="w-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl shadow-xl border border-base-200"
          />
        </div>

        {/* Project Content */}
        <div className="space-y-6">
         
          <h1 className="text-4xl font-bold text-primary">{project.title}</h1>
          <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                     {/* Tech Stack */}
          <div>
            <h2 className="text-xl font-semibold text-secondary mb-2">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="badge badge-outline text-sm px-3 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h2 className="text-xl font-semibold text-secondary mb-2">Challenges Faced</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {project.challenges.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Future Plans */}
          <div>
            <h2 className="text-xl font-semibold text-secondary mb-2">Future Improvements</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {project.improvements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

            </div>
         
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success btn-sm"
            >
              Live Website
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm"
            >
              GitHub Repository
            </a>
            <Link to="/" className="btn btn-secondary btn-sm">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
