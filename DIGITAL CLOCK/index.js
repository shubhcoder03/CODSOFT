function update() {
    const time = new Date();
    const hrs = String(time.getHours()).padStart(2, '0');
    const minu= String(time.getMinutes()).padStart(2, '0');
    const sec = String(time.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hrs + " : ";
    document.getElementById('minutes').textContent = minu + " : ";
    document.getElementById('seconds').textContent = sec;
}

setInterval(update, 1000);