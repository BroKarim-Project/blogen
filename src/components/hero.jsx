import ShowWeather from './weather';
import SocialMedia from './socialMedia';

export default function Hero() {
  return (
    <>
      <div className="flex justify-center h-full md:justify-between px-10 bg-white">
        <div className="flex flex-col md:flex-row gap-[2px]">
          {/* left */}
          <div className="w-full group relative block h-[320px] md:w-[49%] md:h-[400px] rounded-md lg:h-[470px]">
            {/* card 1 */}
            <div>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1614607660006-945b019c188a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="absolute inset-0 h-full w-full object-cover  transition-opacity rounded-md"
              />
              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                <div class="mt-32 sm:mt-48 ">
                  <p class="text-7xl font-bold mb-10 text-black">Lorem ipsum </p>
                  <p class="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
                  <div class=" transform transition-all translate-y-8 opacity-100"></div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}

          <div className="w-full  h-[320px] md:w-[51%] md:h-[400px] lg:h-[470px] overflow-x-scroll md:overflow-hidden flex md:flex-col gap-[2px] ">
            <div className=" w-[400px] md:w-full h-full md:h-[248px] lg:h-[298px] gap-[2px] ">
              {/* second card */}
              <div className="w-[340px] relative sm:w-[400px] h-full md:w-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1585919269458-6259dfe9f21a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="absolute inset-0 h-full w-full object-cover  transition-opacity rounded-md"
                />
                <div class="relative p-4 sm:p-6 lg:p-8">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                  <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                  <div class="mt-20">
                    <div class=" transform transition-all translate-y-8 opacity-100">
                      <p class="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
                    </div>
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
              <div className="w-[400px]  grid grid-cols-2 gap-1 grid-rows-2 relative sm:w-[400px] md:w-full h-full">
                <div class="w-full bg-[#e8f7f7] flex items-center justify-center  px-2 rounded-md">
                  <div class="relative overflow-hidden rounded-lg flex flex-col ">
                    <div class="relative z-10 px-3 py-2 text-center">
                      <h4 class="text-[10px] uppercase  text-gray-500">Comments</h4>
                      <h3 class=" text-xl font-semibold  text-gray-700">8,028</h3>
                      <p class="text-xs  text-green-500">▲ 8.2%</p>
                    </div>
                    <div class="absolute inset-x-0 bottom-0">
                      <canvas id="chart3" height="70"></canvas>
                    </div>
                  </div>
                </div>
                <div class="w-full bg-[#e8f7f7]  px-2 rounded-md flex items-center justify-center">
                  <div class="relative overflow-hidden rounded-lg ">
                    <div class="relative z-10 px-3 py-2 text-center">
                      <h4 class="text-[10px] uppercase leading-tight text-gray-500">Comments</h4>
                      <h3 class=" text-xl font-semibold leading-tight text-gray-700">8,028</h3>
                      <p class="text-xs leading-tight text-green-500">▲ 8.2%</p>
                    </div>
                    <div class="absolute inset-x-0 bottom-0">
                      <canvas id="chart3" height="70"></canvas>
                    </div>
                  </div>
                </div>
                <div class="w-full bg-[#e8f7f7]  px-2 rounded-md flex items-center justify-center">
                  <div class="relative overflow-hidden rounded-lg flex flex-col justify-center items-center">
                    <div class="relative z-10 px-3 py-2 text-center">
                      <h4 class="text-[10px] uppercase leading-tight text-gray-500">Comments</h4>
                      <h3 class=" text-xl font-semibold leading-tight text-gray-700">8,028</h3>
                      <p class="text-xs leading-tight text-green-500">▲ 8.2%</p>
                    </div>
                    <div class="absolute inset-x-0 bottom-0">
                      <canvas id="chart3" height="70"></canvas>
                    </div>
                  </div>
                </div>
                <div class="w-full bg-[#f3d7d7]  px-2 rounded-md flex items-center justify-center">
                  <div class="relative overflow-hidden rounded-lg flex flex-col justify-center items-center">
                    <div class="relative z-10 px-3 py-2 text-center">
                      <h4 class="text-[10px] uppercase leading-tight text-gray-500">Comments</h4>
                      <h3 class=" text-xl font-semibold leading-tight text-gray-700">8,028</h3>
                      <p class="text-xs leading-tight text-green-500">▲ 8.2%</p>
                    </div>
                    <div class="absolute inset-x-0 bottom-0">
                      <canvas id="chart2" height="70"></canvas>
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
