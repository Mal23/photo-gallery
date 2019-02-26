function gallery(images) {
    const imageItem = `<li> <h2>${images.title}</h2> <img src="${images.url}" alt="${images.description}">
</li>`;
    const template = document.createElement('template');
    template.innerHTML = imageItem;
    return template.content;
}

export default gallery;