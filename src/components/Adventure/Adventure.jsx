import Sun from "../../assets/images/adventuresun.svg";
import Mountain from "../../assets/images/mountain.svg";
import Snow from "../../assets/images/snow.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useRef } from "react";

export const Adventure = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <section className="text-[#FCFCFD] pt-14 pb-[136px]">
      <div className="container">
        <h2 className="font-dmsans text-center text-5xl leading-[56px] mb-3">
          Let’s go on an adventure
        </h2>
        <p className="text-center text-[#777E90] text-2xl mb-12">
          Find and book a great experience.
        </p>
        <ul className="flex gap-8 mb-12">
          <Splide
            className="w-full"
            options={{
              type: "loop",
              autoplay: true,
              arrows: {
                prev: {},
                next: {},
              },
              pagination: false,
              drag: true,
              perMove: 1,
              perPage: 3,
              autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: 0.5,
              },
            }}
          >
            <SplideSlide className="flex items-center gap-4">
              <img src={Sun} width={160} height={160} alt="" />
              <div className="max-w-[136px]">
                <h3 className="text-base font-medium mb-2">
                  Luxury resort at the sea
                </h3>
                <strong className="inline-block pt-2 px-3 pb-1.5 rounded-full text-xs leading-3 bg-[#353945] text-[#E6E8EC]">
                  9,326 places
                </strong>
              </div>
            </SplideSlide>
            <SplideSlide className="flex items-center gap-4">
              <img src={Mountain} width={160} height={160} alt="" />
              <div className="max-w-[136px]">
                <h3 className="text-base font-medium mb-2">
                  Camping amidst the wild
                </h3>
                <strong className="inline-block pt-2 px-3 pb-1.5 rounded-full text-xs leading-3 bg-[#353945] text-[#E6E8EC]">
                  9,326 places
                </strong>
              </div>
            </SplideSlide>
            <SplideSlide className="flex items-center gap-4">
              <img src={Snow} width={160} height={160} alt="" />
              <div className="max-w-[136px]">
                <h3 className="text-base font-medium mb-2">
                  Luxury resort at the sea
                </h3>
                <strong className="inline-block pt-2 px-3 pb-1.5 rounded-full text-xs leading-3 bg-[#353945] text-[#E6E8EC]">
                  9,326 places
                </strong>
              </div>
            </SplideSlide>
          </Splide>
        </ul>
        <div className="flex justify-center gap-2">
          <button
            className="hover:border-[#353945] border-2 rounded-full border-transparent w-10 h-10 flex justify-center items-center "
            type="button"
            ref={prevRef}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.90906 7.26521C9.50324 6.8906 8.87058 6.9159 8.49597 7.32172L5.2652 10.8217C4.9116 11.2047 4.9116 11.7952 5.26519 12.1782L8.49597 15.6783C8.87057 16.0841 9.50323 16.1094 9.90905 15.7348C10.3149 15.3602 10.3402 14.7276 9.96558 14.3217L8.28397 12.5L18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5L8.284 10.5L9.96557 8.67829C10.3402 8.27247 10.3149 7.63981 9.90906 7.26521Z"
                fill="#777E91"
              />
            </svg>
          </button>
          <button
            className="hover:border-[#353945] border-2 rounded-full border-transparent w-10 h-10 flex justify-center items-center"
            type="button"
            ref={nextRef}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.091 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6.00001 12.5C5.44772 12.5 5.00001 12.0523 5.00001 11.5C5.00001 10.9477 5.44772 10.5 6.00001 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.091 7.26521Z"
                fill="#777E91"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
