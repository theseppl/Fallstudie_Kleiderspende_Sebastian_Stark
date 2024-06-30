document.addEventListener("DOMContentLoaded", function() {
    var meineNavbar = document.getElementById("meine-navbar");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/html/navigation.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            meineNavbar.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});    


