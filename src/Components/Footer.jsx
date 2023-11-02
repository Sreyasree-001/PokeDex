

// function Footer() {
//     return (
//         <>
//         <div className="text-center font-serif font-light my-7 text-sm text-slate-700">
//             <p>Made with ❤️ from Sreyasree & Arnab</p>
//             <p>Copyright@2023</p>
//         </div>
//         </>
        
//     )
// }

// export default Footer

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 font-mono ">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">
          &copy; Copyright {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-md">
        Made with ❤️ from Sreyasree & Arnab
        </p>
      </div>
    </footer>
  );
}

export default Footer;