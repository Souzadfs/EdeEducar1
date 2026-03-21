document.querySelector('.btn-topo').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#sobre').scrollIntoView({
        behavior: 'smooth'
    });
});