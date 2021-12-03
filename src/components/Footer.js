import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footerItem">
        <div className="name">
          <span>Created By: Prateeksha Ranjan |</span>
        </div>
        <div className="footer-logo">
          <a href="https://www.linkedin.com/in/prateeksharanjan/">
            <img
              className="logos"
              src="https://e7.pngegg.com/pngimages/342/689/png-clipart-linkedin-logo-icon-others-blue-text-thumbnail.png"
              alt="linkedin-logo"
            />
          </a>
          <a href="https://github.com/prateeksha9/shopKaro.git">
            <img
              id="git-logo"
              className="logos"
              src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"
              alt="insta-logo"
            />
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Footer;
