// Person card with a round headshot. Renders as an external link when `href` is set.
const ProfileCard = ({ img, name, href, children }) => {
  const content = (
    <>
      <img className="profile-card__avatar" src={img} alt={name} loading="lazy" decoding="async" />
      {children}
    </>
  );

  if (href) {
    return (
      <a className="profile-card profile-card--link" href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <article className="profile-card">{content}</article>;
};

export default ProfileCard;
