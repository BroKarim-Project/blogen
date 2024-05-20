import ShowWeather from './weather';
import SocialMedia from './socialMedia';
import { stockData } from '../data/data';
import { Comment, Clock } from '../data/svgStock';

export default function Hero() {
  return (
    <>
      <div className=" hero flex flex-col md:flex-row gap-[2px] overflow-hidden   md:py-6    p-4  ">
        <div className="w-full group  block md:mt-0 mt-2  md:w-[49%]   rounded-lg ">
          <div className="relative px-2">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1569091791842-7cfb64e04797?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="absolute inset-0 h-full w-full object-cover rounded-lg"
            />
            <div class="absolute inset-0  rounded-lg bg-white/50 sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
            <div class="relative  sm:p-6 lg:p-8">
              <div className="flex gap-4">
                <p class="text-xs font-medium uppercase tracking-widest text-pink-500 underline decoration-pink-500">Startup</p>
                <p class="text-xs font-medium uppercase tracking-widest text-pink-500 underline decoration-pink-500">Productivity</p>
              </div>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 ">
                <p className="text-2xl font-bold mb-6 text-black">
                  Unpopular Opinion: It’s <span className="font-extrabold p-1 bg-rose-700"> harder </span> than ever to be a good software engineer
                </p>
                <p className="text-sm text-black">
                  2t for almost a decade has given me privileged access to a fast-paced culture of innovation, exploration, and a fail-fast approach.{' '}
                  <span className="block py-2">I followed the standard progression ladder: intern, junior, mid, senior, and eventually moved to the engineering management track.</span>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="  md:w-[51%] w-full md:flex md:flex-col gap-[2px] ">
          <div className="  w-full   flex gap-[2px] ">
            <article class="relative rounded-lg h-full  transition hover:shadow-lg  my-1 md:my-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="absolute inset-0 h-full w-full object-cover rounded-lg"
              />
              <div class="absolute w-full h-full   rounded-lg "></div>
              <div class="relative z-10 p-4 sm:p-6">
                <div className="flex gap-4 ">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500 underline decoration-pink-500">Startup</p>
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500 underline decoration-pink-500">Productivity</p>
                </div>
                <div class=" mt-32 md:mt-28 ">
                  <time datetime="2022-10-10" class="block text-xs text-black">
                    {' '}
                    10th Oct 2022{' '}
                  </time>

                  <a href="#">
                    <h3 class="mt-0.5 text-lg text-black">Free 10 Mac Apps That You Didn’t Know You Needed</h3>
                  </a>

                  <div className=" flex gap-2 mt-4">
                    <div className="inline-flex gap-2 items-center text-xs">
                      <Comment />
                      20
                    </div>
                    <div className="inline-flex gap-2 items-center text-xs">
                      <Clock />4 min read
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article class="relative overflow-hidden rounded-md h-full  w-full">
              <div class="absolute inset-0  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
              <div class="relative z-10 p-4 sm:p-6">
                <div className="flex gap-4 ">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500 underline decoration-pink-500">Code</p>
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500 underline decoration-pink-500">Journalis</p>
                </div>
                <div class="  mt-8">
                  <a href="#">
                    <h3 class="mt-0.5 text-lg text-black">
                      How to Make a Programming Journal: A<span className="bg-[#e6cfb9] font-extrabold p-1 ">Guide</span>
                      for Coders
                    </h3>
                  </a>

                  <p class="mt-2  text-[10px] text-black">
                    In the fast-paced world of software development, keeping a programming journal can be a game-changer.{' '}
                    <span className="block pt-2">
                      It’s not just a diary; it’s a tool for growth, reflection, and problem-solving. Whether you’re a seasoned developer or just starting out, a programming journal can help you track your learning journey, debug
                      efficiently, and consolidate knowledge.
                    </span>{' '}
                  </p>
                </div>
                <div class="flex items-center mt-2 ">
                  <img
                    class="w-10 h-10 rounded-full mr-4"
                    src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Avatar of Writer"
                  />
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">Rafael Martin</p>
                    <p class="text-gray-600">Aug 9</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-2 w-[800px] md:w-full md:h-[150px] lg:h-[200px] gap-[2px]">
            <div className="flex flex-col  w-full">
              <ShowWeather />
              <SocialMedia />
            </div>
            <div className="w-[400px]  grid grid-cols-2 gap-1 grid-rows-2 relative  sm:w-[400px] md:w-full h-[190px]">
              {stockData.map((item) => (
                <div className="w-full bg-[#f7fafa] py-2 px-4 rounded-md">
                  <div className="rounded-lg">
                    <div className="flex justify-between items-center w-full">
                      {item.svg}
                      <p className="text-xs text-green-500">{item.chartValue}</p>
                    </div>
                    <div className="pt-2 flex flex-col justify-center items-center">
                      <h3 className="text-xl font-semibold text-gray-700">{item.value}</h3>
                      <h4 className="text-[10px] uppercase text-gray-500">{item.stockName}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
