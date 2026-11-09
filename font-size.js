const fontSizeOptions = document.querySelectorAll('input[name="font-size"]');

fontSizeOptions.forEach((option) => {
    option.addEventListener('change', () => {
        document.documentElement.className = `font-${option.value}`;
    });
});