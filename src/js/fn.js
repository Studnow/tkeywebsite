let hello = document.querySelector("#hello");
if (hello) {
  hello.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="/index.html">Home</a>
`;
}
fetch("http://localhost:8000/wp-json/wp/v2/");