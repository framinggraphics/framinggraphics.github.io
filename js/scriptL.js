/* ! */

$(document).ready(function () {

    function chwidth(width) {
        document.getElementById('navbar').style.width = width;
        }

        var indexnumber = Array.from(Array(57).keys())
        var code = [
            "Aa1",
            "Ab1",
            "Ac1",
            "Ad1",
            "Aa2",
            "Ab2", 
            "Ac2",
            "Ad2",
            "Aa3",
            "Ab3",
            "Ac3",
            "Ad3",
            "Aa4",
            "Ab4",
            "Ac4",
            "Ad4",
            "Aa5",
            "Ab5",
            "Ac5", 
            "Ad5",
            "Aa6",
            "Ab6",
            "Ac6",
            "Ad6",
            "Aa7",
            "Ab7",
            "Ac7",
            "Ad7",
            "Aa8",
            "Ab8",
            "Ac8",
            "Ad8", 
            "Ae1",
            "Af1",
            "Ag1",
            "Ah1",
            "Ae2",
            "Af2",
            "Ag2",
            "Ah2",
            "Ae3",
            "Af3",
            "Ag3",
            "Ah3",
            "Ae4", 
            "Af4",
            "Ag4",
            "Ah4",
            "Ae5",
            "Af5",
            "Ag5",
            "Ah5",
            "Ae6",
            "Af6",
            "Ag6",
            "Ah6",
            "Ae7", ];
    
        var timecode = [
            "0:01:02",
            "0:01:20",
            "0:01:33",
            "0:01:34",
            "0:01:41", 
            "0:01:43",
            "0:01:45",
            "0:01:49",
            "0:02:07",
            "0:02:16",
            "0:02:22",
            "0:02:34",
            "0:03:06",
            "0:03:08",
            "0:03:10",
            "0:03:22",
            "0:03:51",
            "0:04:05",
            "0:04:06",
            "0:04:09",
            "0:04:14",
            "0:04:25",
            "0:05:06",
            "0:05:27",
            "0:05:45",
            "0:07:06",
            "0:07:25",
            "0:07:59",
            "0:08:05",
            "0:08:08",
            "0:08:32",
            "0:08:44",
            "0:08:47",
            "0:09:25",
            "0:10:37",
            "0:11:26",
            "0:13:30",
            "0:13:37",
            "0:13:40",
            "0:13:44",
            "0:19:30",
            "0:20:08",
            "0:46:54",
            "0:48:49",
            "0:49:47",
            "0:49:48",
            "0:49:50",
            "0:52:44",
            "1:09:54",
            "1:24:45",
            "1:29:13",
            "1:29:43",
            "1:37:33",
            "1:39:10",
            "1:51:46", ];
    
        var screencap = [
            "/images/L/0_01_02.png",
            "/images/L/0_01_20.png",
            "/images/L/0_01_33.png",
            "/images/L/0_01_34.png",
            "/images/L/0_01_41.png", 
            "/images/L/0_01_43.png",
            "/images/L/0_01_45.png",
            "/images/L/0_01_49.png",
            "/images/L/0_02_07.png",
            "/images/L/0_02_16.png",
            "/images/L/0_02_22.png",
            "/images/L/0_02_34.png",
            "/images/L/0_03_06.png",
            "/images/L/0_03_08.png",
            "/images/L/0_03_10.png",
            "/images/L/0_03_22.png",
            "/images/L/0_03_51.png",
            "/images/L/0_04_05.png",
            "/images/L/0_04_06.png",
            "/images/L/0_04_09.png",
            "/images/L/0_04_14.png",
            "/images/L/0_04_25.png",
            "/images/L/0_05_06.png",
            "/images/L/0_05_27.png",
            "/images/L/0_05_45.png",
            "/images/L/0_07_06.png",
            "/images/L/0_07_25.png",
            "/images/L/0_07_59.png",
            "/images/L/0_08_05.png",
            "/images/L/0_08_08.png",
            "/images/L/0_08_32.png",
            "/images/L/0_08_44.png",
            "/images/L/0_08_47.png",
            "/images/L/0_09_25.png",
            "/images/L/0_10_37.png",
            "/images/L/0_11_26.png",
            "/images/L/0_13_30.png",
            "/images/L/0_13_37.png",
            "/images/L/0_13_40.png",
            "/images/L/0_13_44.png",
            "/images/L/0_19_30.png",
            "/images/L/0_20_08.png",
            "/images/L/0_46_54.png",
            "/images/L/0_48_49.png",
            "/images/L/0_49_47.png",
            "/images/L/0_49_48.png",
            "/images/L/0_49_50.png",
            "/images/L/0_52_44.png",
            "/images/L/1_09_54.png",
            "/images/L/1_24_45.png",
            "/images/L/1_29_13.png",
            "/images/L/1_29_43.png",
            "/images/L/1_37_33.png",
            "/images/L/1_39_10.png",
            "/images/L/1_51_46.png", ];
    
    
        var screencapthumb = [
            "/images/L/thumb_0_01_02.png",
            "/images/L/thumb_0_01_20.png",
            "/images/L/thumb_0_01_33.png",
            "/images/L/thumb_0_01_34.png",
            "/images/L/thumb_0_01_41.png", 
            "/images/L/thumb_0_01_43.png",
            "/images/L/thumb_0_01_45.png",
            "/images/L/thumb_0_01_49.png",
            "/images/L/thumb_0_02_07.png",
            "/images/L/thumb_0_02_16.png",
            "/images/L/thumb_0_02_22.png",
            "/images/L/thumb_0_02_34.png",
            "/images/L/thumb_0_03_06.png",
            "/images/L/thumb_0_03_08.png",
            "/images/L/thumb_0_03_10.png",
            "/images/L/thumb_0_03_22.png",
            "/images/L/thumb_0_03_51.png",
            "/images/L/thumb_0_04_05.png",
            "/images/L/thumb_0_04_06.png",
            "/images/L/thumb_0_04_09.png",
            "/images/L/thumb_0_04_14.png",
            "/images/L/thumb_0_04_25.png",
            "/images/L/thumb_0_05_06.png",
            "/images/L/thumb_0_05_27.png",
            "/images/L/thumb_0_05_45.png",
            "/images/L/thumb_0_07_06.png",
            "/images/L/thumb_0_07_25.png",
            "/images/L/thumb_0_07_59.png",
            "/images/L/thumb_0_08_05.png",
            "/images/L/thumb_0_08_08.png",
            "/images/L/thumb_0_08_32.png",
            "/images/L/thumb_0_08_44.png",
            "/images/L/thumb_0_08_47.png",
            "/images/L/thumb_0_09_25.png",
            "/images/L/thumb_0_10_37.png",
            "/images/L/thumb_0_11_26.png",
            "/images/L/thumb_0_13_30.png",
            "/images/L/thumb_0_13_37.png",
            "/images/L/thumb_0_13_40.png",
            "/images/L/thumb_0_13_44.png",
            "/images/L/thumb_0_19_30.png",
            "/images/L/thumb_0_20_08.png",
            "/images/L/thumb_0_46_54.png",
            "/images/L/thumb_0_48_49.png",
            "/images/L/thumb_0_49_47.png",
            "/images/L/thumb_0_49_48.png",
            "/images/L/thumb_0_49_50.png",
            "/images/L/thumb_0_52_44.png",
            "/images/L/thumb_1_09_54.png",
            "/images/L/thumb_1_24_45.png",
            "/images/L/thumb_1_29_13.png",
            "/images/L/thumb_1_29_43.png",
            "/images/L/thumb_1_37_33.png",
            "/images/L/thumb_1_39_10.png",
            "/images/L/thumb_1_51_46.png", ];
    
    
    function createclasses() {
        var classes = [
            "link digital linear script",
            "context application print linear script",
            "support print bodonian linear",
            "link print bodonian medieval venetian",
            "support print bodonian linear medieval venetian",
            "support print linear transitional",
            "support print medieval venetian",
            "support print lapidary linear script transitional",
            "support postproduction linear",
            "support postproduction linear",
            "support postproduction linear",
            "support postproduction linear",
            "title postproduction linear ",
            "context print linear",
            "context print linear",
            "support application linear",
            "support application linear",
            "context application lapidary",
            "support application lapidary",
            "support application lapidary",
            "support application lapidary",
            "context application bodonian",
            "context print linear script",
            "context print linear",
            "context application bodonian",
            "figureofspeech print linear",
            "support application bodonian",
            "context application bodonian linear",
            "context application linear",
            "support print bodonian linear",
            "support print linear",
            "link digital linear",
            "support application linear",
            "context application bodonian linear",
            "context application lapidary",
            "context application lapidary",
            "context application linear",
            "context application linear",
            "support print bodonian linear medieval transitional",
            "heroprop print bodonian linear script",
            "support print fantasy lapidary",
            "figureofspeech application linear script",
            "context application linear",
            "herald print lapidary script",
            "context application fantasy linear",
            "support print medieval transitional",
            "context application",
            "context print script transitional",
            "figureofspeech print linear",
            "figureofspeech print slab",
            "context application linear",
            "support application lapidary script",
            "herald print linear",
            "herald print linear",
            "context print linear",
            "herald print linear",
            "context application linear",];

    $('.wrapper').each(function (i) {
        $(this).addClass("filter-item");
        $(this).addClass(classes[i % classes.length]);
        
    });
    
}

function creategallery() {

    
    $('.screencapwrapper').each(function (i) {

        $(this).append('<img src="' + screencapthumb[i % screencapthumb.length] + '" data-src=' + screencap[i % screencap.length] + ' class="screencap lazyload" id="screencap'+ indexnumber[i % indexnumber.length] + '"/>');
    });
    

}

function createtimecodes() {
   

    $('.wrapper').each(function (i) {

        $(this).append('<a href="' + screencap[i % screencap.length] + '" data-lightbox="lightbox'+ indexnumber[i % indexnumber.length] + '" data-title="Iron Man | '+ code[i % code.length] + ' | '+ timecode[i % timecode.length] + '"><div class="mouseovercontainer" onMouseOver="show(\'frame' + indexnumber[i % indexnumber.length] + '\')" onMouseOut="hide(\'frame' + indexnumber[i % indexnumber.length] + '\')"><div class="timecodebg" id="frame' + indexnumber[i % indexnumber.length] + '"><span class="timecode">' + timecode[i % timecode.length] + '</span></div></div></a>');
    });
}

function createclassification() {
    var classification = [
        "/images/L/classification/0.svg",
        "/images/L/classification/1.svg",
        "/images/L/classification/2.svg",
        "/images/L/classification/3.svg",
        "/images/L/classification/4.svg",
        "/images/L/classification/5.svg",
        "/images/L/classification/6.svg",
        "/images/L/classification/7.svg",
        "/images/L/classification/8.svg",
        "/images/L/classification/9.svg",
        "/images/L/classification/10.svg",
        "/images/L/classification/11.svg",
        "/images/L/classification/12.svg",
        "/images/L/classification/13.svg",
        "/images/L/classification/14.svg",
        "/images/L/classification/15.svg",
        "/images/L/classification/16.svg",
        "/images/L/classification/17.svg",
        "/images/L/classification/18.svg",
        "/images/L/classification/19.svg",
        "/images/L/classification/20.svg",
        "/images/L/classification/21.svg",
        "/images/L/classification/22.svg",
        "/images/L/classification/23.svg",
        "/images/L/classification/24.svg",
        "/images/L/classification/25.svg",
        "/images/L/classification/26.svg",
        "/images/L/classification/27.svg",
        "/images/L/classification/28.svg",
        "/images/L/classification/29.svg",
        "/images/L/classification/30.svg",
        "/images/L/classification/31.svg",
        "/images/L/classification/32.svg",
        "/images/L/classification/33.svg",
        "/images/L/classification/34.svg",
        "/images/L/classification/35.svg",
        "/images/L/classification/36.svg",
        "/images/L/classification/37.svg",
        "/images/L/classification/38.svg",
        "/images/L/classification/39.svg",
        "/images/L/classification/40.svg",
        "/images/L/classification/41.svg",
        "/images/L/classification/42.svg",
        "/images/L/classification/43.svg",
        "/images/L/classification/44.svg",
        "/images/L/classification/45.svg",
        "/images/L/classification/46.svg",
        "/images/L/classification/47.svg",
        "/images/L/classification/48.svg",
        "/images/L/classification/49.svg",
        "/images/L/classification/50.svg",
        "/images/L/classification/51.svg",
        "/images/L/classification/52.svg",
        "/images/L/classification/53.svg",
        "/images/L/classification/54.svg",
        "/images/L/classification/55.svg",
        "/images/L/classification/56.svg",
        "/images/L/classification/57.svg", ];

    var classcontainer= document.getElementById("classificationblock");
    for (var i=0; i < classification.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("id","classification" + i % classification.length);
        div.setAttribute("class","classification");
        div.innerHTML = '<img class="svg" src=' + classification[i % classification.length] + ' id="classification' + i % classification.length + '"/>';
        classcontainer.appendChild(div);
    }
}

function createcodes() {
    

    $('.classification').each(function (i) {

        $(this).prepend('<span id="code' + indexnumber[i % indexnumber.length] + '" style="color: var(--accent-color);">' + code[i % code.length] + '</span><br>');
    });
}

function show(id) {
    document.getElementById(id).style.display = "block";
}
function hide(id) {
    document.getElementById(id).style.display = "none";
}

/*
var distance1 = $('#anchor-point1').offset().top,
    distance2 = $('#anchor-point2').offset().top,
    distance3 = $('#anchor-point3').offset().top,
    distance4 = $('#anchor-point4').offset().top;

$(window).scroll(function() {
    if ( $(window).scrollTop() >= distance1 ) {
        $('#title1').removeClass('invisibletitle');
    } else {
        $('#title1').addClass('invisibletitle');
    }
});

$(window).scroll(function() {
    if ( $(window).scrollTop() >= distance2 ) {
        $('#title2').removeClass('invisibletitle');
    } else {
        $('#title2').addClass('invisibletitle');
    }
});

$(window).scroll(function() {
    if ( $(window).scrollTop() >= distance3 ) {
        $('#title3').removeClass('invisibletitle');
    } else {
        $('#title3').addClass('invisibletitle');
    }
});

$(window).scroll(function() {
    if ( $(window).scrollTop() >= distance4 ) {
        $('#title4').removeClass('invisibletitle');
    } else {
        $('#title4').addClass('invisibletitle');
    }
}); 

*/

    function UncheckAll(){ 
        var w = document.getElementsByTagName('input'); 
        for(var i = 0; i < w.length; i++){ 
          if(w[i].type=='checkbox'){ 
            w[i].checked = false; 
          }
        }
    }

UncheckAll();
createclasses();
creategallery();
createtimecodes();
createclassification();
createcodes();
lazyload();

});


