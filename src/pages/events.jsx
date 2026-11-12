import React from 'react';

const Events = () => {
  return (
    <div className="section-block alt">
      <div className="section-inner">
        <h1 style={{ marginTop: 0, fontSize: 'clamp(2.2rem,5vw,3.2rem)', letterSpacing: '-1px' }}>Upcoming Events</h1>
        <p style={{ fontSize: '1.05rem', maxWidth: 860, lineHeight: 1.55 }}>
          Workshops, networking nights, outreach and more. Meetings are held in the MESA|STEM Center (Nats 4) unless otherwise stated.
        </p>
        <ul className="events-list">
          <li><strong>Next General Meeting:</strong> To be announced. Follow us on Instagram or Discord for the latest dates.</li>
        </ul>
        <p style={{ fontSize: '.95rem' }}>Have an event idea? Want to collab? Reach out via email to <a href="mailto:shpe@elcamino.edu">shpe@elcamino.edu</a>!</p>
      </div>
    </div>
  );
};

export default Events;
