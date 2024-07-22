import { MerryMatchLogo } from "../icons-logos/logos";
import { useNavigate } from "react-router-dom";
import { ChatIcon, NotiIcon, HamburgerIcon } from "../icons-logos/icons";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className=" font-nunito px-4 lg:px-40 h-[52px] lg:h-[88px] flex justify-between items-center bg-white shadow-primary">
      <button onClick={() => navigate("/")}>
        <MerryMatchLogo className=" w-28 lg:w-[167px] h-[38px] lg:h-[56px]" />
      </button>
      <div className=" flex gap-4 lg:hidden">
        <button className=" w-7 h-7 flex justify-center items-center rounded-full bg-gray-100">
          <ChatIcon className=" w-[14px] h-[14px]; fill-red-200" />
        </button>
        <button className=" w-7 h-7 flex justify-center items-center rounded-full bg-gray-100 invisible">
          <NotiIcon className=" w-[14px] h-[14px]; fill-red-200" />
        </button>
        <button>
          <HamburgerIcon className=" w-6 h-6; fill-gray-700" />
        </button>
      </div>
      <div className=" flex items-center gap-8 max-lg:hidden text-center">
        <div className=" text-purple-800 font-bold">
          <button className="px-6 py-8">Why Merry Match?</button>
          <button className="px-6 py-8">How to Merry</button>
        </div>
        <button className=" px-4 py-3 w-[90px] h-12 bg-red-500 rounded-[99px] drop-shadow-primary text-white font-semibold">
          Login
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
