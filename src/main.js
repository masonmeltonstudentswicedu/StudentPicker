import "./style.css";

const app = document.querySelector("#app");
if (app && !app.innerHTML.trim()) {
  app.innerHTML = `
    <h1 class="text-3xl font-bold underline">
      Hello Vite!
    </h1>
  `;
}
