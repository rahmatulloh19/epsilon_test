import summer from "../../assets/images/livesummer.png";
import snow from "../../assets/images/livesnow.png";
import ocean from "../../assets/images/liveocean.png";

export const Live = () => {
  return (
    <section className="pb-14">
      <div className="container">
        <h2 className="text-5xl leading-[56px] text-[#FCFCFD] mb-3 -tracking-[0.02em] text-center font-dmsans">
          Live anywhere
        </h2>
        <p className="text-[#777E90] text-2xl mb-16 text-center -tracking-[0.01em]">
          Keep calm & travel on
        </p>

        <ul className="grid grid-cols-3 text-center mb-16">
          <li>
            <img
              className="mb-6"
              src={snow}
              width={352}
              height={480}
              alt="In the picture there is snow and woodland"
            />
            <h3 className="mb-2 text-base text-[#FCFCFD] font-medium">
              Enjoy the great cold
            </h3>
            <p className="text-[#777E90] leading-6 text-sm">6,879 properties</p>
          </li>
          <li>
            <img
              className="mb-6"
              src={summer}
              width={352}
              height={480}
              alt="The painting depicts a White House with a grey roof"
            />
            <h3 className="mb-2 text-base text-[#FCFCFD] font-medium">
              Pick up the earliest sunrise
            </h3>
            <p className="text-[#777E90] leading-6 text-sm">6,879 properties</p>
          </li>
          <li>
            <img
              className="mb-6"
              src={ocean}
              width={352}
              height={480}
              alt="The painting depicts houses by the water"
            />
            <h3 className="mb-2 text-base text-[#FCFCFD] font-medium">
              Unique stay
            </h3>
            <p className="text-[#777E90] leading-6 text-sm">6,879 properties</p>
          </li>
        </ul>

        <button
          className="flex items-center mx-auto py-3 px-4 border-2 border-[#777E90] rounded-full gap-3 font-dmsans text-[#FCFCFD]"
          type="button"
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1.33331C7.6318 1.33331 7.33333 1.63179 7.33333 1.99998V3.99998C7.33333 4.36817 7.6318 4.66665 8 4.66665C8.36819 4.66665 8.66666 4.36817 8.66666 3.99998V1.99998C8.66666 1.63179 8.36819 1.33331 8 1.33331Z"
              fill="#FCFCFD"
            />
            <path
              d="M8 11.3333C7.6318 11.3333 7.33333 11.6318 7.33333 12V14C7.33333 14.3682 7.6318 14.6666 8 14.6666C8.36819 14.6666 8.66666 14.3682 8.66666 14V12C8.66666 11.6318 8.36819 11.3333 8 11.3333Z"
              fill="#FCFCFD"
            />
            <path
              d="M14 7.33331C14.3682 7.33331 14.6667 7.63179 14.6667 7.99998C14.6667 8.36817 14.3682 8.66665 14 8.66665H12C11.6318 8.66665 11.3333 8.36817 11.3333 7.99998C11.3333 7.63179 11.6318 7.33331 12 7.33331H14Z"
              fill="#FCFCFD"
            />
            <path
              d="M4.66666 7.99998C4.66666 7.63179 4.36818 7.33331 3.99999 7.33331H1.99999C1.63181 7.33331 1.33333 7.63179 1.33333 7.99998C1.33333 8.36817 1.6318 8.66665 1.99999 8.66665H3.99999C4.36818 8.66665 4.66666 8.36817 4.66666 7.99998Z"
              fill="#FCFCFD"
            />
            <path
              d="M11.7713 3.286C12.0316 3.02565 12.4537 3.02565 12.7141 3.286C12.9744 3.54635 12.9744 3.96846 12.7141 4.22881L11.2999 5.64302C11.0395 5.90337 10.6174 5.90337 10.3571 5.64302C10.0967 5.38267 10.0967 4.96056 10.3571 4.70021L11.7713 3.286Z"
              fill="#FCFCFD"
            />
            <path
              d="M5.64295 10.357C5.3826 10.0966 4.96049 10.0966 4.70014 10.357L3.28593 11.7712C3.02558 12.0315 3.02558 12.4536 3.28593 12.714C3.54628 12.9743 3.96839 12.9743 4.22874 12.714L5.64295 11.2998C5.9033 11.0394 5.9033 10.6173 5.64295 10.357Z"
              fill="#FCFCFD"
            />
            <path
              d="M12.7141 11.7713C12.9744 12.0316 12.9744 12.4537 12.7141 12.7141C12.4537 12.9744 12.0316 12.9744 11.7712 12.7141L10.357 11.2998C10.0967 11.0395 10.0967 10.6174 10.357 10.357C10.6174 10.0967 11.0395 10.0967 11.2998 10.357L12.7141 11.7713Z"
              fill="#FCFCFD"
            />
            <path
              d="M5.64301 5.64293C5.90336 5.38258 5.90336 4.96047 5.64301 4.70012L4.2288 3.28591C3.96845 3.02556 3.54634 3.02556 3.28599 3.28591C3.02564 3.54626 3.02564 3.96837 3.28599 4.22872L4.7002 5.64293C4.96055 5.90328 5.38266 5.90328 5.64301 5.64293Z"
              fill="#FCFCFD"
            />
          </svg>
          Load more
        </button>
      </div>
    </section>
  );
};
