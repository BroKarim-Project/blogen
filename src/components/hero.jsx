import ShowWeather from './weather';
import SocialMedia from './socialMedia';
import Line from './../../public/Line.svg';

export default function Hero() {
  return (
    <>
      <div className="flex justify-center overflow-hidden mt-12 h-screen  md:justify-between px-10 bg-white">
        <div className="flex flex-col md:flex-row gap-[2px]">
          {/* left */}
          <div className="w-full group relative block h-[320px] md:w-[49%] md:h-[400px] rounded-md lg:h-[470px]">
            {/* card 1 */}
            <div className="relative">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1569091791842-7cfb64e04797?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="absolute inset-0 h-full w-full object-cover  transition-opacity rounded-md"
              />
              <div class="absolute inset-0 bg-white/50  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
              <div class="relative  p-4 sm:p-6 lg:p-8">
                <div className="flex gap-4">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500 underline decoration-pink-500">Startup</p>
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500 underline decoration-pink-500">Productivity</p>
                </div>

                <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                <div className="mt-32 sm:mt-48 ">
                  <p className="text-2xl font-bold mb-6 text-black">
                    Unpopular Opinion: It’s <span className="font-extrabold px-1 py-1 bg-rose-700"> harder </span> than ever to be a good software engineer
                  </p>
                  <p className="text-sm text-black">
                    Working in a startup environment for almost a decade has given me privileged access to a fast-paced culture of innovation, exploration, and a fail-fast approach.{' '}
                    <span className="block py-2">I followed the standard progression ladder: intern, junior, mid, senior, and eventually moved to the engineering management track.</span>{' '}
                  </p>
                  <div class=" transform transition-all translate-y-8 opacity-100"></div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}

          <div className="w-full  h-[320px] md:w-[51%] md:h-[400px] lg:h-[470px]   flex md:flex-col gap-[2px] ">
            <div className=" w-[400px] md:w-full h-full md:h-[248px] lg:h-[298px] gap-[2px] ">
              {/* second card */}
              <div className="w-[340px] relative sm:w-[400px] h-full md:w-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="absolute inset-0 h-full w-full object-cover   transition-opacity rounded-md"
                />
                <div class="absolute inset-0 bg-white/50  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                <div class="relative p-4 sm:p-6 lg:p-8">
                  <div className="flex gap-4">
                    <p class="text-sm font-medium uppercase tracking-widest text-pink-500 underline decoration-pink-500">Technology</p>
                    <p class="text-sm font-medium uppercase tracking-widest text-pink-500 underline decoration-pink-500">Productivity</p>
                  </div>

                  <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                  <div className="mt-10">
                    <h2 className="text-xl font-bold mb-8 text-black sm:text-2xl">Free 10 Mac Apps That You Didn’t Know You Needed</h2>
                    <p class="text-sm text-black">
                      If you’re anything like me, you live for those productivity-boosting, problem-solving apps that make your digital life a breeze.{' '}
                      <span className="block py-2">I mean, let’s be real, we spend more time with our Macs than some of our own family — so we might as well load them up with the best darn apps out there.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 w-[800px] md:w-full md:h-[150px] lg:h-[200px] gap-[2px]">
              {/* third image */}
              <div className="flex flex-col  w-full">
                <ShowWeather />
                <SocialMedia />
              </div>

              {/* fourth image */}
              <div className="w-[400px]  grid grid-cols-2 gap-1 grid-rows-2 relative  sm:w-[400px] md:w-full h-full">
                <div class="w-full bg-[#f7fafa] py-2 px-4 rounded-md">
                  <div class="relative  rounded-lg ">
                    <div className="flex justify-between items-center w-full">
                      <svg width="24" height="24" viewBox="0 0 62 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M59.9273 1.49278L60.6359 4.50463L58.4114 4.83064L53.4117 3.56044L54.1462 6.1234L52.1571 6.19236L51.3215 9.20797L48.285 8.3177L43.8361 8.96973L42.3461 11.8587L38.2621 10.0092L32.7916 9.2531L34.2605 14.379L32.4809 14.6398L33.2154 17.2028L29.7339 16.3777L23.4796 17.7394L25.2616 21.2616L20.2619 19.9914L16.6769 20.9619L16.7311 23.8471L12.0444 20.9732L12.753 23.9851L8.74899 24.5719L8.38416 27.0734L5.24167 24.1957L1.8403 25.807L4.61796 31.1862"
                          stroke="#16A34A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p class="text-xs  text-green-500">▲ 8.2%</p>
                    </div>
                    <div class="relative pt-2 flex flex-col justify-center items-center">
                      <h3 class=" text-xl font-semibold  text-gray-700">8,028</h3>
                      <h4 class="text-[10px] uppercase  text-gray-500">GHST/usd</h4>
                    </div>
                  </div>
                </div>
                <div class="w-full bg-[#f7fafa] py-2   px-4 rounded-md">
                  <div class="relative  rounded-lg ">
                    <div className="flex justify-between items-center w-full">
                      <svg width="24" height="24" viewBox="0 0 100 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M98.0163 4.64245L97.5111 7.695L95.3325 7.13975L91.2069 4.0431L90.8983 6.6913L89.0359 5.9894L87.104 8.4511L84.6441 6.46071L80.287 5.35022L77.7998 7.44316L74.7422 4.16428L69.9842 1.36093L69.3671 6.65733L67.6242 6.21313L67.3156 8.86132L64.42 6.75988L58.1233 5.60954L58.4124 9.54623L54.2867 6.44959L50.6044 5.96555L49.5439 8.64935L46.3244 4.19301L45.8192 7.24555L41.8978 6.24611L40.5983 8.41451L38.8054 4.54901L35.0459 4.72702L35.5393 10.7609L32.3698 9.72586L33.804 12.8183L29.2503 12.1121L29.6241 17.8883L27.9312 20.8654L25.1974 19.9414L19.9961 14.5255L19.8918 19.2709L16.8342 15.992L14.3547 20.5865L13.0399 17.7518L10.0671 16.3124L11.8599 20.1779L10.969 26.5407L8.34712 23.3728L6.28047 20.5737L6.16857 22.8176L2.16241 19.9786L1.53766 22.7735L2.50908 29.8382"
                          stroke="#16A34A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p class="text-xs  text-green-500">▲ 4.4%</p>
                    </div>
                    <div class="relative pt-2 flex flex-col justify-center items-center">
                      <h3 class=" text-xl font-semibold  text-gray-700">8,028</h3>
                      <h4 class="text-[10px] uppercase  text-gray-500">GHST/usd</h4>
                    </div>
                  </div>
                </div>
                <div class="w-full bg-[#f7fafa] py-2  px-4 rounded-md">
                  <div class="relative  rounded-lg ">
                    <div className="flex justify-between items-center w-full">
                      <svg width="24" height="24" viewBox="0 0 95 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M93.3432 34.15L90.4 31.8248L87.4568 36.4751L83.7778 30.0809L72.7407 22.524L69.7975 30.0809L64.6469 20.7801L58.0247 16.711L53.6099 20.7801L51.4025 9.73546L47.7234 14.9671L41.1012 9.73546L36.6864 12.6419V3.92248L29.3284 1.01599L24.9136 12.6419L19.7629 7.99156V14.9671L11.6691 9.73546L7.25432 20.7801L1.36789 24.8492"
                          stroke="#16A34A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p class="text-xs  text-green-500">▲ 3.6%</p>
                    </div>
                    <div class="relative pt-2 flex flex-col justify-center items-center">
                      <h3 class=" text-xl font-semibold  text-gray-700">8,028</h3>
                      <h4 class="text-[10px] uppercase  text-gray-500">GHST/usd</h4>
                    </div>
                  </div>
                </div>
                <div class="w-full bg-[#fdf5f5] py-2  px-4 rounded-md">
                  <div class="relative  rounded-lg ">
                    <div className="flex justify-between items-center w-full">
                      <svg width="24" height="24" viewBox="0 0 95 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M93.3432 34.15L90.4 31.8248L87.4568 36.4751L83.7778 30.0809L72.7407 22.524L69.7975 30.0809L64.6469 20.7801L58.0247 16.711L53.6099 20.7801L51.4025 9.73546L47.7234 14.9671L41.1012 9.73546L36.6864 12.6419V3.92248L29.3284 1.01599L24.9136 12.6419L19.7629 7.99156V14.9671L11.6691 9.73546L7.25432 20.7801L1.36789 24.8492"
                          stroke="#DC2626"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p class="text-xs  text-red-500">&#8856; 3.6%</p>
                    </div>
                    <div class="relative pt-2 flex flex-col justify-center items-center">
                      <h3 class=" text-xl font-semibold  text-gray-700">8,028</h3>
                      <h4 class="text-[10px] uppercase  text-gray-500">GHST/usd</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*



*/
