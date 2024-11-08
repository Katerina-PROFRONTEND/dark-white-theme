
const prefersDarkTheme =
            window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = prefersDarkTheme ? 'dark' : 'light';
const currentTheme = localStorage.getItem('theme') || defaultTheme;

if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
})