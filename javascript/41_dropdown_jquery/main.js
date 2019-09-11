const links = $('.links');
const dropDownObjects = $('.dropdown');

//console.log(links);
//console.log(dropDownObjects);

$('.links').click(function () {
    links.removeClass('clicked');
    $(this).addClass('clicked');
    dropDownObjects.hide();
    $(this).siblings().show();
});

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function () {
//         for (let j = 0; j < links.length; j++) {
//             links[j].classList.remove('clicked');
//             if (i === j) {
//                 links[i].classList.add('clicked');
//                 dropDownObjects[j].style.display = 'block';
//             } else {
//                 dropDownObjects[j].style.display = 'none';
//             }
//         }
//     });
// }