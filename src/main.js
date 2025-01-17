import "./styles/style.css";
import javascript from "./assets/javascript.svg";
import vite from "/vite.svg";
import { setupCounter } from "./components/counter.js";

document.querySelector("#app").innerHTML = `
      <div id="app"
        class="m-5 p-5 flex flex-col justify-center items-center" >
        <div id="app-container"
          class="m-5 p-5 flex flex-row justify-start items-center" >
          <h1 classe="m-2.5 p-2.5 text-2.5xl font-semibold" >
            Templates
          </h1>
          <a href="https://vitejs.dev" target="_blank">
          <img src="${vite}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img src="${javascript}" class="logo vanilla" alt="JavaScript logo" />
        </a>
        </div>
        <div id="app-card"
          class="m-2.5 p-2.5 flex flex-row justify-center items-center" >
          <div class="card">
            <button id="counter" type="button"></button>
          </div>
          <p class="m-2.5 p-2.5 bg-[#1A1A21] text-slate-300 rounded-xl" >
            Edit <code>./src/main.js</code> and save to test Hmr
          </p>
        </div>
        <p id="read" class="m-2.5 p-2.5 bg-[#1A121A] rounded-lg"  >
          Click on the Vite and React Logos to learn more
        </p>
      </div>
`;

setupCounter(document.querySelector("#counter"));
