import './html-equal.js';
const test = QUnit.test;

function gallery(images) {
    const imageItem = `<li> <h2>${images.title}</h2> <img src="${images.url}" alt="${images.description}">
</li>`;
    const template = document.createElement('template');
    template.innerHTML = imageItem;
    return template.content;
}

test('photo gallery test', function(assert) {
    const images = {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1
    }; 

    const result = gallery(images);
    const expected = 
    `<li>
    <h2>UniWhal</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
</li>`;

    assert.htmlEqual(result, expected);
});