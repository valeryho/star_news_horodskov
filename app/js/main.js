// console.log();
window.addEventListener("load", Init);




function Init() {
    
    var country_base = [];
    country_base = [{ abr: "ca", name: "Canada", capitol: "Ottawa" },
                    { abr: "ua", name: "Ukraine", capitol: "Kiev" }];
    AddcountrY(country_base);

    
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
    
    for (var i = 0; i < country_base.length; i++) {
        if (country==country_base[i].abr)
        
        {WeatherRequest(country_base[i]);}
    }
    
   
    

}


   


function AddcountrY(country_base)
{
    var country = document.querySelector(".select_coutry");
   
    for (var i = 0; i < country_base.length; i++) {
        var opt_val=document.createElement("option");
        opt_val.setAttribute("value", country_base[i].abr);
        opt_val.innerHTML = country_base[i].name
        country.appendChild(opt_val);   

         }

}


function WeatherRequest(country_base) {
    var xhr = new XMLHttpRequest();
    var url = "https://api.openweathermap.org/data/2.5/forecast?q="+country_base.capitol+","+country_base.abr+"&APPID=f60d5e7186d120f5264af6546fd57187";
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
             console.log("weather",data);
             var tmp_weather=document.querySelector(".weather");
            RemoveAllElementFromDOM(tmp_weather);

           
             for (var counter = 0; counter < 40; counter+=8) {
                 Show_day_wether(data,counter);
                 
                 
             }
        }
    }
}

function Show_day_wether (w_base,counter) {
    
    var weather = document.querySelector(".weather")
      
    var weather_elements=document.createElement("div");
    var date = document.createElement("div");
    var w_pict = document.createElement("img");
    var t_diap = document.createElement("div");
    var upper_t = document.createElement("div");
    var   lower_t = document.createElement("div");
    var weather_elements_det = document.createElement("div");
    
    weather_elements.className ="weather_elements";
    date.className ="date";
    w_pict.className = "w_pict";
    t_diap.className = "  t_diap";
    upper_t.className ="upper_t";
    lower_t.className="lower_t";

    weather.appendChild(weather_elements);
    weather_elements.appendChild(date);
    weather_elements.appendChild(w_pict);
    weather_elements.appendChild(t_diap);

    t_diap.appendChild(upper_t);
    t_diap.appendChild(lower_t);


    
    date.innerHTML = w_base.list[counter].dt_txt;
    w_pict.innerHTML = w_base.list[counter].weather[0].icon;


    w_pict.setAttribute("src", "https://openweathermap.org/img/w/" + w_base.list[counter].weather[0].icon +".png");

   
    upper_t.innerHTML = Math.round(w_base.list[counter].main.temp_max-273)+" C";
    lower_t.innerHTML = Math.round(w_base.list[counter].main.temp_min - 273)+" C";


    // weather_elements_det.className = "weather_elements_det";


      
    
}




function Request(categorie, api_key, country) {
    var xhr = new XMLHttpRequest();
    var url = "https://newsapi.org/v2/top-headlines?country=" + country + "&category=" + categorie.name + "&" + "apiKey=" + api_key;
    
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
