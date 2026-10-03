fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        const target = document.getElementById('footer');
        if (target) target.innerHTML = data;
    });
