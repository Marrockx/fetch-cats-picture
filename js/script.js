
// accordion

// get needed elements from DOM
const headerBox = document.querySelector('.header-div')
headerBox.style.cursor = 'pointer'
const headingAbout = document.querySelector('.about');
// headingAbout.style.display = 'none';

// implement accordion feature

function toggle() {
  headingAbout.classList.toggle('hide');
}

// add functionality to button
headerBox.addEventListener('click', toggle)

const API_URL = 'https://cataas.com';

// object to contain cat properties from api
const defaultCatProperties = {
  color: 'green',
}

const button = document.querySelector('.action-btn');

const spinner = document.querySelector('.spinner');

const image = document.querySelector('.picture');



function loadIng(show) {
  spinner.style.display = `${String(show)}`;
}

function apiURL(CATS_PATH = `/cat?&json=true`) {
  const CATS_URL = `${String(API_URL)}${String(CATS_PATH)}`

  return CATS_URL;
}



// Fetching Cat Data - Pictures

async function getCatData(promise) {

  // create promise to fetch data from API
  promise = fetch(apiURL());
  promise
    .then(function (response) {
      const formattedData = response.json();
      // loadIng('none');
      return formattedData;
    })
    .then(function (getResponse) {
      const newPic = document.createElement('img');
      const catPath = `${String(getResponse.url)}`;
      image.src = `${API_URL}${catPath}`;
      image.alt = 'Nice cat'
      loadIng('block');
      // document.querySelector('.img-wrap').appendChild(newPic);
      // console.log('see')
    });

}

async function getFilteredCatData(evt) {
  const filter = evt.target.textContent;
  getCatData(fetch(apiURL(CATS_PATH = `/cat/${String(filter)}?&json=true`)));
}

button.addEventListener('click', getCatData);
document.querySelector('.filter-btns').addEventListener('click', getFilteredCatData);


// footer

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

const githubLink = document.querySelector('.small-text');
setAttributes(githubLink, {
  "href": "https://github.com/Marrockx/fetch-cats-picture",
  "target": "_blank"
})