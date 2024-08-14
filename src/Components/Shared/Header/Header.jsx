
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//     const navLinks = <>
//       <li className='text-[#FF5C2C]'> <NavLink to='/'>Home</NavLink> </li>
//       <li> <NavLink to='/pets'>
//         <details>
//            <summary>Pets</summary>
//            <ul className="p-2">
//              <li><a>Submenu 1</a></li>
//              <li><a>Submenu 2</a></li>
//            </ul>
//         </details>
//       </NavLink> </li>
//       <li> <NavLink to='/services'>
//         <details>
//            <summary>Services</summary>
//            <ul className="p-2">
//              <li><a>Submenu 1</a></li>
//              <li><a>Submenu 2</a></li>
//            </ul>
//         </details>
//       </NavLink> </li>
//       <li> <NavLink to='/products'>Products</NavLink> </li>
//       <li className='outline outline-[#FF5C2C] outline-1 rounded-sm'> <NavLink to='/p'><span className='text-[#FF5C2C]'>Become a seller</span></NavLink> </li>
//     </>
//     return (
//       <div className="navbar max-w-[1320px] mx-auto bg-base-100">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//               {
//                 navLinks
//               }
//             </ul>
//           </div>
//           <a className="text-xl"> <img className='w-3/4' src="/src/assets/image/NavIcon/cat.png" alt="logo" /></a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             {
//               navLinks
//             }
//           </ul>
//         </div>
//         <div className="navbar-end  lg:flex">
//           <a ><img className='mr-6' src="/src/assets/image/NavIcon/Cart.png" alt="" /></a>
//           <a className="btn rounded-3xl text-[#C9C3C1] "> <img src= "/src/assets/image/NavIcon/user.png" alt="" /> login/register</a>
//           <a className="btn rounded-3xl bg-[#FF5C2C] text-white font-bold"> <img src="/src/assets/image/NavIcon/Utube.png" alt="" /> how it works</a>
//         </div>
//       </div>
//     );
//   };

// export default Header;


import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navLinks = (
    <>
      <li className='text-[#FF5C2C]'>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <details>
          <summary>Pets</summary>
          <ul className="p-2">
            <li><NavLink to='/pets/submenu1'>Submenu 1</NavLink></li>
            <li><NavLink to='/pets/submenu2'>Submenu 2</NavLink></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li><NavLink to='/services/submenu1'>Submenu 1</NavLink></li>
            <li><NavLink to='/services/submenu2'>Submenu 2</NavLink></li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to='/products'>Products</NavLink>
      </li>
      <li className='outline outline-[#FF5C2C] outline-1 rounded-sm'>
        <NavLink to='/p'><span className='text-[#FF5C2C]'>Become a seller</span></NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-[1320px] mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="text-xl">
          <img className='w-3/4' src="/src/assets/image/NavIcon/cat.png" alt="logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        <a className='mr-6'><img src="/src/assets/image/NavIcon/Cart.png" alt="Cart" /></a>
        <a className="btn rounded-3xl text-[#C9C3C1] flex items-center">
          <img className='mr-2' src="/src/assets/image/NavIcon/user.png" alt="User" /> <span className='hidden sm:inline'>Login/Register</span>
        </a>
        <a className="btn rounded-3xl bg-[#FF5C2C] text-white font-bold  items-center hidden  sm:flex">
          <img className='mr-2' src="/src/assets/image/NavIcon/Utube.png" alt="How it Works" /> How It Works
        </a>
      </div>
    </div>
  );
};

export default Header;
