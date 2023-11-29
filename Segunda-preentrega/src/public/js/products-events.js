const send = document.querySelector('#send-button');

send.addEventListener("click", (e) => {
    const search = document.querySelector('#search').value;
    const newLimit = document.querySelector('#limit').value;
    const sort = document.querySelector('#price-sort').value;
    document.location.href = `http://localhost:8080/?limit=${newLimit}&query=${search}&sort=${sort}`
}
)
