function openSlideMenu(){
    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginRight = '250px';
}

function closeSlideMenu(){
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginRight = '0';
}

const slideMenu = document.getElementById('slideMenu');

slideMenu.addEventListener('click', function (e) {
    e.preventDefault();
});