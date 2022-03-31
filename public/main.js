const btnAdd = document.querySelector('#btnAdd');

function addContact() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

btnAdd.addEventListener('click', addContact);