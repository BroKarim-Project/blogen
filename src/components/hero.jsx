import ShowWeather from "./weather";

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
                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                class="absolute inset-0 h-full w-full object-cover  transition-opacity rounded-md"
              />
              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div class=" transform transition-all translate-y-8 opacity-100">
                    <p class="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full  h-[320px] md:w-[51%] md:h-[400px] lg:h-[470px] overflow-x-scroll md:overflow-hidden flex md:flex-col gap-[2px] ">
            <div className=" w-[400px] md:w-full h-full md:h-[248px] lg:h-[298px] gap[2px] ">
              {/* second card */}
              <div className="w-[340px] relative sm:w-[400px] h-full md:w-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
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

            <div className="flex w-[800px] md:w-full md:h-[150px] lg:h-[200px] gap-[2px]">
              {/* third image */}
              <ShowWeather/>
              {/* fourth image */}
              <div className="w-[340px] relative sm:w-[400px] md:w-1/2 h-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  class="absolute inset-0 h-full w-full object-cover  transition-opacity rounded-md"
                />
                <div class="relative p-4 sm:p-6 lg:p-8">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                  <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                  <div class="">
                    <div class=" transform transition-all translate-y-8 opacity-100">
                      <p class="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
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
