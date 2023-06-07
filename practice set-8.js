document.getElementById("button").addEventListener("click",function(){
    var url= "https://www.google.com/search?q=javascript";
    var win= window.open(url,"","width=500,scrollbars=yes,resizable=yes");
    win.focus();
    
})

