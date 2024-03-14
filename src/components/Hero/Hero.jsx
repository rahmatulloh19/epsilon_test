export const Hero = () => {
  return (
    <section className="hero pb-20">
      <div className="container">
        <div className="max-w-[435px] mb-36 text-[#23262F] pt-[145px]">
          <h1 className="font-dmsans text-8xl mb-4 -tracking-[0.02em]">
            Air, sleep, dream
          </h1>
          <p className="text-2xl -tracking-[0.02em] mb-6">
            Find and book a great experience.
          </p>
          <a
            className="text-[#FCFCFD] py-4 px-6 leading-4 text-base bg-[#3B71FE] rounded-full inline-block"
            href="/"
          >
            Start your search
          </a>
        </div>
        <div className="hero__list p-10 rounded-3xl text-[#FCFCFD]">
          <ul className="flex gap-12 font-dmsans text-sm leading-4 border-b border-[#777e904c] mb-6">
            <li>
              <label className="">
                <input
                  className="hidden"
                  type="radio"
                  name="hero_types"
                  defaultChecked
                />
                <span className="flex flex-col relative after:top-full  after:content-[''] after:w-full cursor-pointer after:absolute after:h-0.5 pb-[30px] transition after:transition text-[#B1B5C3]">
                  Stays
                </span>
              </label>
            </li>
            <li>
              <label className="">
                <input className="hidden" type="radio" name="hero_types" />
                <span className="flex flex-col relative after:top-full  after:content-[''] after:w-full cursor-pointer after:absolute after:h-0.5 pb-[30px] transition after:transition text-[#B1B5C3]">
                  Flights
                </span>
              </label>
            </li>
            <li>
              <label className="">
                <input className="hidden" type="radio" name="hero_types" />
                <span className="flex flex-col relative after:top-full  after:content-[''] after:w-full cursor-pointer after:absolute after:h-0.5 pb-[30px] transition after:transition text-[#B1B5C3]">
                  Cars
                </span>
              </label>
            </li>
            <li>
              <label className="">
                <input className="hidden" type="radio" name="hero_types" />
                <span className="flex flex-col relative after:top-full  after:content-[''] after:w-full cursor-pointer after:absolute after:h-0.5 pb-[30px] transition after:transition text-[#B1B5C3]">
                  Things to do
                </span>
              </label>
            </li>
          </ul>
          <ul className="flex">
            <li className="flex gap-3 pe-16 p-5">
              <div className="w-8 h-8 flex items-center justify-content-center">
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
                    d="M18.2527 2.47824C20.3133 1.61966 22.3806 3.68688 21.522 5.74747L15.5985 19.9639C14.44 22.7442 10.3652 22.2743 9.87004 19.3033L9.13103 14.8692L4.69694 14.1302C1.72596 13.635 1.25602 9.56021 4.0363 8.40176L18.2527 2.47824ZM19.6758 4.97824C19.8475 4.56612 19.4341 4.15268 19.022 4.32439L4.80553 10.2479C3.87877 10.6341 4.03541 11.9923 5.02574 12.1574L9.45982 12.8964C10.3028 13.0369 10.9633 13.6974 11.1038 14.5404L11.8428 18.9745C12.0079 19.9648 13.3661 20.1214 13.7523 19.1947L19.6758 4.97824Z"
                    fill="#777E91"
                  />
                </svg>
              </div>

              <div>
                <h2 className="font-semibold text-2xl">Location</h2>
                <p className="text-base text-[#777E90]">Where are you going?</p>
              </div>
            </li>
            <li className="flex gap-3 p-5">
              <div className="w-8 h-8 flex items-center justify-content-center">
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
                    d="M19 6H5C4.44772 6 4 6.44772 4 7V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V7C20 6.44771 19.5523 6 19 6ZM5 4C3.34315 4 2 5.34315 2 7V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V7C22 5.34315 20.6569 4 19 4H5Z"
                    fill="#777E91"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 12C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14H17C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12H10ZM7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H7Z"
                    fill="#777E91"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 2C6.44772 2 6 2.44772 6 3V7C6 7.55228 6.44772 8 7 8C7.55228 8 8 7.55228 8 7V3C8 2.44772 7.55228 2 7 2ZM17 2C16.4477 2 16 2.44772 16 3V7C16 7.55228 16.4477 8 17 8C17.5523 8 18 7.55228 18 7V3C18 2.44772 17.5523 2 17 2Z"
                    fill="#777E91"
                  />
                </svg>
              </div>

              <div className="w-[136px]">
                <h2 className="font-semibold text-2xl">Check in</h2>
                <p className="text-base text-[#777E90]">Add date</p>
              </div>
            </li>
            <li className="flex gap-3 p-5">
              <div className="w-8 h-8 flex items-center justify-content-center">
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
                    d="M19 6H5C4.44772 6 4 6.44772 4 7V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V7C20 6.44771 19.5523 6 19 6ZM5 4C3.34315 4 2 5.34315 2 7V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V7C22 5.34315 20.6569 4 19 4H5Z"
                    fill="#777E91"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 12C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14H17C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12H10ZM7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H7Z"
                    fill="#777E91"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 2C6.44772 2 6 2.44772 6 3V7C6 7.55228 6.44772 8 7 8C7.55228 8 8 7.55228 8 7V3C8 2.44772 7.55228 2 7 2ZM17 2C16.4477 2 16 2.44772 16 3V7C16 7.55228 16.4477 8 17 8C17.5523 8 18 7.55228 18 7V3C18 2.44772 17.5523 2 17 2Z"
                    fill="#777E91"
                  />
                </svg>
              </div>

              <div className="w-[136px]">
                <h2 className="font-semibold text-2xl">Check out</h2>
                <p className="text-base text-[#777E90]">Add date</p>
              </div>
            </li>
            <li className="flex gap-3 p-5">
              <div className="w-8 h-8 flex items-center justify-content-center">
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
                    d="M12 13C8.13401 13 5 16.134 5 20V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22V20C3 15.0294 7.02944 11 12 11C16.9706 11 21 15.0294 21 20V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22V20C19 16.134 15.866 13 12 13Z"
                    fill="#777E91"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 13C15.3137 13 18 10.3137 18 7C18 3.68629 15.3137 1 12 1C8.68629 1 6 3.68629 6 7C6 10.3137 8.68629 13 12 13Z"
                    fill="#777E91"
                  />
                </svg>
              </div>

              <div className="w-[136px]">
                <h2 className="font-semibold text-2xl">Travelers</h2>
                <p className="text-base text-[#777E90]">Add guests</p>
              </div>
              <button className="inline-flex items-center justify-content-center w-16 h-16 bg-[#3B71FE] rounded-full">
                <svg
                  className="grow"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z"
                    fill="#FCFCFD"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
