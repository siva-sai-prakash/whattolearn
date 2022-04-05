//  Dark Mode
let darkModeBtn = document.querySelector("#darkMode");
localStorage.setItem("Mode", "dark");
darkModeBtn.addEventListener("click", () => {
    // document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');

    let body = document.body;
    // console.log(typeof body.style.backgroundColor);
    // if (body.style.backgroundColor !== "rgb(255, 255, 255)" || body.style.backgroundColor === "") {
    if (localStorage.getItem("Mode") === "dark") {
        // body.style.backgroundColor = '#030e4f';
        document.documentElement.style.setProperty('--primary-color', '#110034');
        document.documentElement.style.setProperty('--secondary-color', '#fff');
        document.documentElement.style.setProperty('--color', '#1ff647');
        localStorage.setItem("Mode", "light")
    }
    else {
        document.documentElement.style.setProperty('--primary-color', '#fff');
        document.documentElement.style.setProperty('--secondary-color', '#110034');
        document.documentElement.style.setProperty('--color', '#030e4f');
        localStorage.setItem("Mode", "dark")
    }
})



// 