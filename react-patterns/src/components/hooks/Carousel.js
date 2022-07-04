import { useEffect, useState } from "react";
const brands = [
  {
    name: "Apple",
    country: "USA"
  },
  {
    name: "Microsoft",
    country: "USA"
  },
  {
    name: "Tata Group",
    country: "India"
  },
  {
    name: "Reliance",
    country: "India"
  },
  {
    name: "Google",
    country: "USA"
  }
];
const Carousel = () => {
  const [previous, setPreviuos] = useState(null);
  const [current, setCurrent] = useState(null);
  const [timerId, setTimerId] = useState(null);
  const [viewData, setViewData] = useState(null);

  useEffect(() => {
    setViewData(brands[0]);
  }, []);

  const intiate = () => {
    if (timerId) clearTimeout(timerId);
    const tempTimerId = setTimeout(() => {}, 500);
  };
  return (
    <div>
      <p>Name: {viewData?.name}</p>
      <p>country: {viewData?.name}</p>
    </div>
  );
};

export default Carousel;
