import Logo from "../../assets/images/logo.svg";
import User from "../../assets/images/avatar.png";

export const Header = () => {
  return (
    <header className="py-5 font-dmsans text-[#777E90] text-sm leading-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            <a href="/">
              <img src={Logo} width={106} height={36} alt="fleet image" />
            </a>
            <div className="flex items-center gap-2 border-l border-[#23262F] pl-10 cursor-pointer h-12">
              Travelers
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
                  d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z"
                  fill="#777E91"
                />
              </svg>
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a
                  className="flex gap-3 items-center py-3 px-4 cursor-pointer"
                  href="/"
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 13.3335C10.9455 13.3335 13.3333 10.9457 13.3333 8.00016C13.3333 5.05464 10.9455 2.66683 8 2.66683C5.05448 2.66683 2.66667 5.05464 2.66667 8.00016C2.66667 10.9457 5.05448 13.3335 8 13.3335ZM8 14.6668C11.6819 14.6668 14.6667 11.6821 14.6667 8.00016C14.6667 4.31826 11.6819 1.3335 8 1.3335C4.3181 1.3335 1.33333 4.31826 1.33333 8.00016C1.33333 11.6821 4.3181 14.6668 8 14.6668Z"
                      fill="#777E91"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16445 12.1179C9.65692 11.133 10 9.679 10 8.00016C10 6.32132 9.65692 4.86734 9.16445 3.8824C8.63211 2.81771 8.14337 2.66683 8 2.66683C7.85663 2.66683 7.36789 2.81771 6.83555 3.8824C6.34308 4.86734 6 6.32132 6 8.00016C6 9.679 6.34308 11.133 6.83555 12.1179C7.36789 13.1826 7.85663 13.3335 8 13.3335C8.14337 13.3335 8.63211 13.1826 9.16445 12.1179ZM8 14.6668C9.84095 14.6668 11.3333 11.6821 11.3333 8.00016C11.3333 4.31826 9.84095 1.3335 8 1.3335C6.15905 1.3335 4.66667 4.31826 4.66667 8.00016C4.66667 11.6821 6.15905 14.6668 8 14.6668Z"
                      fill="#777E91"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.6337 8.66683C14.6555 8.44756 14.6667 8.22516 14.6667 8.00016C14.6667 7.77516 14.6555 7.55277 14.6337 7.3335H1.36625C1.34448 7.55277 1.33333 7.77516 1.33333 8.00016C1.33333 8.22516 1.34448 8.44756 1.36625 8.66683H14.6337Z"
                      fill="#777E91"
                    />
                  </svg>
                  Language
                </a>
              </li>
            </ul>
            <a
              className="text-[#FCFCFD] py-3 px-4 border-2 border-[#777E90] rounded-[90px]"
              href="/"
            >
              List your property
            </a>
            <button type="button">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x={28} width={12} height={12} rx={6} fill="#58C27D" />
                <g clipPath="url(#clip0_12_59)">
                  <path
                    d="M29 26.0233C29 26.5113 28.6043 26.907 28.1163 26.907H11.8837C11.3957 26.907 11 26.5113 11 26.0233C11 25.5352 11.3957 25.1395 11.8837 25.1395H11.9V18.9809C11.9 14.5729 15.527 11 20 11C24.473 11 28.1 14.5729 28.1 18.9809V25.1395H28.1163C28.6043 25.1395 29 25.5352 29 26.0233ZM13.7 25.1395H26.3V18.9809C26.3 15.5494 23.4794 12.7674 20 12.7674C16.5206 12.7674 13.7 15.5494 13.7 18.9809V25.1395ZM17.976 28.7558C17.7312 28.2608 18.1977 27.7907 18.75 27.7907H21.25C21.8023 27.7907 22.2688 28.2608 22.024 28.7558C21.9155 28.9751 21.7699 29.1773 21.591 29.3529C21.169 29.7672 20.5967 30 20 30C19.4033 30 18.831 29.7672 18.409 29.3529C18.2301 29.1773 18.0845 28.9751 17.976 28.7558Z"
                    fill="#777E91"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_59">
                    <rect
                      width={24}
                      height={24}
                      fill="white"
                      transform="translate(8 8)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>

            <img
              src={User}
              width={40}
              height={40}
              alt="In the phone had a girl with green hat, brown hair"
            />
          </nav>
        </div>
      </div>
    </header>
  );
};
