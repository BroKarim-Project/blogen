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
      <motion.div
        className={`fixed top-0 z-40  w-full h-screen flex items-center justify-center backdrop-blur-sm transition-all ease duration-700 overflow-hidden`}
        variants={navVariant}
        animate={isNavOpen ? 'open' : 'closed'}
        initial={false}
      >
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
    <header className="w-full py-2 absolute left-0 top-0  flex justify-between items-center">
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
        {/* logo */}
        <a href="#">
          <svg width="64" height="64" className="w-24 h-8" viewBox="0 0 370 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M40.787 90H40.6551L0 49.3449V41.119L48.4673 89.5863C46.0244 89.8621 43.4643 90 40.787 90ZM0 57.5706L32.4294 90H24.2039L0 65.7961V57.5706ZM0 74.0218L15.9782 90H3.63528C1.62757 90 0 88.3724 0 86.3647V74.0218ZM0 3.63527V32.8933L55.4333 88.3265C58.5952 87.4563 61.386 86.101 63.806 84.2605C66.3704 82.3474 68.5074 79.9864 70.2171 77.1777C72.9036 72.9444 74.2469 68.1615 74.2469 62.829C74.2469 57.6594 73.0665 53.2632 70.7055 49.6404C68.3853 46.0176 64.9253 43.3718 60.3256 41.7028C63.3378 40.156 65.6173 38.4464 67.1642 36.5739C69.9321 33.2361 71.3161 28.8195 71.3161 23.3243C71.3161 17.9919 69.9321 13.4125 67.1642 9.58616C62.5644 3.35821 54.749 0.162822 43.7178 0H3.63527C1.62757 0 0 1.62757 0 3.63527Z"
              fill="black"
            />
            <path
              d="M100.776 22.64H110.248V42.992H110.696C111.507 41.0293 112.68 39.408 114.216 38.128C115.752 36.848 117.843 36.208 120.488 36.208C122.323 36.208 123.987 36.5493 125.48 37.232C127.016 37.9147 128.317 38.96 129.384 40.368C130.493 41.776 131.347 43.568 131.944 45.744C132.584 47.92 132.904 50.5013 132.904 53.488C132.904 56.4747 132.584 59.056 131.944 61.232C131.347 63.408 130.493 65.2 129.384 66.608C128.317 68.016 127.016 69.0613 125.48 69.744C123.987 70.4267 122.323 70.768 120.488 70.768C117.843 70.768 115.752 70.1493 114.216 68.912C112.68 67.632 111.507 65.9893 110.696 63.984H110.248V70H100.776V22.64ZM116.392 63.408C118.525 63.408 120.168 62.768 121.32 61.488C122.472 60.1653 123.048 58.352 123.048 56.048V50.928C123.048 48.624 122.472 46.832 121.32 45.552C120.168 44.2293 118.525 43.568 116.392 43.568C114.728 43.568 113.277 43.9733 112.04 44.784C110.845 45.5947 110.248 46.8747 110.248 48.624V58.352C110.248 60.1013 110.845 61.3813 112.04 62.192C113.277 63.0027 114.728 63.408 116.392 63.408ZM139.727 62.64H149.839V30H139.727V22.64H159.311V62.64H169.423V70H139.727V62.64ZM192.95 70.768C190.39 70.768 188.086 70.384 186.038 69.616C183.99 68.8053 182.241 67.6533 180.79 66.16C179.382 64.6667 178.294 62.8533 177.526 60.72C176.758 58.5867 176.374 56.176 176.374 53.488C176.374 50.8 176.758 48.3893 177.526 46.256C178.294 44.1227 179.382 42.3093 180.79 40.816C182.241 39.3227 183.99 38.192 186.038 37.424C188.086 36.6133 190.39 36.208 192.95 36.208C195.51 36.208 197.814 36.6133 199.862 37.424C201.91 38.192 203.638 39.3227 205.046 40.816C206.497 42.3093 207.606 44.1227 208.374 46.256C209.142 48.3893 209.526 50.8 209.526 53.488C209.526 56.176 209.142 58.5867 208.374 60.72C207.606 62.8533 206.497 64.6667 205.046 66.16C203.638 67.6533 201.91 68.8053 199.862 69.616C197.814 70.384 195.51 70.768 192.95 70.768ZM192.95 63.728C195.083 63.728 196.747 63.0667 197.942 61.744C199.137 60.4213 199.734 58.544 199.734 56.112V50.864C199.734 48.432 199.137 46.5547 197.942 45.232C196.747 43.9093 195.083 43.248 192.95 43.248C190.817 43.248 189.153 43.9093 187.958 45.232C186.763 46.5547 186.166 48.432 186.166 50.864V56.112C186.166 58.544 186.763 60.4213 187.958 61.744C189.153 63.0667 190.817 63.728 192.95 63.728ZM249.437 73.328C249.437 76.8267 247.965 79.408 245.021 81.072C242.077 82.736 237.448 83.568 231.133 83.568C227.976 83.568 225.373 83.376 223.325 82.992C221.277 82.6507 219.634 82.1387 218.397 81.456C217.202 80.7733 216.349 79.9627 215.837 79.024C215.368 78.0853 215.133 77.0613 215.133 75.952C215.133 74.0747 215.688 72.6453 216.797 71.664C217.906 70.7253 219.464 70 221.469 69.488V69.104C220.061 68.6773 218.93 68.08 218.077 67.312C217.266 66.5013 216.861 65.3707 216.861 63.92C216.861 62.2987 217.394 61.104 218.461 60.336C219.57 59.568 221.021 58.9707 222.813 58.544V58.16C220.85 57.2213 219.314 55.8987 218.205 54.192C217.138 52.4853 216.605 50.416 216.605 47.984C216.605 46.064 216.946 44.3787 217.629 42.928C218.312 41.4347 219.272 40.1973 220.509 39.216C221.789 38.2347 223.304 37.488 225.053 36.976C226.802 36.464 228.765 36.208 230.941 36.208C233.032 36.208 234.973 36.4427 236.765 36.912V35.12C236.765 33.84 237.213 32.7733 238.109 31.92C239.005 31.0667 240.242 30.64 241.821 30.64H247.645V37.552H239.709V38.128C241.501 39.0667 242.888 40.368 243.869 42.032C244.893 43.6533 245.405 45.6373 245.405 47.984C245.405 49.904 245.064 51.5893 244.381 53.04C243.698 54.4907 242.717 55.728 241.437 56.752C240.157 57.7333 238.621 58.48 236.829 58.992C235.08 59.504 233.117 59.76 230.941 59.76C229.96 59.76 229.021 59.7173 228.125 59.632C227.229 59.504 226.376 59.3333 225.565 59.12C225.096 59.376 224.69 59.696 224.349 60.08C224.05 60.464 223.901 60.9547 223.901 61.552C223.901 62.064 224.029 62.4693 224.285 62.768C224.541 63.0667 224.882 63.3013 225.309 63.472C225.778 63.6 226.312 63.6853 226.909 63.728C227.506 63.7707 228.125 63.792 228.765 63.792H236.317C238.664 63.792 240.669 64.0267 242.333 64.496C243.997 64.9653 245.362 65.6267 246.429 66.48C247.496 67.3333 248.264 68.336 248.733 69.488C249.202 70.64 249.437 71.92 249.437 73.328ZM240.477 74.032C240.477 73.1787 240.136 72.496 239.453 71.984C238.77 71.5147 237.469 71.28 235.549 71.28H224.221C223.368 72.0053 222.941 72.9013 222.941 73.968C222.941 74.992 223.368 75.824 224.221 76.464C225.117 77.1467 226.61 77.488 228.701 77.488H234.269C236.445 77.488 238.024 77.1893 239.005 76.592C239.986 75.9947 240.477 75.1413 240.477 74.032ZM230.941 53.744C232.861 53.744 234.248 53.2747 235.101 52.336C235.997 51.3973 236.445 50.2027 236.445 48.752V47.216C236.445 45.7653 235.997 44.5707 235.101 43.632C234.248 42.6933 232.861 42.224 230.941 42.224C229.064 42.224 227.698 42.6933 226.845 43.632C225.992 44.5707 225.565 45.7653 225.565 47.216V48.752C225.565 50.2027 225.992 51.3973 226.845 52.336C227.698 53.2747 229.064 53.744 230.941 53.744ZM270.596 70.768C265.049 70.768 260.847 69.232 257.988 66.16C255.129 63.088 253.7 58.9067 253.7 53.616C253.7 50.928 254.063 48.5173 254.788 46.384C255.556 44.208 256.623 42.3733 257.988 40.88C259.396 39.344 261.081 38.192 263.044 37.424C265.049 36.6133 267.289 36.208 269.764 36.208C272.239 36.208 274.457 36.6133 276.42 37.424C278.383 38.192 280.047 39.3013 281.412 40.752C282.777 42.2027 283.823 43.9733 284.548 46.064C285.316 48.112 285.7 50.416 285.7 52.976V55.792H263.108V56.368C263.108 58.5013 263.769 60.2293 265.092 61.552C266.415 62.832 268.356 63.472 270.916 63.472C272.879 63.472 274.564 63.1093 275.972 62.384C277.38 61.616 278.596 60.6133 279.62 59.376L284.74 64.944C283.46 66.5227 281.668 67.888 279.364 69.04C277.06 70.192 274.137 70.768 270.596 70.768ZM269.828 42.992C267.78 42.992 266.137 43.632 264.9 44.912C263.705 46.1493 263.108 47.8347 263.108 49.968V50.48H276.42V49.968C276.42 47.792 275.823 46.0853 274.628 44.848C273.476 43.6107 271.876 42.992 269.828 42.992ZM293.035 70V36.976H302.507V42.992H302.891C303.275 42.0533 303.744 41.1787 304.299 40.368C304.854 39.5573 305.515 38.8533 306.283 38.256C307.094 37.616 308.011 37.1253 309.035 36.784C310.102 36.4 311.296 36.208 312.619 36.208C314.198 36.208 315.648 36.4853 316.971 37.04C318.294 37.552 319.424 38.3413 320.363 39.408C321.302 40.4747 322.027 41.776 322.539 43.312C323.094 44.848 323.371 46.6187 323.371 48.624V70H313.899V49.904C313.899 45.6373 312.043 43.504 308.331 43.504C307.606 43.504 306.88 43.6107 306.155 43.824C305.472 43.9947 304.854 44.2933 304.299 44.72C303.744 45.104 303.296 45.5947 302.955 46.192C302.656 46.7893 302.507 47.4933 302.507 48.304V70H293.035Z"
              fill="black"
            />
          </svg>
        </a>

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
