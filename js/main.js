// console.log();
window.addEventListener("load",Init);

function Init()
{
    console.log("init");
    var url_sport = "https://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=9a74d04fa22a42b6bfe20a4df5895f97";
    Request(url_sport,SportNews);
    var url_Enterteiment = "https://newsapi.org/v2/top-headlines?country=ua&category=entertainment&apiKey=9a74d04fa22a42b6bfe20a4df5895f97";
    Request(url_Enterteiment, EnterteimentNews);
    var url_Helth = "https://newsapi.org/v2/top-headlines?country=ua&category=health&apiKey=9a74d04fa22a42b6bfe20a4df5895f97";
    Request(url_Helth, HelthNews);
    var url_Technology = "https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=9a74d04fa22a42b6bfe20a4df5895f97";
    Request(url_Technology, TechnologyNews);
    var url_Science = "https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=9a74d04fa22a42b6bfe20a4df5895f97";
    Request(url_Science, ScienceNews);

}

function Request(url,calback)
{
    var xhr= new XMLHttpRequest();
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
            calback(data);
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