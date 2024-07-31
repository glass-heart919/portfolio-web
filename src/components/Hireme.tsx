import { content } from "@/content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          {/* <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden self-end"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          /> */}
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary p-6 shadow-sm rounded-xl rounded-br-[8rem] w-3/4 mx-auto relative"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <a className="btn bg-dark_primary text-white" href="#contact">
              {Hireme.btnText}
            </a>
            <div className=" border-2 border-dark_primary absolute px-[40px] py-[30px] rounded-[50%] -right-[50px] -bottom-[20px]"></div>
            <div className=" border-2 border-dark_primary absolute px-[20px] py-[15px] rounded-[50%] -right-[80px] -bottom-[50px]"></div>
          </div>
          {/* <div
            data-aos="fade-left"
            className="border-2 border-dark_primary py-[20px] px-[80px] shadow-sm rounded-[50%] text-center relative w-full md:min-w-[18rem] lg:min-w-[30rem] xl:min-w-[52rem]"
          >
            {Hireme.para}
            <div className=" border-2 border-dark_primary absolute w-[50px] p-[20px] rounded-[50%] -left-[10px] top-[10px]"></div>
            <br />
          </div>
          <a className="btn bg-dark_primary text-white" href="#contact">
            {Hireme.btnText}
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Hireme;
