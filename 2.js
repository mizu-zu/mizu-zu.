const modal = document.getElementsByClassName("modal")[0];
const btn = document.getElementById("openModal");

const btn1 = document.getElementById("openModal1");

const btn2 = document.getElementById("openModal2");

const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

btn.onclick = function() {
    modal.style.display = "flex";
}

btn1.onclick = function() {
    modal.style.display = "flex";
}

btn2.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const send = document.getElementById("perdan");
send.onclick = function () {
        if (document.getElementById("otpr").checked) {
            alert("checked");
        } else {
            alert("Согласитесь на обработку персональных данных");
        }
    }

if (window.innerWidth < 600) {
    document.getElementById("stylesheet").setAttribute("href", "mobile.css");
}
else {
    document.getElementById("stylesheet").setAttribute("href", "dekstop.css");    
}
