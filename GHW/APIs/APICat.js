const apiCat = 'https://api.thecatapi.com/v1/images/search?size=full';

document.querySelector('button').addEventListener('click', _ => {
  getData();
});

const getData = async _ => {
  const response = await fetch(apiCat);
  const data = await response.json();

  if (data[0].width >= 600 && data[0].height >= 600 && data[0].width <= 800 && data[0].height <= 800) {
    document.getElementById("myImg").src = data[0].url;
  } else {
    getData();
  }
}

getData();
