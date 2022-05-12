window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 110)
})

function openNav () {
    var overlay = document.getElementById("myNav")
    overlay.classList.toggle('show')
    var overlayCont = document.querySelector("#menu-container")
    overlayCont.classList.toggle('show')
    var iconUP = document.getElementById("closeA")
    iconUP.classList.toggle('mostra')
    var oclose = document.querySelector("#close-x")
    oclose.classList.toggle('show')
    var userN = document.querySelector("#name-user")
    userN.classList.toggle('hid')
    var closeMENU = document.querySelector("#menu-txt")
    closeMENU.classList.toggle('show')
    var gradMENU = document.querySelector("#gradTXT")
    gradMENU.classList.toggle('show')
    var xbtn = document.querySelector("#x-btn")
    xbtn.classList.toggle('show')
    var xICON = document.querySelector("#x-icon")
    xICON.classList.toggle('show')
}

function SubmitName () {
    document.getElementById("change-btn").style.display = "block";
    document.getElementById("user-change").style.display = "block";
    document.getElementById("submit-btn").style.display = "none";
}
function ChangeName () {
    var verificador = document.getElementById("user-change").value;

    if (verificador.length > 0) {		
    document.getElementById("change-btn").style.display = "none";
    document.getElementById("user-change").style.display = "none";
    document.getElementById("submit-btn").style.display = "block";
    document.getElementById("username").innerHTML = verificador;
    } else {
        document.getElementById("change-btn").style.display = "none";
        document.getElementById("user-change").style.display = "none";
        document.getElementById("submit-btn").style.display = "block";
    }
}