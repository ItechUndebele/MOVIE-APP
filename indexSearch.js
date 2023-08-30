
const searchInputValue = document.querySelector('#searchInputValue');
const searchApiSpace = document.querySelector('#search--api--space');
const nextButtonFor = document.querySelector('#next--button--for');
const prevButtonFor = document.querySelector('#prev--button--for');
const axception = document.querySelector('#axception');

let search;
let search_page = 1;
const key = '02e814d88a3e5259d80058c8c083f939';

//SEARCH
async function searchFunction(){
  try{
    const url =`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${key}&page=${search_page}`;
    const api = await fetch(url);
    const jsonData = await api.json();
    const jsonDataSecond = jsonData.results;
    total_pages_search = jsonData.total_pages;
   // console.log(jsonData);
  
    searchApiSpace.innerHTML = jsonDataSecond.map(index=>
        `
        <div id='search--api'>
        <img src = ${`https://image.tmdb.org/t/p/w500/${index.poster_path}`} id="search--api--img"/>
        </div>
        `  
    ).join('');
  } catch(TypeError){
           axception.innerHTML = `0 match found`;
  } 
  
  }
  
  


  //SEARCH--INPUT
  searchInputValue.addEventListener('keyup', (e)=>{
      search = e.target.value.toLowerCase();
      searchFunction();
  })
  //PAGINATION
  
nextButtonFor.addEventListener('click', ()=>{
    if(search_page != total_pages_search){
       search_page++
       searchFunction(); 
    }
  });
  
prevButtonFor.addEventListener('click', ()=>{
    if(search_page !== 1){
      search_page--
      searchFunction(); 
    } 
  });

  
  