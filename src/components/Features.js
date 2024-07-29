import React from 'react';
import easyRegistrationImage from '../images/easy-registration.jpg'; 
import lmsIntegrationImage from '../images/lms-integration.jpg';
import collaborationToolsImage from '../images/collaboration-tools.jpg';
import eventManagementImage from '../images/event-management.jpg';

const features = [
  { id: 1, title: 'Easy Registration', description: 'Quick and simple registration process for all participants.', image: easyRegistrationImage },
  { id: 2, title: 'LMS Integration', description: 'Access learning materials and resources seamlessly.', image: lmsIntegrationImage },
  { id: 3, title: 'Collaboration Tools', description: 'Communicate and collaborate effectively during the event.', image: collaborationToolsImage },
  { id: 4, title: 'Event Management', description: 'Organize and manage hackathon events effortlessly.', image: eventManagementImage },
];

export default function Features() {
  return (
    <div className="features">
      {features.map(feature => (
        <div key={feature.id} className="feature">
          <img src={feature.image} alt={feature.title} className="feature__image" />
          <div className="feature__content">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
