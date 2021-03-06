import React, { PropTypes } from 'react';

export const ProfileExtras = ({ images }) => {
  const elems = images.map((url, i) =>
    <img className="img-responsive" key={i} src={url} />);

  return (
    <div className="profile-extras">
      {elems}
    </div>);
};

ProfileExtras.propTypes = {
  name: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProfileExtras;
