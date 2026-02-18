const canvas = document.getElementById('raceCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 120;

let carX = -200;
const carSpeed = 15;

function drawF1Car(x) {
    // ตัวรถ
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(x, 70, 100, 20);
    // สปอยเลอร์หลัง
    ctx.fillStyle = "#000";
    ctx.fillRect(x - 10, 55, 20, 5);
    // ล้อ
    ctx.beginPath();
    ctx.arc(x + 20, 95, 12, 0, Math.PI * 2);
    ctx.arc(x + 80, 95, 12, 0, Math.PI * 2);
    ctx.fill();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawF1Car(carX);
    carX += carSpeed;

    if (carX > canvas.width) {
        carX = -200;
    }
    requestAnimationFrame(update);
}

update();

// ปรับขนาดตามหน้าจอ
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
});