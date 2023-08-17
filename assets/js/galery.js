function fetchAndRenderImagesWithButtons() {
    // Fetch the JSON data
    fetch('assets/img/img.json')
    .then(response => response.json())
    .then(images => {
        const masonry = document.querySelector('.masonry');
        
        images.forEach(image => {
            // Create a new container for each image+button combo
            const container = document.createElement('div');
            container.classList.add('image-container');
            
            // Image element
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.filename;
            
            // Button element
            const btnElement = document.createElement('a');
            btnElement.href = image.url;
            btnElement.classList.add('btn');
            btnElement.innerText = image.title;

            // Append image and button to the container
            container.appendChild(imgElement);
            container.appendChild(btnElement);

            // Append the container to the masonry grid
            masonry.appendChild(container);
        });
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });
}

fetchAndRenderImagesWithButtons();
