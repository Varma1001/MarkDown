{
    (function () {
        var idk = intruiging(Number(false), Number(true));
        // var idk = intruiging(7, 4);

        function intruiging(a, b) {
            return a * Number(a < b) + b * Number(a > b);
        }

        console.log(idk);
    })();
}
