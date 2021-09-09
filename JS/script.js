const btnSubmit = $('#btnSubmit')
 btnSubmit.on('click', function(e){

    let date = document.getElementById('data').value

   let nasa = $.ajax({url: `https://api.nasa.gov/planetary/apod?api_key=QtXhoBYIHpmOlsdCllD57R9yXLZLgIMMgjZRqZVE&date=${date}`, async: false}).responseJSON
   console.log(nasa);
   e.preventDefault();

   if ( document.getElementById('nazinha') == null){
    document.getElementById('mainContent').innerHTML += `<div id="textix">${nasa.explanation}</div>`
    document.getElementById('mainContent').innerHTML += `<img src="${nasa.url}" id="nazinha">`
   }
   else {
       document.getElementById('nazinha').src = nasa.url
       document.getElementById('textix').innerText = nasa.explanation
   }
}) 

