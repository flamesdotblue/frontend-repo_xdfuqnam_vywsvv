import React from 'react';

function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600" />
          <span className="text-sm font-semibold text-gray-900">Aurnexa</span>
        </div>
        <p className="text-center text-xs text-gray-500 sm:text-left">
          © {new Date().getFullYear()} Aurnexa. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-xs text-gray-600">
          <a className="transition hover:text-gray-900" href="#">Privacy</a>
          <a className="transition hover:text-gray-900" href="#">Security</a>
          <a className="transition hover:text-gray-900" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
