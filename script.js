document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value;
    const apiKey = '3c7fdf81564e4e06b26de97c0819eb79';  // Replace with your actual API key
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.articles.forEach(article => {
                output += `
                    <div>
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                    </div>
                `;
            });
            document.getElementById('results').innerHTML = output;
        })
        .catch(error => console.log('Error:', error));
});
