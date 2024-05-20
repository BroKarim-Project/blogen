import { useRef, useState, useEffect } from 'react';

//disini masukin api
const Api_key = 'cf9c3104122beb4529017d858c45b324';

const ShowWeather = () => {
  const inputRef = useRef(null);
  const [apiData, setApiData] = useState(null);
  const [showWeather, setShowWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  const WeatherTypes = [
    {
      type: 'Clear',
      img: 'https://cdn-icons-png.flaticon.com/512/6974/6974833.png',
    },
    {
      type: 'Rain',
      img: 'https://cdn-icons-png.flaticon.com/512/3351/3351979.png',
    },
    {
      type: 'Snow',
      img: 'https://cdn-icons-png.flaticon.com/512/642/642102.png',
    },
    {
      type: 'Clouds',
      img: 'https://cdn-icons-png.flaticon.com/512/414/414825.png',
    },
    {
      type: 'Haze',
      img: 'https://cdn-icons-png.flaticon.com/512/1197/1197102.png',
    },
    {
      type: 'Smoke',
      img: 'https://cdn-icons-png.flaticon.com/512/4380/4380458.png',
    },
    {
      type: 'Mist',
      img: 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png',
    },
    {
      type: 'Drizzle',
      img: 'https://cdn-icons-png.flaticon.com/512/3076/3076129.png',
    },
  ];

  const fetchWeather = async () => {
    const location = inputRef.current.value || 'Indonesia';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${Api_key}`;
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setApiData(null);
        if (data.cod == 404 || data.cod == 400) {
          // ARRAY OF OBJ
          setShowWeather([
            {
              type: 'Not Found',
              img: 'https://cdn-icons-png.flaticon.com/512/4275/4275497.png',
            },
          ]);
        }
        setShowWeather(WeatherTypes.filter((weather) => weather.type === data.weather[0].main));
        console.log(data);
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  //tanpa ini data ccuaca indonesia tidak akan langsung ditampilkan sebelum tombol ditekan
  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <>
      <div className="bg-white border-[0.5px] border-[#f7f7f7] mb-1  block px-2  rounded-md  relative  md:w-full ">
        <div className="w-full   flex items-center">
          {' '}
          <input
            type="text"
            ref={inputRef}
            placeholder="Indonesia"
            className="text-base border-b
          p-1   flex-1 bg-transparent"
          />
          <button onClick={fetchWeather}>
            <svg width="64px" height="64px" className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{' '}
              </g>
            </svg>
          </button>
        </div>
        <hr className="w-full border-black border" />
        <div className="block">
          <div className="flex justify-between items-center h-full">
            {loading ? (
              <div className="grid place-items-center h-full">
                <img src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png" alt="..." className="w-14 mx-auto mb-2 animate-spin" />
              </div>
            ) : (
              showWeather && (
                <div className="text-center flex justify-between items-center my-2 gap-6 ">
                  {apiData && <p className="text-base font-medium">{apiData?.name + ' ' + apiData?.sys?.country}</p>}
                  <div>
                    <img src={showWeather[0]?.img} alt="..." className="w-10 mx-auto" />
                    <h3 className="text-base font-medium text-zinc-800">{showWeather[0]?.type}</h3>
                  </div>

                  {apiData && (
                    <>
                      <div className="flex justify-center items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/7794/7794499.png" alt="..." className="h-9 mt-1" />
                        <h2 className="text-base font-medium">{apiData?.main?.temp}&#176;C</h2>
                      </div>
                    </>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowWeather;
