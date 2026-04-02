import React from 'react';

const Events = () => {
  return (
    <div className="section-block alt">
      <div className="section-inner">
        <h1 style={{ marginTop: 0, fontSize: 'clamp(2.2rem,5vw,3.2rem)', letterSpacing: '-1px' }}>Upcoming Events</h1>
        <p style={{ fontSize: '1.05rem', maxWidth: 860, lineHeight: 1.55 }}>
          Workshops, networking nights, outreach and more. General Meetings: Tuesday 4:00 pm PT in MESA|STEM Center Nats 4 unless otherwise stated.  For workshop times please see the RSVP form.
        </p>
        <ul className="events-list">
          <li><strong>Next General Meeting:</strong> 5/7 General Meeting 3 </li>
          <li>
            <strong>4/24 & 5/1 UCLA Soles X ECC SHPE Arduino Workshop:</strong> (you will be contacted to pick one date).
            {' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe_FhOjp3PMfPcUU4ap5_VjrPCEy_xBvo-vbhg7-4E3clVb_A/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up
            </a>
          </li>
          <li>
            <strong> 4/11 SHPE Region 2 Day at the Beach Carne Asada &amp; Mixer Networking:</strong>
            {' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdOZU1li_X6-PEN-J4VqY1S80DMN9pWognUYQEX4qM-GTo7xQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up
            </a>
          </li>
          <li>
            <strong>ECC SHPE Jet Engine Workshop (TBD):</strong>
            {' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeq0vUC1agaXJpZATVzPCham0iC5McP9-Cdpi5vkYSjRlEITg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interest sign up
            </a>
          </li>
        </ul>
        <p style={{ fontSize: '.95rem' }}>Have an event idea? Want to collab? Reach out via Email to shpe@elcamino.edu!.</p>
      </div>
    </div>
  );
};

export default Events;
