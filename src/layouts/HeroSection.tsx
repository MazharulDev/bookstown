import bannerImg from "../assets/images/banner.png";
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-700 via-indigo-200 to-white lg:bg-gradient-to-r lg:from-indigo-700 lg:via-indigo-200 lg:to-white py-7 md:mt-0">
      <div className="container mx-auto">
        <div className="md:grid grid-cols-2 w-full items-center mx-auto px-5">
          <div>
            <h2 className="text-5xl font-bold text-white">
              Welcome to our <span className="text-orange-600">BooksTown</span>
            </h2>
            <h3 className="text-2xl font-bold my-3 text-white">
              Please browse our inventory of used, hard to find, out of print
              and rare books.
            </h3>
            <h3 className="my-3 text-white">
              If you can't find what you are looking for, please fill out our
              off-line search form and we will search our off-line inventory,
              other bookstores and book search services for you.
            </h3>
          </div>
          <div className="flex justify-center md:justify-end">
            <img className="w-[400px]" src={bannerImg} alt="banner images" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
