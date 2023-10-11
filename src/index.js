console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const loaded = document.addEventListener('DOMContentLoaded', ()=>{
    fetchImg()
    fetchBreeds()
})


function fetchImg(){
    fetch(imgUrl)
        .then((resp)=>resp.json())
        .then((data) => {
            const images = data.message
            images.forEach((url)=> {
                const img = document.createElement('img')
                img.src = url

                const imgBox = document.querySelector('div#dog-image-container')
                imgBox.appendChild(img)
            })
        })
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";
function fetchBreeds() {
    fetch(breedUrl)
        .then((resp)=> resp.json())
        .then((data)=> {
            const breeds = Object.keys(data.message)
            const breedList = document.querySelector('ul#dog-breeds')
            const breedFilter = document.querySelector('select#breed-dropdown')

            breedFilter.addEventListener('change', ()=>{
                const selectedLetter = breedFilter.value;
                breedList.innerHTML = '';

                const filteredBreeds = breeds.filter((breed)=>{
                    return breed.charAt(0) === selectedLetter;
                })
                filteredBreeds.forEach((breed)=>{
                    const breedItem = document.createElement('li');
                    breedItem.textContent = breed;
                    breedList.appendChild(breedItem);
                    breedItem.addEventListener('click', () => {
                      breedItem.style.color = "purple";
                    });
                  });
                });

            breeds.forEach((breed)=>{
                const breedItem = document.createElement('li')
                breedItem.textContent = breed
                breedList.appendChild(breedItem)
                breedItem.addEventListener('click', ()=>{
                    breedItem.style.color = "purple";
                })
            })
        })
}
