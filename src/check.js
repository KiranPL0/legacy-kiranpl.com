//check.js

/*

oooo         o8o                                 
`888         `"'                                 
 888  oooo  oooo  oooo d8b  .oooo.   ooo. .oo.   
 888 .8P'   `888  `888""8P `P  )88b  `888P"Y88b  
 888888.     888   888      .oP"888   888   888  
 888 `88b.   888   888     d8(  888   888   888  
o888o o888o o888o d888b    `Y888""8o o888o o888o 
made by kiran no steal or i murder and kill!!!!!!!


*/

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

function checkcookie() {
    var myCookie = getCookie("accept");

    if (myCookie == null) {
        window.location.replace("../no.html?h=" + window.location.href);
    }
    else {
        if (myCookie == 'YES'){

        }else{
            window.location.replace("../no.html?h=" + window.location.href);
        }
    }
}
