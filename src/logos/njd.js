import React from "react";
import PropTypes from "prop-types";

const NJD = props => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      version="1.1"
      viewBox="0 0 297.48001 304.26001"
    >
      <path
        d="M297.48,42.12C297.48,0,250.08,0,243.66,0H232.2s16.2,16.32,16.2,22.2a2.40706,2.40706,0,0,1-2.4,2.4H204.66a2.40705,2.40705,0,0,1-2.4-2.4c0-5.88,16.26-22.2,16.26-22.2-15.78,0-38.34,3.54-54,14.7a122.23491,122.23491,0,0,0-13.32-.66A131.84747,131.84747,0,0,0,25.86,187.08C16.08,199.02,0,223.38,0,254.52c0,26.88,13.26,49.74,13.26,49.74s23.64-34.62,76.68-34.62a5.39858,5.39858,0,0,0,5.28-4.26A131.92286,131.92286,0,0,0,266.28,81.48C280.86,77.04,297.48,65.4,297.48,42.12Z"
        fill="#fff"
      />
      <path d="M292.02,42.12c0-26.1-24-37.56-48.12-36.66,0,0,9.96,9.6,9.96,16.74,0,3.78-2.82,7.86-10.8,7.86h-35.7c-8.04,0-12.84-2.76-12.84-7.38,0-7.62,11.94-16.44,11.94-16.44s-24.18,1.44-40.38,14.16A122.31616,122.31616,0,0,0,151.2,19.5,126.45777,126.45777,0,0,0,43.14,211.68a13.61866,13.61866,0,0,1-6.48,1.62c-8.88,0-8.94-19.62-8.94-19.62S5.4,219.72,5.4,254.52c0,21.42,9.06,39.84,9.06,39.84s25.08-30.18,75.48-30.18c0,0-23.94-9.6-23.94-21.18a8.16929,8.16929,0,0,1,.96-2.76A126.43349,126.43349,0,0,0,257.76,77.88C270,75.96,292.02,67.62,292.02,42.12Z" />
      <path
        d="M254.64,11.04a16.48147,16.48147,0,0,1,4.68,11.16c0,6.78-5.34,13.32-16.26,13.32h-35.7c-13.92,0-18.3-7.14-18.3-12.84a12.59459,12.59459,0,0,1,3.24-8.82s-35.1,6.84-35.1,35.4c0,24,26.82,23.88,26.82,23.88h7.86l-21.9,57.9L136.74,88.92c-2.04-2.64-10.14-12.84-22.2-12.84-16.74,0-24.06,18.84-26.58,25.38L52.68,194.88a98.2775,98.2775,0,0,1,30.36-4.74,129.54154,129.54154,0,0,1,26.94,2.94l16.38-43.32,20.76,37.74-14.7,15.42c-9.66,10.08-29.88,4.5-49.38,4.5-36.3,0-32.82,11.34-46.38,11.34-9.6,0-12.12-11.7-12.12-11.7S10.8,229.74,10.8,254.52a91.00887,91.00887,0,0,0,5.7,30.24s28.26-24.12,56.82-24.12c0,0-12.72-6.12-12.72-17.64,0-3.3,4.32-13.86,18.42-13.86,21.72,0,30.78,12.9,57,12.9,36.78,0,57.18-22.74,64.38-41.7l48.12-127.2s38.1.06,38.1-31.02C286.62,13.62,254.64,11.04,254.64,11.04Z"
        fill="#ce1126"
      />
      <path
        d="M205.44,202.26c-8.28,21.84-30.84,45.24-69.42,45.24-26.22,0-36.42-12.06-55.02-12.84A113.1374,113.1374,0,0,0,248.58,88.32ZM114.54,70.68c6.72,0,16.74,2.58,26.46,14.88l27.3,34.56L184.02,78.6s-32.16-.3-32.16-29.4a35.848,35.848,0,0,1,3.72-16.38c-1.44,0-2.88-.06-4.38-.06A113.08767,113.08767,0,0,0,47.94,192.12L82.98,99.54C90.18,80.4,100.8,70.68,114.54,70.68Z"
        fill="#fff"
      />
      <path
        d="M128.52,199.14l11.94-12.48-13.14-23.94L113.4,199.44a130.80911,130.80911,0,0,0-30.3-3.9,101.793,101.793,0,0,0-30.96,5.16c.96,1.62,1.86,3.24,2.88,4.86,5.7-1.98,14.16-3.54,28.08-3.54C103.08,202.02,121.2,206.76,128.52,199.14Z"
        fill="#fff"
      />
    </svg>
  );
};

NJD.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NJD.defaultProps = {
  size: "100"
};

export default NJD;
