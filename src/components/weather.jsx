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
      <div className="w-[340px] bg-[#e7e6d5] block px-2  rounded-md  relative  md:w-full ">
        <div className="w-full   flex items-start">
          {' '}
          <input
            type="text"
            ref={inputRef}
            placeholder="Indonesia"
            className="text-base border-b
          p-1   flex-1 bg-transparent"
          />
          <button onClick={fetchWeather}>
            <img src="https://cdn-icons-png.flaticon.com/512/758/758651.png" alt="..." className="w-6" />
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
                  {apiData && <p className="text-base font-semibold">{apiData?.name + ' ' + apiData?.sys?.country}</p>}
                  <div>
                    <img src={showWeather[0]?.img} alt="..." className="w-10 mx-auto" />
                    <h3 className="text-base font-bold text-zinc-800">{showWeather[0]?.type}</h3>
                  </div>

                  {apiData && (
                    <>
                      <div className="flex justify-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/7794/7794499.png" alt="..." className="h-9 mt-1" />
                        <h2 className="text-base font-extrabold">{apiData?.main?.temp}&#176;C</h2>
                      </div>
                    </>
                  )}
                </div>
              )
            )}
          </div>
          {/* <div className="flex gap-2  items-center">
            <h2 className="font-bold text-xl">31C</h2>
            <p className="text-sm font-medium ">Celcius</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ShowWeather;
