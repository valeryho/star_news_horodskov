// console.log();
window.addEventListener("load",Init);

function Init()
{
    console.log("init");
    var url = "https://newsapi.org/v2/top-headlines?country=ua&apiKey=9a74d04fa22a42b6bfe20a4df5895f97";
    Request(url,SportNews);
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