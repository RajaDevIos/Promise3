function fetchData() {

return fetch('https://admin.xperienceit.in/api/get-location')

.then(response => {
    if (!response.ok) { 
        throw new Error('Network response was not ok');
    }
    return response.json();
})

.catch(error =>{
    console.error('There has been a problem with your fetch operation:', error);
});


}

function renderData() {
const container = document.querySelector('.Data');


fetchData().then(data =>{

    if(!data.body) {
        return;
    }

    data.body.forEach(item =>{

const homeContainer = document.createElement('div');
homeContainer.classList.add('card1')

const name = document.createElement('h4');
name.textContent = item.name;


const image = document.createElement('img');
image.src = item.image_id;
image.alt = item.name;




homeContainer.appendChild(image);
homeContainer.appendChild(name);
container.appendChild(homeContainer);

    });

});



}
renderData();