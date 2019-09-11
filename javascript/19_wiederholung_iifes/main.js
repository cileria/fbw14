function sayHallo() {
    console.log('hallo world');
}

sayHallo();

// immediately(=sofort) invoked functions expressions
(function () {
    console.log('mein tolles plugin - google analytics');
})();

(function () { // anfang meines plugins
    console.log('mein anderes tolles plugin - amazon affiliate');
})(); // ende meines plugins

// google analytics -> plugin
// (function (i, s, o, g, r, a, m) {
//     i['GoogleAnalyticsObject'] = r;
//     i[r] = i[r] || function () {
//         (i[r].q = i[r].q || []).push(arguments)
//     }, i[r].l = 1 * new Date();
//     a = s.createElement(o),
//         m = s.getElementsByTagName(o)[0];
//     a.async = 1;
//     a.src = g;
//     m.parentNode.insertBefore(a, m)
// })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');