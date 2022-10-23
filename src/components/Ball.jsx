import { useEffect } from 'react'

function Ball () {

    useEffect(() => {
        const square = document.querySelector(".square");
        const ball = document.querySelector(".ball");
        const width = square.clientWidth - ball.clientWidth;
        const height = square.clientHeight - ball.clientHeight;

        let directionLeft = 10 * Math.random();
        let directionTop = 10 * Math.random();

        function animate() {
            let left = +(ball.style.left.slice(0, ball.style.left.length - 2)); // перевод позиции left в число
            let top = +(ball.style.top.slice(0, ball.style.top.length - 2)); // перевод позиции top в число

            ball.style.left = (left + directionLeft) + "px"; // изменение положения шарика
            ball.style.top = (top + directionTop) + "px"; // изменение положения шарика

            if (left > width) {
                directionLeft = -1 * Math.abs(directionLeft);
            }

            if (left < 0) {
                directionLeft = Math.abs(directionLeft);
            }

            if (top > height) {
                directionTop = -1 * Math.abs(directionTop);
            }

            if (top < 0) {
                directionTop = Math.abs(directionTop);
            }

            requestAnimationFrame(animate)



        }

        animate()
    }, [])

    return (
        <div class="square">
                <div class="ball"></div>
        </div>
    )
    
}

export default Ball