const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catButton = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async() => {
    try {

        const data = await fetch(BASE_URL);
        const json = await data.json();

        // retorna a chave webpurl.
        return json.webpurl;
        
    } catch (error) {
        console.log(error.message)
    }
}

const loadImg = async () => {
    catImg.src = await getCats();
}

catButton.addEventListener('click', loadImg);

loadImg();

