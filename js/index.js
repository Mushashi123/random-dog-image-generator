const image = document.querySelector('img');
const btn = document.querySelector('.btn');


//dog.ceo website api..
const url = " https://dog.ceo/api/breeds/image/random";



// whenever user clicks button 
btn.addEventListener('click', async () => {
    //gets the random dog's image url
    try {
        const imageUrl = await getRandomImage();
        image.src = imageUrl;
    } catch (error) {
        // if erros alternate message is shown 
        console.log(error.message);
        image.alt = error.message;
    }

})

async function getRandomImage() {
    try {
        // we are using fecth api here 
        const response = await fetch(url);
        //this parses the json body 
        const randomDog = await response.json();
        //returning the url 
        return randomDog.message;
    } catch (error) {
        // if error occures  we throw instance of error 
        throw new Error('Oops something went wrong !!!');
    }
}