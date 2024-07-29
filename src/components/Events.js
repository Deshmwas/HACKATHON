import React, { useEffect, useState } from 'react';
import '../styles/index.scss'; 

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/myapp/events/')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <div className="events__list">
        {events.map(event => (
          <div key={event.id} className="events__item">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
