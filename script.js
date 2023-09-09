const markers = Array.from(document.querySelectorAll('.marker'));

const image = document.querySelector('.background');

let showMarker = (marker) => {
    marker.classList.remove('hidden')
    marker.children[0].innerHTML = '-'
}

let hideMarker = (marker) => {
    marker.classList.add('hidden')
    marker.children[0].innerHTML = '+'
}

document.addEventListener('click', (e) => {
    let marker = e.target.parentNode;
    if (e.target.className == 'button') {
        marker.classList.contains('hidden') ? showMarker(marker) 
        : hideMarker(marker)
    }

    if (e.target.className == 'location-name') {
        hideMarker(marker)
        
    }

    if (e.target.tagName == 'IMG') {
        markers.forEach(marker => {
            hideMarker(marker)
        })
    }
})





