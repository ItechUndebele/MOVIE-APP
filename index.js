let page = 1;
let total_pages;
let search;
let total_pages_search;
let id = 1076032;
const key = '02e814d88a3e5259d80058c8c083f939';

let searchInputValue = document.querySelector('#inputValue');
const cardZeroSpace = document.querySelector('#card--zero--space');
const searchButton = document.querySelector('#search');
const foromo = document.querySelector('#foromo');
const buttonButton = document.querySelector('#button--button');
const navigation = document.querySelector('#navigation');
const link = document.querySelector('#zi--link');
const nextButton = document.querySelector('#next--button');
const prevButton = document.querySelector('#previous--button');
const searchApiSpace = document.querySelector('#search--api--space');
const cardTwoSpace = document.querySelector('#card--two--space');
const cardOneSpace = document.querySelector('#card--one--space');

//CARD--ZERO
 async function myIndexZero(){
    const url0 = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`;
   // const url =`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${key}&page=${page}`;
    const api = await fetch(url0);
    const jsonData = await api.json();
    const jsonDataSecond = jsonData.results;
    const total_pages = jsonData.total_pages;
   // console.log(jsonDataSecond);

    cardZeroSpace.innerHTML = jsonDataSecond.map(index=>
       `
        <div id='card--zero'>
        <img src = ${`https://image.tmdb.org/t/p/w500/${index.poster_path}`} id="card--img--zero"/>
          <div id='card--title--zero'>${index.title}</div>
          <div id='card--year--zero'>${index.release_date}</div> 
        </div>
        `
    ).join(''); 
  
  }
 myIndexZero();

//PAGINATION
nextButton.addEventListener('click', ()=>{
  if(page != total_pages){
      page++
      myIndexZero(); 
  }
});

prevButton.addEventListener('click', ()=>{
  if(page !== 1){
    page--
    myIndexZero(); 
  } 
});

/*
//PREVENT--DEFAULT
 foromo.addEventListener('click', (e)=>{
    e.preventDefault();
})

  navigation.addEventListener('click', (e)=>{
     e.preventDefault();
})
*/



//CARD--ONE
//const body = document.querySelector('body');
const myIndexOne = async()=>{
  
    const url =`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
      const api = await fetch(url);
      const jsonData = await api.json();
      const jsonDataSecond = jsonData;
        const apiData = `
          <div id='card--one'}>
            <img src = ${`https://image.tmdb.org/t/p/w500/${jsonDataSecond.poster_path}`} id='card--img--one'/>
            </div>
          `
          const apiContent = document.createElement('div');
          apiContent.innerHTML = apiData;
          cardOneSpace.appendChild(apiContent);
  }
  myIndexOne();



//CARD--TWO

 async function myIndexTwo(){
    const url =`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`;
    const api = await fetch(url);
    const jsonData = await api.json();
    const jsonDataSecond = jsonData.results;
    jsonDataSecond.map(index=>{
        const apiData = `
        <div id='card--two'>
        <img src = ${`https://image.tmdb.org/t/p/w500/${index.poster_path}`} id="card--img--two"/>
        </div>
        `
        const apiContent = document.createElement('div');
        apiContent.innerHTML = apiData;
        cardTwoSpace.appendChild(apiContent);
      
    }) 
  }
  myIndexTwo();