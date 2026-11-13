// Site-wide links and contact details. Update these in one place.

export const CHAPTER_EMAIL = 'shpe@elcamino.edu';

export const FORMS = {
  interest: 'https://docs.google.com/forms/d/e/1FAIpQLSenSL6sZjHDJ513nezwQxuGshaj6BJhD6ujEYZzTYB7A-PLrA/viewform',
  officerApplication: 'https://docs.google.com/forms/d/e/1FAIpQLSeWcXqMnkToFU2sfLIDXCyY3bqRQCHWCcGDYARQZXR4lfALtQ/viewform',
  // TODO: add the alumni Google Form link once it exists. Until then the Alumni page links to email.
  alumni: null,
};

export const NAV_ITEMS = [
  { label: 'Home', ariaLabel: 'Go to home page', to: '/' },
  { label: 'About', ariaLabel: 'Learn about us', to: '/about' },
  { label: 'LeaderSHPE', ariaLabel: 'View our LeaderSHPE page', to: '/leadershpe' },
  { label: 'Website Team', ariaLabel: 'Meet our website team', to: '/website-team' },
  { label: 'Events', ariaLabel: 'See our upcoming events', to: '/events' },
  { label: 'Gallery', ariaLabel: 'View our gallery page', to: '/gallery' },
  { label: 'Alumni', ariaLabel: 'View our Alumni page', to: '/alumni' },
  { label: 'Join', ariaLabel: 'Join the chapter', to: '/join' },
];

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/shpe_elco/' },
  { label: 'GitHub', href: 'https://github.com/ECCSHPE' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/society-of-hispanic-professional-engineers-el-camino-college/' },
  { label: 'Discord', href: 'https://discord.gg/QKNKxCbgX6' },
  { label: 'Slack', href: 'https://join.slack.com/t/shpeecc/shared_invite/zt-4gm5c4s36-5ynmHfHVpCnggmWb57iSYQ' },
];

export const BRAND = {
  logo: '/images/brand/ecc-shpe-logo.png',
  logoWhite: '/images/brand/ecc-shpe-logo-white.png',
};
