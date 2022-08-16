// GET THE REFERENCES
const container = document.querySelector('#dynamic');
let url = 'home.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
function loadContent(url) {
    const fullURL = './partials/' + url;
    fetch(fullURL).then(function (rsp) {
        return rsp.text();
    })
    .then(function (data) {
        container.innerHTML = data;
        container.dataset.page = url;
    });
}

function selectContent(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const href = link.getAttribute('href');
    if (container.dataset.page !== href) {
        loadContent(href);
    }
}

document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', selectContent);
});

loadContent(url);