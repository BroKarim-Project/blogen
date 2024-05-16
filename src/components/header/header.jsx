import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { navLists } from './headerData';
import { Headset } from 'lucide-react';

const NavAnim = ({ isNavOpen, setIsNavOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleItemClick = () => {
    setIsNavOpen(false);
  };
  const navVariant = {
    open: {
      clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      clipPath: 'circle(0px at calc(100% - 120px) 35px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 30,
      },
    },
  };
  useEffect(() => {
    const updateScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check and event listener
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);
  // Check screen width and adjust clipPath for smaller screens
  if (isMobile) {
    (navVariant.open = {
      clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
      transition: {
        type: 'tween',
      },
    }),
      (navVariant.closed = {
        clipPath: 'circle(0px at calc(100% - 35px) 35px)',
        transition: {
          delay: 0.5,
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      });
  } else {
    (navVariant.open = {
      clipPath: `circle(2444px at calc(100% - 40px) 40px)`,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    }),
      (navVariant.closed = {
        clipPath: 'circle(0px at calc(100% - 120px) 35px)',
        transition: {
          delay: 0.5,
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      });
  }
  const itemVariants = {
    open: (custom) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        delay: custom,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    }),
    closed: {
      opacity: 0,
      x: -80,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <motion.div className={`fixed top-0 z-40  w-full h-screen flex items-center justify-center backdrop-blur-sm transition-all ease duration-700 overflow-hidden`} variants={navVariant} animate={isNavOpen ? 'open' : 'closed'} initial={false}>
        <div className="relative backdrop-blur-sm opacity-95 flex flex-col items-center space-x-8 min-h-[100vh] bg-gray-700 min-w-[100vw] ">
          <div className="flex flex-col items-center space-y-8 my-auto mx-0">
            {/* title */}
            <motion.h1 variants={itemVariants} animate={isNavOpen ? 'open' : 'closed'} className="text-6xl font-bold text-white ">
              Menu
            </motion.h1>
            <a href="/#home">
              <div className="text-2xl font-bold text-white" onClick={handleItemClick}>
                <motion.h2 className="text-white" variants={itemVariants} animate={isNavOpen ? 'open' : 'closed'} custom={0.1}>
                  Home
                </motion.h2>
              </div>
            </a>
            <a href="/about">
              <div onClick={handleItemClick} className="text-2xl font-bold text-white">
                <motion.h2 className="text-white" variants={itemVariants} animate={isNavOpen ? 'open' : 'closed'} custom={0.2}>
                  About
                </motion.h2>
              </div>
            </a>
            <a href="/projects">
              <div onClick={handleItemClick} className="text-2xl font-bold text-white">
                <motion.h2 className="text-white" variants={itemVariants} animate={isNavOpen ? 'open' : 'closed'} custom={0.3}>
                  Projects
                </motion.h2>
              </div>
            </a>
            <a href="/#contact">
              <div onClick={handleItemClick} className="text-2xl font-bold text-white">
                <motion.h2 className="text-white" variants={itemVariants} animate={isNavOpen ? 'open' : 'closed'} custom={0.4}>
                  Contact
                </motion.h2>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Header = () => {
  const navRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <header className="w-full py-5  flex justify-between items-center">
      <nav
        className={` navbar px-10 flex w-screen items-center transition-colors ease duration-500 ${
          isNavOpen ? 'backdrop-filter backdrop-blur-md bg-gray-700 bg-opacity-50' : 'backdrop-filter backdrop-blur-md'
        } inset-0  bg-opacity-50  z-50  `}
      >
        {/* sebelah kiri */}
        <ul className="flex flex-1 gap-5 items-center justify-start max-sm:hidden" ref={navRef}>
          <div className="bg-black  flex  items-center rounded-full ">
            <Headset color="#ffff" className="m-1" />
            <p className="text-xs text-white">5,100</p>
            <div className="bg-white rounded-full  p-2  m-1">
              <svg width="16px" height="16px" viewBox="-3 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <title>play</title> <desc>Created with Sketch Beta.</desc> <defs> </defs>{' '}
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                    {' '}
                    <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-419.000000, -571.000000)" fill="#000000">
                      {' '}
                      <path
                        d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
                        id="play"
                        sketch:type="MSShapeGroup"
                      >
                        {' '}
                      </path>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>
            </div>
          </div>
          {navLists.map((navItem, index) =>
            navItem.path ? (
              // jika submenu tida ada
              <li key={navItem.id} className="group relative hover:opacity-65 focus:text-blue-300 text-black tracking-tighter">
                <a href={navItem.path} className={`ud-menu-scroll   text-base lg:inline-flex no-underline text-black lg:px-0  group-hover:text-primary  relative hover-underline-animation`}>
                  {navItem.title}
                </a>
              </li>
            ) : (
              // jika submenu ada maka :
              <li className="submenu-item group relative" key={navItem.id}>
                <button onClick={() => handleSubmenu(index)} className={`ud-menu-scroll flex items-center  justify-between  text-base text-dark group-hover:text-primary  dark:group-hover:text-primary lg:inline-flex lg:px-0 `}>
                  {navItem.title}

                  <span className="pl-1">
                    <svg className={`transition duration-300 lg:group-hover:rotate-180`} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
                {/* ini yang nampilin list submenu */}
                <ul
                  className={`submenu relative left-0 top-full w-[250px] border-black border-2 rounded-md bg-white p-4 transition-[top] duration-300 group-hover:opacity-100  lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full ${
                    openIndex === index ? '!-left-[25px]' : 'hidden'
                  }`}
                >
                  {navItem.submenu?.map((item, key) => (
                    <li key={key} className="hover:text-primary">
                      <a href={item.path || '#'}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
        {/* tengah */}
        Article
        {/* kanan */}
        <div className="flex items-center gap-7 justify-end flex-1">
          <a
            href="#_"
            class="inline-flex items-center justify-center  px-4 py-2 text-xs font-semibold text-center text-black no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none  hover:border-white focus:shadow-xs focus:no-underline"
          >
            Subscribe for $2
          </a>
          {/* items */}
          <button className="burger button flex flex-col justify-center items-center space-y-1.5 " onClick={toggleNav}>
            <div className={`w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${isNavOpen ? 'rotate-45   bg-white translate-y-[2px]' : ''}`}></div>
            <div className={`w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${isNavOpen ? '-rotate-45 -translate-y-2 bg-white' : ''}`}></div>
          </button>
        </div>
      </nav>
      <NavAnim isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </header>
  );
};

export default Header;

/*

{navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
*/
