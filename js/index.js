function filterSelection(category) {
    var items = document.getElementsByClassName('portfolio-item');
    if (category === 'all') {
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'block';
        }
    } else {
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = items[i].classList.contains(category) ? 'block' : 'none'; 
    }
}
}
window.onload = function() {
    filterSelection('all');
};
