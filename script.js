// You can add JavaScript functionalities here if needed
console.log("NestFinder homepage loaded");

document.addEventListener('DOMContentLoaded', function() {
    const exploreButton = document.querySelector('.btn');

    if (exploreButton) {
        exploreButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = 'explore.html'; // Redirect to explore page
        });
    }
});
//for resigter page

document.addEventListener('DOMContentLoaded', function() {
    const exploreButton = document.querySelector('#explore-btn');
    const listButton = document.querySelector('#list-btn');

    if (exploreButton) {
        exploreButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = 'explore.html'; // Redirect to explore page
        });
    }

    if (listButton) {
        listButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = 'list.html'; // Redirect to list page
        });
    }
});
