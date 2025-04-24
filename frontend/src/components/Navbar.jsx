import React from 'react';
import { Link  } from 'react-router-dom' 
import categories from '../data/categories'; // Import the dictionary
import _get from 'lodash/get';
import _map from 'lodash/map';


const Navbar = () => {
    return (
      <nav className="w-full h-[4rem] overflow-y-hidden bg-red-700 text-white fixed top-0">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo (flex-none para no estirar) */}
          <div className="flex-none">
            <div className="w-24 h-10 bg-blue-900 rounded-sm" />
          </div>
  
          {/* Menú centrado */}
          <div className="flex-1 flex justify-center space-x-6">
            {_map(categories, (cat) =>
              _get(cat, 'status') === 'active' ? (
                <Link
                  key={_get(cat, 'name')}
                  to={_get(cat, 'url')}
                  className="text-base font-medium hover:text-blue-200 transition-colors"
                >
                  {_get(cat, 'name')}
                </Link>
              ) : null
            )}
          </div>
  
          {/* Área usuario */}
          <div className="flex-none">
            <a
              href="/login"
              className="text-base font-medium hover:text-blue-200 transition-colors"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;