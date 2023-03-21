import React from "react";

const FooterPage = () => {
  return (
    <footer className="footer grid-rows-2 p-10 bg-neutral mt-28 text-neutral-content">
      <div>
        <span className="text-xl mb-3 font-bold text-white">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="text-xl mb-3 font-bold text-white">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="text-xl mb-3 font-bold text-white">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="text-xl mb-3 font-bold text-white">Social</span>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Github</a>
      </div>
      <div>
        <span className="text-xl mb-3 font-bold text-white">Explore</span>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Enterprise</a>
        <a className="link link-hover">Security</a>
        <a className="link link-hover">Pricing</a>
      </div>
      <div>
        <span className="text-xl mb-3 font-bold text-white">Apps</span>
        <a className="link link-hover">Mac</a>
        <a className="link link-hover">Windows</a>
        <a className="link link-hover">iPhone</a>
        <a className="link link-hover">Android</a>
      </div>
    </footer>
  );
};

export default FooterPage;
