import Book from "../../assets/images/book.svg";
import Save from "../../assets/images/save.svg";
import Smart from "../../assets/images/smart.svg";

export const Work = () => {
  return (
    <section className="work pb-[138px]">
      <div className="container">
        <h2 className="text-5xl leading-[56px] text-[#FCFCFD] mb-3 -tracking-[0.02em] text-center font-dmsans">
          How it work
        </h2>
        <p className="text-[#777E90] text-2xl mb-16 text-center -tracking-[0.01em]">
          Keep calm & travel on
        </p>
        <ul className="flex work__list gap-x-32 justify-center">
          <li className="w-64 text-center">
            <img src={Book} width={256} height={230} alt="" />
            <h3 className="font-semibold text-2xl mb-2 text-[#FCFCFD]">
              Book & relax
            </h3>
            <p className="text-base text-[#777E90]">
              We realize ideas from simple to complex, everything becomes easy
              to use.
            </p>
          </li>
          <li className="w-64 text-center">
            <img src={Smart} width={256} height={230} alt="" />
            <h3 className="font-semibold text-2xl mb-2 text-[#FCFCFD]">
              Smart checklist
            </h3>
            <p className="text-base text-[#777E90]">
              We realize ideas from simple to complex, everything becomes easy
              to use.
            </p>
          </li>
          <li className="w-64 text-center">
            <img src={Save} width={256} height={230} alt="" />
            <h3 className="font-semibold text-2xl mb-2 text-[#FCFCFD]">
              Save more
            </h3>
            <p className="text-base text-[#777E90]">
              We realize ideas from simple to complex, everything becomes easy
              to use.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
