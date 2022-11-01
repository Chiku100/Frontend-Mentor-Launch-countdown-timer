let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour");
let day = document.querySelector(".day");
function changeSec() {
    setInterval(() => {
        if (second.innerHTML != 0) {
            second.innerHTML = second.innerHTML - 1;
            setInterval(() => {
                document.querySelector(".secflip").style.transform = "rotateX(0deg)"
            }, 1000);
            setInterval(() => {
                document.querySelector(".secflip").style.transform = "rotateX(180deg)"
            }, 2000);

        }
        else {
            second.innerHTML = 60;
            minute.innerHTML = minute.innerHTML - 1;
            document.querySelector(".minflip")
                .style.transform = "rotateX(180deg)";

            if (minute.innerHTML == 60) {
                minute.innerHTML = 0;
                document.querySelector(".hourflip")
                    .style.transform = "rotateX(180deg)";
                hour.innerHTML = hour.innerHTML - 1;
            } else if (hour.innerHTML == 0 || minute.innerHTML == 0 || second.innerHTML == 0) {
                document.querySelector(".dayflip").style.transform = "rotateX(180deg)";
                day.innerHTML = day.innerHTML - 1;
                hour.innerHTML = 23;
                minute.innerHTML = 59;
                second.innerHTML = 59;
                document.querySelector(".minflip").style.transform = "rotateX(180deg)";
                document.querySelector(".hourflip").style.transform = "rotateX(180deg)";
                if (hour.innerHTML == 0 || minute.innerHTML == 0 || second.innerHTML == 59 || day.innerHTML == 0) {
                    document.querySelector(".main").style.display = "none";
                    document.querySelector("h1").innerHTML = "We are Live! Thank you for waiting";
                    document.querySelector("h1").style.background = "linear-gradient(190deg,#FD841F, #61764B)";
                    document.querySelector("h1").style.fontSize = "50px";
                    document.querySelector("h1").style.marginBottom = "50px";
                    let para = document.createElement("p");
                    para.innerText = "Go to our social media pages to buy now!!!";
                    document.body.appendChild(para);
                    para.style.fontSize = "10px";
                    para.style.marginTop = "20px"
                }
            }

        }
    }, 1000);
}

changeSec()