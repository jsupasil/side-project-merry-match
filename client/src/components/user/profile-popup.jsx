import { useState } from "react";

function ProfilePopUp(props) {
  const [isSecondImage, setIsSecondImage] = useState(false);

  return (
    <dialog id="preview" className="modal">
      <div className=" bg-white rounded-[32px] min-w-[1024px] max-w-[1140px] px-16 max-[1140px]:px-4 py-20 shadow-primary relative">
        <form method="dialog">
          <button
            id="exit-preview-btn"
            className="btn btn-lg btn-square btn-ghost absolute top-0 right-0"
          >
            <img src={exit_icon} alt="exit icon" width={16} height={16} />
          </button>
        </form>
        <div className=" flex justify-between">
          <div className=" w-[478px] ">
            <div className=" h-[478px] relative">
              <img
                src={
                  images[0] && images[1]
                    ? URL.createObjectURL(images[isSecondImage ? 1 : 0])
                    : ""
                }
                className=" w-[478px] h-[478px] object-cover rounded-[32px]"
                alt={"preview photo " + isSecondImage ? "1" : "0"}
              />
            </div>
            <div className=" h-12 flex justify-between items-center text-gray-700 relative ">
              <div className=" flex justify-center absolute top-[-30px] w-full gap-6 z-10">
                <button className=" w-[60px] h-[60px] bg-white shadow-primary rounded-2xl">
                  <img
                    src={reject_icon}
                    width={40}
                    height={40}
                    className=" mx-auto"
                  />
                </button>
                <button className=" w-[60px] h-[60px] bg-white shadow-primary rounded-2xl">
                  <img
                    src={love_icon}
                    width={50}
                    height={50}
                    className=" mx-auto"
                  />
                </button>
              </div>
              <p className=" w-[72px] flex justify-center items-center">
                {isSecondImage ? "2" : "1"}
                <span className=" text-gray-600">/2</span>
              </p>
              <div className=" flex">
                <button
                  type="button"
                  id="back-preview-image-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsSecondImage(false);
                  }}
                  className=" w-12 h-12 rounded-xl flex justify-center items-center z-20"
                >
                  <img
                    src={back_icon}
                    width={16}
                    height={16}
                    alt="back photo icon"
                  />
                </button>
                <button
                  type="button"
                  id="next-preview-image-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsSecondImage(true);
                  }}
                  className=" w-12 h-12 rounded-xl flex justify-center items-center z-20"
                >
                  <img
                    src={next_icon}
                    width={16}
                    height={16}
                    alt="next photo icon"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[478px] flex flex-col gap-10 items-end text-gray-900 leading-6">
            <article className=" w-[418px]">
              <h1 className=" text-[46px] leading-[57.5px] font-extrabold mb-2">
                {props.name} <span className=" text-gray-700">{26}</span>
              </h1>
              <div className=" flex gap-4">
                <img
                  src={location_icon}
                  width={24}
                  height={24}
                  alt="location icon"
                />
                <p className=" text-xl leading-[30px] font-semibold">
                  {`${props.city}, ${props.location}`}
                </p>
              </div>
            </article>

            <section className=" grid grid-cols-2 w-[418px] leading-6 py-2 gap-y-4">
              <p className=" flex items-center">Sexual identities</p>
              <p className=" text-xl leading-[30px] font-semibold text-gray-700">
                {props.sexIden}
              </p>
              <p className=" flex items-center">Sexual preferences</p>
              <p className=" text-xl leading-[30px] font-semibold text-gray-700">
                {props.sexPrefer}
              </p>
              <p className=" flex items-center">Racial preferences</p>
              <p className=" text-xl leading-[30px] font-semibold text-gray-700">
                {props.racePrefer}
              </p>
              <p className=" flex items-center">Meeting interests</p>
              <p className=" text-xl leading-[30px] font-semibold text-gray-700">
                {props.meetPrefer}
              </p>
            </section>

            <article className=" w-[418px] ">
              <h2 className=" mb-4 text-2xl font-bold lead-[30px]">About me</h2>
              <p>{props.aboutMe}</p>
            </article>

            <article className=" w-[418px]">
              <h2 className=" mb-6 text-2xl font-bold lead-[30px]">
                Hobbies and Interests
              </h2>
              <div className=" flex flex-wrap gap-3">
                {props.hobbiesList.map((item, index) => (
                  <div
                    key={index}
                    className=" px-4 py-2 rounded-xl border border-purple-300 text-purple-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ProfilePopUp;
