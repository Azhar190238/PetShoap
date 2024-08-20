
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import setting from '../../../assets/image/accountManagement/Setting.png'
import bill from '../../../assets/image/accountManagement/Wallet.png'
import order from '../../../assets/image/accountManagement/My Order.png'
import address from '../../../assets/image/accountManagement/Location.png'
import logout from '../../../assets/image/accountManagement/Logout.png'

const Header = () => {
  const items = [
    {
      label: <NavLink to='/findPuppy'>Find Puppy</NavLink>,
      key: '0',
    },
    {
      label: <NavLink to='/findPuppy2'>Find Puppy 2</NavLink>,
      key: '1',
    },
  ];
  const items1 = [
    {
      label: <NavLink to='/pussyService'>Pussy Service</NavLink>,
      key: '0',
    },
    {
      label: <NavLink to='/bathService'>Bath Service</NavLink>,
      key: '1',
    },
    {
      label: <NavLink to="/trainer">Trainer</NavLink>,
      key: '3',
    },
  ];
  const navLinks = (
    <>
      <li className='text-[#FF5C2C]'>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <Dropdown
          menu={{
            items
          }}
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Pets
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </li>
      <li>
        <Dropdown
          menu={{items: items1}}
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Services
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </li>
      <li>
        <NavLink to='/ourShop'>Products</NavLink>
      </li>
      <li className='outline outline-[#FF5C2C] outline-1 rounded-sm'>
        <NavLink to='/appointment'><span className='text-[#FF5C2C]'>Become a seller</span></NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-[1320px] mx-auto ">
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
        <Link to='/shoppingCart'><img src="/src/assets/image/NavIcon/Cart.png" alt="Cart" /></Link>
        <Link to='/register'><a className="btn rounded-3xl text-[#C9C3C1] flex items-center">
          <img className='mr-2' src="/src/assets/image/NavIcon/user.png" alt="User" /> <span className='hidden sm:inline'>Login/Register</span>
        </a></Link>
        {/* <a className="btn rounded-3xl bg-[#FF5C2C] text-white font-bold  items-center hidden  sm:flex">
          <img className='mr-2' src="/src/assets/image/NavIcon/Utube.png" alt="How it Works" /> How It Works
        </a> */}
        <a className=" p-3 rounded-3xl bg-[#FF5C2C] text-white font-bold  items-center hidden  sm:flex">
          <img className='mr-2' src="/src/assets/image/NavIcon/Utube.png    " alt="How it Works" />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" m-1 rounded-3xl bg-[#FF5C2C] text-white font-bold">How it works</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li className='text-black'>
                <a href='/manageAccount1' className='flex'>
                  <img src={setting} alt="" />
                  <p>Manage Account</p>
                </a>
                <a href='/findPuppy1' className='flex'>
                  <img src={order} alt="" />
                  <p>My Order</p>
                </a>
                <a className='flex'>
                  <img src={bill} alt="" />
                  <p>Billings</p>
                </a>
                <a className='flex'>
                  <img src={address} alt="" />
                  <p>Address</p>
                </a>
                <a className='flex'>
                  <img src={logout} alt="" />
                  <p>Sign Out</p>
                </a>
              </li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
