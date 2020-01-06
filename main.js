let imagesArray = [];

const handleImageClick = (imageId) => {
    const selectedImage = document.getElementById("selected-image-container");
    const image = imagesArray.find(image => Number(image.id) === imageId);
    selectedImage.innerHTML = `
        <img src="${image.download_url}" />
        <h4>Author: ${image.author} <span class="small">(width: ${image.width}px, height: ${image.height}px)</span></h4>
    `;
};

fetch('https://picsum.photos/v2/list')
    .then(res => res.json())
    .then(images => {
        imagesArray = images;
        const imagesContainer = document.getElementById("images-container");
        images.forEach(image => {
            imagesContainer.innerHTML += `<img src="https://picsum.photos/id/${image.id}/200/200" onclick="handleImageClick(${image.id});" />`;
        });
    });

