document.addEventListener("DOMContentLoaded", () => {
    appendButton();
    const ele = document.getElementsByClassName('info-button-wrapper')[0];
    ele.addEventListener('click', (e) => {
        const button = e.target;
        debugger
        if (button.classList.contains('fav-button')) {
            const i = document.createElement('i');
            i.classList.add('fas');
            i.classList.add('fa-heart');
            button.replaceWith(i);
        } else if (button.classList.contains('fa-heart')){
            const fav = document.createElement('button');
            fav.classList.add('fav-button');
            fav.innerHTML = 'Add to Favorites';
            button.replaceWith(fav);
        }
    });

    function appendButton(){
        const ele = document.getElementsByClassName('info-button-wrapper')[0];
        const fav = document.createElement('button');
        fav.classList.add('fav-button');
        fav.innerHTML = 'Add to Favorites';
        ele.appendChild(fav);
    }
});