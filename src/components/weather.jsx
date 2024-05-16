import { useRef, useState } from 'react';

//disini masukin api
const Api_key = '';

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

  return (
    <>
      <div className="w-[340px] bg-blue-400 block px-2  relative sm:w-[400px] md:w-1/2 h-1/2">
        <div className="w-full border-b flex items-start mb-2 border-black">Japan</div>
        <div className="flex justify-between ">
          <p className="text-sm font-medium ">sunny</p>
          <img src="https://cdn-icons-png.flaticon.com/512/3076/3076129.png" className="w-16" alt="" />
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="font-bold text-xl">31C</h2>
          <p className="text-sm font-medium ">Celcius</p>
        </div>
      </div>
    </>
  );
};

export default ShowWeather;
