function openPage(pageName, elmnt, color) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for(i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "black";
    }
    document.getElementById(pageName).style.display = "flex";
    elmnt.style.color = color;
}
document.getElementById("defaultOpen").click();