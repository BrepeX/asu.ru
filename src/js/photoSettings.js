const previewPhoto = document.querySelector('.previewLargePhoto');
const previewPhotoImage = document.querySelector('#previewPhoto');

previewPhoto.addEventListener('click', (event) => {
    if (event.target === event.currentTarget)
        previewPhoto.classList.add('hidden');

})

const imagesLoop = document.querySelectorAll('img[loop]');

imagesLoop.forEach(image => {
    image.addEventListener('click', () => {
        const source = image.getAttribute("src")
        previewPhotoImage.setAttribute("src", source)
        previewPhoto.classList.remove('hidden');
    })
})