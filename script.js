



document.addEventListener('DOMContentLoaded', function () {
    fetch('https://raw.githubusercontent.com/RyanCrux/products-demo/main/data.json')
        .then(response => response.json())
        .then(data => {
            var template = document.getElementById('template').innerHTML;
            var output = document.getElementById('template-output');
            output.innerHTML = Mustache.render(template, { items: data });
        })
        .catch(error => console.error('Error:', error));
});

