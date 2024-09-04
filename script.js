document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;

        if (title && author && year) {
            const listItem = document.createElement('li');
            listItem.textContent = `${title} by ${author} (${year})`;
            bookList.appendChild(listItem);

            // Clear the form fields
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
