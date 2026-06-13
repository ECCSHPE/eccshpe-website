import React from 'react';

const Events = () => {
  return       <div className="section-block alt">
      <div className="section-inner">
        <h1 style={{ marginTop: 0, fontSize: 'clamp(2.2rem,5vw,3.2rem)', letterSpacing: '-1px' }}>Upcoming Events</h1>
        <p style={{ fontSize: '1.05rem', maxWidth: 860, lineHeight: 1.55 }}>
          Workshops, networking nights, outreach and more. General Meetings: TBD SHPE will be back Fall 2026! Have a great summer. Meetings in MESA|STEM Center Nats 4 unless otherwise stated.
        </p>
        <ul className="events-list">
          <li><strong>Next General Meeting:</strong>  TBD: SHPE will be back Fall 2026! Have a great summer </li>
        </ul>
        <p style={{ fontSize: '.95rem' }}>Have an event idea? Want to collab? Reach out via Email to shpe@elcamino.edu!.</p>
      </div>
    </div>
};

export default Events;
