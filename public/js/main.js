console.log("Hellow world");

let form = document.getElementById("myform");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    weatherFun();
    form.reset();
});

// async--> func return promise
let weatherFun = async() => {
    try {
        const address = document.getElementById("address").value;
        const res = await fetch("http://localhost:3000/weather?address=" + address);
        const data = await res.json();
        console.log(data);
        if (data.error) {
            document.getElementById("error").innerText = data.error;
            document.getElementById("location").innerText = "";
            document.getElementById("forecast").innerText = "";
        } else {
            document.getElementById("location").innerText = data.location;
            document.getElementById("forecast").innerText = data.forecast;
            document.getElementById("error").innerText = "";
        }
    } catch (e) {
        console.log(e);
    }
};