function consumirAPI(){

    console.log("Iniciando Busqueda");

    var apikey = "bc9a33c42ae0a83d7728889cff932621";
    var ts = "1000";
    var hash = "1b805bf61e460a63d6fff6de58155085";
    var url = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;

     var cabp = document.getElementById("marvel"); 

     fetch (url) 
     .then(response => response.json())
     .then(json => {

            for( item of json.data.results){

                console.log(item.name);
                var div = document.createElement("div");
                var img = document.createElement("img");
                    
                var label = document.createElement("label");
                label.innerText = item.name;

                var texto = document.createElement("p");
                texto.innerText = item.description;

                var linkSeries = document.createElement("a");
                 linkSeries.innerText = "Ver Series";
                 linkSeries.target = "_blank";
                 linkSeries.href = "html/series.html?Cristian=" + item.series.collectionURI;
                

                 var linkComics = document.createElement("a");
                 linkComics.innerText = "Comics";
                 linkComics.target = "_blank";
                 linkComics.href = "html/comics.html?Cristian=" + item.comics.collectionURI;

                 var linkEventos = document.createElement("a");
                 linkEventos.innerText = "Eventos";
                 linkEventos.target = "_blank";
                 linkEventos.href = "html/eventos.html?Cristian=" + item.events.collectionURI;
             
                 var linkStories = document.createElement("a");
                 linkStories.innerText = "Stories";
                 linkStories.target = "_blank";
                 linkStories.href = "#" + item.series.collectionURI;
             
                 img.src = item.thumbnail.path + "." + item.thumbnail.extension;
                 div.appendChild(label);
                 div.appendChild(img);
                 div.appendChild(texto);
                 cabp.appendChild(div);
                 div.appendChild(linkSeries);
                 div.appendChild(linkComics);
                 div.appendChild(linkEventos);
                 div.appendChild(linkStories);
        }
    });
}
 function  serieMarvel(){

    const pamURL = window.location.search;
    const indicadorURL = new URLSearchParams(pamURL);
    const encontrar = indicadorURL.get('Cristian');
    var url =  convertirHTTPS(encontrar)

    var contenido = document.getElementById("contenido")
    fetch(url)
    .then(response => response.json())
    .then(json => {

        for(item of json.data.results){

            var title = document.createElement("p")
            title.innerText = item.title
           

            var link = document.createElement("a")
            link.href = item.urls[0].url
            link.innerText = item.urls[0].url

            contenido.appendChild(title)
            contenido.appendChild(link)
            
        }
    })
}

function  comicsMarvel(){

    const pamURL = window.location.search;
    const indicadorURL = new URLSearchParams(pamURL);
    const encontrar = indicadorURL.get('Cristian');
    var url =  convertirHTTPS(encontrar)

    var contenido = document.getElementById("contenido")
    fetch(url)
    .then(response => response.json())
    .then(json => {

        for(item of json.data.results){

            var title = document.createElement("p")
            title.innerText = item.title
           

            var link = document.createElement("a")
            link.href = item.urls[0].url
            link.innerText = item.urls[0].url

            contenido.appendChild(title)
            contenido.appendChild(link)
            
        }
    })
}

function  eventosMarvel(){

    const pURL = window.location.search;
    const indicadorURL = new URLSearchParams(pURL);
    const encontrar = indicadorURL.get('Cristian');
    var url =  convertirHTTPS(encontrar)

    var contenido = document.getElementById("contenido")
    fetch(url)
    .then(response => response.json())
    .then(json => {

        for(item of json.data.results){

            var title = document.createElement("p")
            title.innerText = item.title
           

            var link = document.createElement("a")
            link.href = item.urls[0].url
            link.innerText = item.urls[0].url

            contenido.appendChild(title)
            contenido.appendChild(link)
            
        }
    })
}


function  storiesMarvel(){

    const paramURL = window.location.search;
    const indicadorURL = new URLSearchParams(paramURL);
    const encontrar = indicadorURL.get('Cristian');
    var url =  convertirHTTPS(encontrar)

    var contenido = document.getElementById("contenido")
    fetch(url)
    .then(response => response.json())
    .then(json => {

        for(item of json.data.results){

            var title = document.createElement("p")
            title.innerText = item.title
           

            var link = document.createElement("a")
            link.href = item.urls[0].url
            link.innerText = item.urls[0].url

            contenido.appendChild(title)
            contenido.appendChild(link)
            
        }
    })
}


function convertirHTTPS(urlInsegura){
    var apikey = "bc9a33c42ae0a83d7728889cff932621";
    var ts = "1000";
    var hash = "1b805bf61e460a63d6fff6de58155085";
    var https ="https://" + urlInsegura.substring(7, urlInsegura.length) + '?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;

    return https;

}


