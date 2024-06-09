function showAlert() {
    alert("Primary Button Clicked!");
}

function showConsoleLog() {
    console.log("Secondary Button Clicked!");
}

function toggleProgressBar() {
    const progressBar = document.getElementById('progress-container');
    if (progressBar.classList.contains('hidden')) {
        progressBar.classList.remove('hidden');
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width++;
                document.getElementById('progress-bar').style.width = width + '%';
            }
        }, 50);
    } else {
        progressBar.classList.add('hidden');
        document.getElementById('progress-bar').style.width = '0%';
    }
}

function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'yellow' ? '#f4f4f4' : 'yellow';
}

function changeText() {
    const button = document.querySelector('.btn.info');
    button.textContent = button.textContent === 'Info Button' ? 'Clicked!' : 'Info Button';
}
