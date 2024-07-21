import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import heart from "./assets/Vector.svg";
import {
  BasicIcon,
  PremiumIcon,
  MerryIcon,
  MerryMatchIcon,
  MerrySearchIcon,
  EditIcon,
} from "./components/icons-logos/icons";
import {
  MerryMatchLogo,
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
} from "./components/icons-logos/logos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo bg-red-400" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <img src={heart} className=" fill-blue-700" alt="Heart logo" />
        <BasicIcon className="  w-36 h-36 ; fill-white" />
        <PremiumIcon className="  w-36 h-36 ; fill-white" />
        <MerryIcon className="  w-36 h-36 bg-red-500 ; fill-blue-500" />
        <MerryMatchIcon className="  w-36 h-36 bg-red-500 ; fill-blue-500" />
        <MerrySearchIcon className="  w-36 h-36 bg-red-500 ; fill-blue-500" />
        <EditIcon className="  w-36 h-36 bg-red-500 ; fill-blue-500 ; fill-black " />
        <MerryMatchLogo className=" w-36 h-36 bg-white" />

        <FacebookLogo className=" w-36 h-36 bg-black; fill-red-200" />
        <InstagramLogo className=" w-36 h-36 bg-black; fill-red-200" />

        <svg
          width="30"
          height="26"
          viewBox="0 0 30 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3754 25.447L14.3664 25.4416L14.3322 25.4236C13.6219 25.0371 12.9243 24.6277 12.2406 24.196C10.6105 23.1703 9.05716 22.0273 7.59301 20.776C4.28101 17.9194 0.600006 13.6336 0.600006 8.49999C0.600165 6.82502 1.11958 5.19129 2.08672 3.82375C3.05386 2.45621 4.42116 1.42212 6.00037 0.863876C7.57957 0.305628 9.293 0.250674 10.9047 0.706581C12.5165 1.16249 13.9472 2.10683 15 3.40959C16.0528 2.10683 17.4835 1.16249 19.0953 0.706581C20.707 0.250674 22.4204 0.305628 23.9996 0.863876C25.5788 1.42212 26.9462 2.45621 27.9133 3.82375C28.8804 5.19129 29.3998 6.82502 29.4 8.49999C29.4 13.6336 25.7208 17.9194 22.407 20.776C20.3268 22.5533 18.0684 24.1108 15.6678 25.4236L15.6336 25.4416L15.6246 25.447H15.621C15.4298 25.5483 15.2167 25.6014 15.0002 25.6017C14.7838 25.6021 14.5706 25.5496 14.379 25.4488L14.3754 25.447Z"
            fill="#CF4FA9"
            className=" fill-blue-600"
          />
        </svg>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
