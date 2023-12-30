import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function BestSeller() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("products.json");
        setProducts(response.data);
      } catch {
        setError(error.message);
      }
    };
    fetchData();
  }, [error]);
  // console.log(products)
  const bestSeller = products.filter((item) => item.status === "Best Sellers");
  // console.log(bestSeller);
  return (
    <div className="max-w-screen-2xl container mx-auto  xl:px-28 px-4 bg-green-100">
      <div className="text-center">
        <h2 className="text-3xl font-semibold capitalize text-center py-8">Best Seller</h2>
        <p className="text-black/75 capitalize mx-auto md:w-2/3 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          placeat nemo facilis. Repellat esse vel ducimus quaerat laudantium ab
          illum officiis, non ut, tempora fugit?
        </p>
      </div>
      {/* Best Seller Card Products */}
      <div className="mb-16 mt-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSeller.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/${item.category}/${item.id}`}>
                <img
                  src={item.image}
                  alt=""
                  className="mx-auto w-full hover:scale-105 transition-all duration-300"
                />
              </Link>
              <div className="mt-4 px-4">
                <h4 className="text-base font-semibold mb-2">{item.title}</h4>
              </div>
              <div className="flex justify-between">
                <p className="text-black/50">{item.category}</p>
                <p className="font-semibold">{item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BestSeller;
