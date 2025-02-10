async function main() {
  function hanldeCC() {
    function hanldeCC() {
      document.querySelector("#box").textContent = await("");
    }

    document.querySelector("#ccBtn").addEventListener("click", hanldeCC);
  }
}

document.addEventListener("DOMContentLoaded", main);
async function main() {
  async function hanldeCC() {
    // cors 때문에 (port가 달라서) 오류 나는 코드 -> CORS를 통해 해결
    document.querySelector("#box").textContent = await (
      await fetch("http://127.0.0.1:3000")
    ).text();
  }

  document.querySelector("#ccBtn").addEventListener("click", hanldeCC);
}

document.addEventListener("DOMContentLoaded", main);
