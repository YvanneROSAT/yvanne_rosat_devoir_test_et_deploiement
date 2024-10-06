document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    fetch('/api/produits')
        .then(response => response.json())
        .then(data => {
            contentDiv.innerHTML = `<h2>Produits</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            console.error('Error fetching produits:', error);
            contentDiv.innerHTML = '<p>Error loading produits</p>';
        });

    fetch('/api/commandes')
        .then(response => response.json())
        .then(data => {
            contentDiv.innerHTML += `<h2>Commandes</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            console.error('Error fetching commandes:', error);
            contentDiv.innerHTML += '<p>Error loading commandes</p>';
        });
});