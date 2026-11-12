import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="section-block">
      <div className="section-inner">
        <h1 style={{ marginTop: 0, fontSize: 'clamp(2.2rem,5vw,3.2rem)', letterSpacing: '-1px' }}>Page not found</h1>
        <p style={{ fontSize: '1.05rem', maxWidth: 860, lineHeight: 1.55 }}>
          We couldn&apos;t find the page you were looking for. It may have moved, or the link may be out of date.
        </p>
        <Link to="/" className="primary-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
