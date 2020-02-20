window.onload = function () {
    const t = [
        'Привет, мир! ',
        'Пробуем ввод текста. ',
        'Следуй за белым кроликом...'
    ];

    function typeText() {
        let line = 0;
        let count = 0;
        let out = '';
        let htmlOut = document.querySelector('#out');

        function typeLine() {
            let interval = setTimeout(function () {
                out += t[line][count];
                htmlOut.innerHTML = out + '|';
                count++;
                if(count >= t[line].length){
                    count = 0;
                    line++;
                }
                if (line === t.length) {
                    clearTimeout(interval);
                    htmlOut.innerHTML = out;
                    return true;
                }
                typeLine();
            }, Math.random() * 500);
        }
        typeLine();
    }

    typeText();
}