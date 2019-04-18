// console.log();
window.addEventListener("load", Init);

function Init() {

    var api_key = "9a74d04fa22a42b6bfe20a4df5895f97";
    var country = document.querySelector(".select_coutry").value;
    console.log(country);
    var categorie = [];

    categorie = [
        { name: "sport", fillfunction: SportNews },
        { name: "entertainment", fillfunction: EnterteimentNews },
        { name: "health", fillfunction: HelthNews },
        { name: "technology", fillfunction: TechnologyNews },
        { name: "science", fillfunction: ScienceNews },
    ]
    for (var i = 0; i < categorie.length; i++) {
        Request(categorie[i], api_key, country);
        


    }


}

function Request(categorie, api_key, country) {
    var xhr = new XMLHttpRequest();
    var url = "https://newsapi.org/v2/top-headlines?country=" + country + "&category=" + categorie.name + "&" + "apiKey=" + api_key;
    console.log(url);
    xhr.open("GET", url, true);
    xhr.send();


    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            var errstatus = xhr.status;
            var errstatustext = xhr.statusText;
            console.log(errstatus, "+", errstatustext);
        }
        else {
            var data = JSON.parse(xhr.responseText);
            categorie.fillfunction(data);
            console.log(data);
        }
    }
}
function SportNews(data) {
    var _element = document.querySelector("#sport");
    
    RemoveAllElementFromDOM(_element);
    for (var i = 0; i < 5; i++) {
        var h3 = document.createElement("h3");
        var img = document.createElement("img");
        var description = document.createElement("div");
        var source = document.createElement("div");
        var date = document.createElement("div");


        h3.className = "newsTitle";
        img.className = "img_show";
        source.className = "news_source";
        description.className = "news_description"
        date.className = "news_date";

        h3.innerHTML = data.articles[i].title;
        img.setAttribute("src", data.articles[i].urlToImage);
        img.setAttribute("alt", data.articles[i].title);
        description.innerHTML = data.articles[i].description;
        source.innerHTML = data.articles[i].author;
        date.innerHTML = data.articles[i].publishedAt;



        _element.appendChild(h3);
        _element.appendChild(img);
        _element.appendChild(description);
        _element.appendChild(source);
        _element.appendChild(date);
        
    }



}
function EnterteimentNews(data) {
    
    var _element = document.querySelector("#entertainment");
    
    RemoveAllElementFromDOM(_element);
    for (var i = 0; i < 5; i++) {
        var h3 = document.createElement("h3");
        var img = document.createElement("img");
        var description = document.createElement("div");
        var source = document.createElement("div");
        var date = document.createElement("div");


        h3.className = "newsTitle";
        img.className = "img_show";
        source.className = "news_source";
        description.className = "news_description"
        date.className = "news_date";

        h3.innerHTML = data.articles[i].title;
        img.setAttribute("src", data.articles[i].urlToImage);
        img.setAttribute("alt", data.articles[i].title);
        description.innerHTML = data.articles[i].description;
        source.innerHTML = data.articles[i].author;
        date.innerHTML = data.articles[i].publishedAt;



        _element.appendChild(h3);
        _element.appendChild(img);
        _element.appendChild(description);
        _element.appendChild(source);
        _element.appendChild(date);
    }


}
function HelthNews(data) {
   
    var _element = document.querySelector("#helth");
    RemoveAllElementFromDOM(_element);

    for (var i = 0; i < 5; i++) {
        var h3 = document.createElement("h3");
        var img = document.createElement("img");
        var description = document.createElement("div");
        var source = document.createElement("div");
        var date = document.createElement("div");


        h3.className = "newsTitle";
        img.className = "img_show";
        source.className = "news_source";
        description.className = "news_description"
        date.className = "news_date";

        h3.innerHTML = data.articles[i].title;
        img.setAttribute("src", data.articles[i].urlToImage);
        img.setAttribute("alt", data.articles[i].title);
        description.innerHTML = data.articles[i].description;
        source.innerHTML = data.articles[i].author;
        date.innerHTML = data.articles[i].publishedAt;



        _element.appendChild(h3);
        _element.appendChild(img);
        _element.appendChild(description);
        _element.appendChild(source);
        _element.appendChild(date);
    }

}
function TechnologyNews(data) {
    var _element = document.querySelector("#tehnology");
    
    RemoveAllElementFromDOM(_element);
    for (var i = 0; i < 5; i++) {
        var h3 = document.createElement("h3");
        var img = document.createElement("img");
        var description = document.createElement("div");
        var source = document.createElement("div");
        var date = document.createElement("div");


        h3.className = "newsTitle";
        img.className = "img_show";
        source.className = "news_source";
        description.className = "news_description"
        date.className = "news_date";

        h3.innerHTML = data.articles[i].title;
        img.setAttribute("src", data.articles[i].urlToImage);
        img.setAttribute("alt", data.articles[i].title);
        description.innerHTML = data.articles[i].description;
        source.innerHTML = data.articles[i].author;
        date.innerHTML = data.articles[i].publishedAt;



        _element.appendChild(h3);
        _element.appendChild(img);
        _element.appendChild(description);
        _element.appendChild(source);
        _element.appendChild(date);
    }
}
function ScienceNews(data) {
    var _element = document.querySelector("#science");
    RemoveAllElementFromDOM(_element);

    for (var i = 0; i < 5; i++) {
        var h3 = document.createElement("h3");
        var img = document.createElement("img");
        var description = document.createElement("div");
        var source = document.createElement("div");
        var date = document.createElement("div");


        h3.className = "newsTitle";
        img.className = "img_show";
        source.className = "news_source";
        description.className = "news_description"
        date.className = "news_date";

        h3.innerHTML = data.articles[i].title;
        img.setAttribute("src", data.articles[i].urlToImage);
        img.setAttribute("alt", data.articles[i].title);
        description.innerHTML = data.articles[i].description;
        source.innerHTML = data.articles[i].author;
        date.innerHTML = data.articles[i].publishedAt;



        _element.appendChild(h3);
        _element.appendChild(img);
        _element.appendChild(description);
        _element.appendChild(source);
        _element.appendChild(date);
    }
}

function RemoveAllElementFromDOM(domelement)
{
        while (domelement.hasChildNodes()) {
            domelement.removeChild(domelement.firstChild);
        }
}
