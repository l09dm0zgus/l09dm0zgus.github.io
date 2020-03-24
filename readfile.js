function loadMyFile()
{
    var mydata = JSON.parse(data);
    document.getElementById("version").innerHTML=mydata[0].Version;
    document.getElementById("changes").innerHTML=mydata[0].Changes;
    
}