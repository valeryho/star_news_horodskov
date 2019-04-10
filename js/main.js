// console.log();
window.addEventListener("load",Init);

function Init()
{

    var api_key = "9a74d04fa22a42b6bfe20a4df5895f97";
    var country = "us" ;
    var categorie=[];
    categorie=[ 
        {name: "sport", fillfunction: SportNews },
        { name: "enterteiment", fillfunction: EnterteimentNews },
        { name: "нelth", fillfunction: HelthNews },
        { name: "technology", fillfunction: TechnologyNews },
        { name: "science", fillfunction: ScienceNews },
        ]
    for (let i = 0; i < categorie.length; i++) {
        Request(categorie[i], api_key, country)
    
    }


}

function Request(categorie,api_key,country)
{
    var xhr= new XMLHttpRequest();
    var url = "https://newsapi.org/v2/top-headlines?country="+country+"&category="+categorie.name+"&"+"apiKey="+"9a74d04fa22a42b6bfe20a4df5895f97";
    xhr.open("GET",url,true);
    xhr.send();


    xhr.onreadystatechange=function(){
        if (xhr.readyState !=4) return;
        if (xhr.status !=200 )
        {
            var errstatus = xhr.status;
            var errstatustext = xhr.statusText;
            console.log (errstatus,"+",errstatustext);
        }
        else
        {
            var data = JSON.parse(xhr.responseText);
            categorie.fillfunction(data);
        }
    }
}
function SportNews(data)
{
    console.log(data);
}
function EnterteimentNews(data) {
    console.log(data);
}
function HelthNews(data) {
    console.log(data);
}
function TechnologyNews(data) {
    console.log(data);
}
function ScienceNews(data) {
    console.log(data);
}