import memories from "../../assets/images/memories.png";

export const Memories = () => {
  return (
    <section className="pb-[138px]">
      <div className="container">
        <div className="max-w-[681px] mx-auto">
          <h2 className="text-5xl leading-[56px] text-center text-[#FCFCFD] mb-3 font-dmsans -tracking-[0.02em]">
            Travel to make memories all around the world
          </h2>
          <p className="text-[#777E90] text-2xl -tracking-[0.01em] text-center mb-[127px]">
            Find trips that fit a flexible lifestyle
          </p>
        </div>
        <div className="flex justify-between items-center">
          <ol>
            <li className="before:content-['01'] before:font-medium before:text-sm before:inline-block before:mb-6 before:py-0.5 before:px-3 before:rounded-full before:bg-[#8BC5E5] before:text-[#FCFCFD] max-w-[352px]">
              <h3 className="font-semibold text-2xl text-[#FCFCFD] mb-4">
                Find trips that fit a flexible lifestyle
              </h3>
              <p className="text-[#777E90] text-sm leading-6 mb-10">
                Stacks is a production-ready library of stackable content blocks
                built in React Native
              </p>
            </li>
            <li className="before:content-['02'] before:font-medium before:text-sm before:inline-block before:mb-6 before:py-0.5 before:px-3 before:rounded-full before:bg-[#92A5EF] before:text-[#FCFCFD] max-w-[352px]">
              <h3 className="font-semibold text-2xl text-[#FCFCFD] mb-4">
                Travel with more confidence
              </h3>
              <p className="text-[#777E90] text-sm leading-6 mb-10">
                Stacks is a production-ready library of stackable content blocks
                built in React Native
              </p>
            </li>
            <li className="before:content-['03'] before:font-medium before:text-sm before:inline-block before:mb-6 before:py-0.5 before:px-3 before:rounded-full before:bg-[#58C27D] before:text-[#FCFCFD] max-w-[352px]">
              <h3 className="font-semibold text-2xl text-[#FCFCFD] mb-4">
                See what’s really included
              </h3>
              <p className="text-[#777E90] text-sm leading-6 mb-10">
                Stacks is a production-ready library of stackable content blocks
                built in React Native
              </p>
            </li>
          </ol>
          <img
            src={memories}
            width={640}
            height={700}
            alt="In the picture showed flamingo image"
          />
        </div>
      </div>
    </section>
  );
};
