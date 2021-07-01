/* ! */

$(document).ready(function () {

    function chwidth(width) {
        document.getElementById('navbar').style.width = width;
        }

    var indexnumber = Array.from(Array(104).keys())
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
        "Ae7",
        "Af7", 
        "Ag7",
        "Ah7",
        "Ae8",
        "Af8",
        "Ag8",
        "Ah8",
        "Ai1",
        "Aj1",
        "Ak1",
        "Al1",
        "Ai2",
        "Aj2",
        "Ak2", 
        "Al2",
        "Ai3",
        "Aj3",
        "Ak3",
        "Al3",
        "Ai4",
        "Aj4",
        "Ak4",
        "Al4",
        "Ai5",
        "Aj5",
        "Ak5",
        "Al5", 
        "Ai6",
        "Aj6",
        "Ak6",
        "Al6",
        "Ai7",
        "Aj7",
        "Ak7",
        "Al7",
        "Ai8",
        "Aj8",
        "Ak8",
        "Al8",
        "Am1", 
        "An1",
        "Ao1",
        "Ap1",
        "Am2",
        "An2",
        "Ao2",
        "Ap2", ];

    var timecode = [
        "0:01:11",
        "0:02:11",
        "0:03:28",
        "0:04:15",
        "0:04:24", 
        "0:04:27",
        "0:04:32",
        "0:04:40",
        "0:04:44",
        "0:04:45",
        "0:04:48",
        "0:04:52",
        "0:04:57",
        "0:05:01",
        "0:05:11",
        "0:05:12",
        "0:05:16",
        "0:05:21",
        "0:05:31",
        "0:07:13",
        "0:09:17",
        "0:09:20",
        "0:10:51",
        "0:11:10",
        "0:12:36",
        "0:12:38",
        "0:12:57",
        "0:13:08",
        "0:13:11",
        "0:13:36",
        "0:14:18",
        "0:14:52",
        "0:15:52",
        "0:17:35",
        "0:21:16",
        "0:23:42",
        "0:23:46",
        "0:26:34",
        "0:26:51",
        "0:27:44",
        "0:27:52",
        "0:27:55",
        "0:27:57",
        "0:28:12",
        "0:37:49",
        "0:42:04",
        "0:42:07",
        "0:43:17",
        "0:43:37",
        "0:44:04",
        "0:46:21",
        "0:46:34",
        "0:46:40",
        "0:46:45",
        "0:48:43",
        "0:48:57",
        "0:49:07",
        "0:49:18",
        "0:52:09",
        "0:53:22",
        "0:54:19",
        "0:54:25",
        "0:54:46",
        "0:56:04",
        "0:56:16",
        "0:56:55",
        "0:57:00",
        "0:57:20",
        "0:57:26",
        "0:57:59",
        "0:58:07",
        "1:00:55",
        "1:01:22",
        "1:01:26",
        "1:02:17",
        "1:03:03",
        "1:05:10",
        "1:05:27",
        "1:06:09",
        "1:07:00",
        "1:07:30",
        "1:08:40",
        "1:12:33",
        "1:13:40",
        "1:16:35",
        "1:18:21",
        "1:19:32",
        "1:19:59",
        "1:31:00",
        "1:31:03",
        "1:31:28",
        "1:41:33",
        "1:41:51",
        "1:41:55",
        "1:44:19",
        "1:46:28",
        "1:47:00",
        "1:50:27",
        "1:50:43",
        "1:50:52",
        "1:53:33",
        "1:53:45",
        "1:54:43",
        "1:57:18", ];

    var screencap = [
        "/images/A/0_01_11.png",
        "/images/A/0_02_11.png",
        "/images/A/0_03_28.png",
        "/images/A/0_04_15.png",
        "/images/A/0_04_24.png",
        "/images/A/0_04_27.png",
        "/images/A/0_04_32.png",
        "/images/A/0_04_40.png",
        "/images/A/0_04_44.png",
        "/images/A/0_04_45.png",
        "/images/A/0_04_48.png",
        "/images/A/0_04_52.png",
        "/images/A/0_04_57.png",
        "/images/A/0_05_01.png",
        "/images/A/0_05_11.png",
        "/images/A/0_05_12.png",
        "/images/A/0_05_16.png",
        "/images/A/0_05_21.png",
        "/images/A/0_05_31.png",
        "/images/A/0_07_13.png",
        "/images/A/0_09_17.png",
        "/images/A/0_09_20.png",
        "/images/A/0_10_51.png",
        "/images/A/0_11_10.png",
        "/images/A/0_12_36.png",
        "/images/A/0_12_38.png",
        "/images/A/0_12_57.png",
        "/images/A/0_13_08.png",
        "/images/A/0_13_11.png",
        "/images/A/0_13_36.png",
        "/images/A/0_14_18.png",
        "/images/A/0_14_52.png",
        "/images/A/0_15_52.png",
        "/images/A/0_17_35.png",
        "/images/A/0_21_16.png",
        "/images/A/0_23_42.png",
        "/images/A/0_23_46.png",
        "/images/A/0_26_34.png",
        "/images/A/0_26_51.png",
        "/images/A/0_27_44.png",
        "/images/A/0_27_52.png",
        "/images/A/0_27_55.png",
        "/images/A/0_27_57.png",
        "/images/A/0_28_12.png",
        "/images/A/0_37_49.png",
        "/images/A/0_42_04.png",
        "/images/A/0_42_07.png",
        "/images/A/0_43_17.png",
        "/images/A/0_43_37.png",
        "/images/A/0_44_04.png",
        "/images/A/0_46_21.png",
        "/images/A/0_46_34.png",
        "/images/A/0_46_40.png",
        "/images/A/0_46_45.png",
        "/images/A/0_48_43.png",
        "/images/A/0_48_57.png",
        "/images/A/0_49_07.png",
        "/images/A/0_49_18.png",
        "/images/A/0_52_09.png",
        "/images/A/0_53_22.png",
        "/images/A/0_54_19.png",
        "/images/A/0_54_25.png",
        "/images/A/0_54_46.png",
        "/images/A/0_56_04.png",
        "/images/A/0_56_16.png",
        "/images/A/0_56_55.png",
        "/images/A/0_57_00.png",
        "/images/A/0_57_20.png",
        "/images/A/0_57_26.png",
        "/images/A/0_57_59.png",
        "/images/A/0_58_07.png",
        "/images/A/1_00_55.png",
        "/images/A/1_01_22.png",
        "/images/A/1_01_26.png",
        "/images/A/1_02_17.png",
        "/images/A/1_03_03.png",
        "/images/A/1_05_10.png",
        "/images/A/1_05_27.png",
        "/images/A/1_06_09.png",
        "/images/A/1_07_00.png",
        "/images/A/1_07_30.png",
        "/images/A/1_08_40.png",
        "/images/A/1_12_33.png",
        "/images/A/1_13_40.png",
        "/images/A/1_16_35.png",
        "/images/A/1_18_21.png",
        "/images/A/1_19_32.png",
        "/images/A/1_19_59.png",
        "/images/A/1_31_00.png",
        "/images/A/1_31_03.png",
        "/images/A/1_31_28.png",
        "/images/A/1_41_33.png",
        "/images/A/1_41_51.png",
        "/images/A/1_41_55.png",
        "/images/A/1_44_19.png",
        "/images/A/1_46_28.png",
        "/images/A/1_47_00.png",
        "/images/A/1_50_27.png",
        "/images/A/1_50_43.png",
        "/images/A/1_50_52.png",
        "/images/A/1_53_33.png",
        "/images/A/1_53_45.png",
        "/images/A/1_54_43.png",
        "/images/A/1_57_18.png", ];

    var screencapthumb = [
        "/images/A/thumb_0_01_11.png",
        "/images/A/thumb_0_02_11.png",
        "/images/A/thumb_0_03_28.png",
        "/images/A/thumb_0_04_15.png",
        "/images/A/thumb_0_04_24.png",
        "/images/A/thumb_0_04_27.png",
        "/images/A/thumb_0_04_32.png",
        "/images/A/thumb_0_04_40.png",
        "/images/A/thumb_0_04_44.png",
        "/images/A/thumb_0_04_45.png",
        "/images/A/thumb_0_04_48.png",
        "/images/A/thumb_0_04_52.png",
        "/images/A/thumb_0_04_57.png",
        "/images/A/thumb_0_05_01.png",
        "/images/A/thumb_0_05_11.png",
        "/images/A/thumb_0_05_12.png",
        "/images/A/thumb_0_05_16.png",
        "/images/A/thumb_0_05_21.png",
        "/images/A/thumb_0_05_31.png",
        "/images/A/thumb_0_07_13.png",
        "/images/A/thumb_0_09_17.png",
        "/images/A/thumb_0_09_20.png",
        "/images/A/thumb_0_10_51.png",
        "/images/A/thumb_0_11_10.png",
        "/images/A/thumb_0_12_36.png",
        "/images/A/thumb_0_12_38.png",
        "/images/A/thumb_0_12_57.png",
        "/images/A/thumb_0_13_08.png",
        "/images/A/thumb_0_13_11.png",
        "/images/A/thumb_0_13_36.png",
        "/images/A/thumb_0_14_18.png",
        "/images/A/thumb_0_14_52.png",
        "/images/A/thumb_0_15_52.png",
        "/images/A/thumb_0_17_35.png",
        "/images/A/thumb_0_21_16.png",
        "/images/A/thumb_0_23_42.png",
        "/images/A/thumb_0_23_46.png",
        "/images/A/thumb_0_26_34.png",
        "/images/A/thumb_0_26_51.png",
        "/images/A/thumb_0_27_44.png",
        "/images/A/thumb_0_27_52.png",
        "/images/A/thumb_0_27_55.png",
        "/images/A/thumb_0_27_57.png",
        "/images/A/thumb_0_28_12.png",
        "/images/A/thumb_0_37_49.png",
        "/images/A/thumb_0_42_04.png",
        "/images/A/thumb_0_42_07.png",
        "/images/A/thumb_0_43_17.png",
        "/images/A/thumb_0_43_37.png",
        "/images/A/thumb_0_44_04.png",
        "/images/A/thumb_0_46_21.png",
        "/images/A/thumb_0_46_34.png",
        "/images/A/thumb_0_46_40.png",
        "/images/A/thumb_0_46_45.png",
        "/images/A/thumb_0_48_43.png",
        "/images/A/thumb_0_48_57.png",
        "/images/A/thumb_0_49_07.png",
        "/images/A/thumb_0_49_18.png",
        "/images/A/thumb_0_52_09.png",
        "/images/A/thumb_0_53_22.png",
        "/images/A/thumb_0_54_19.png",
        "/images/A/thumb_0_54_25.png",
        "/images/A/thumb_0_54_46.png",
        "/images/A/thumb_0_56_04.png",
        "/images/A/thumb_0_56_16.png",
        "/images/A/thumb_0_56_55.png",
        "/images/A/thumb_0_57_00.png",
        "/images/A/thumb_0_57_20.png",
        "/images/A/thumb_0_57_26.png",
        "/images/A/thumb_0_57_59.png",
        "/images/A/thumb_0_58_07.png",
        "/images/A/thumb_1_00_55.png",
        "/images/A/thumb_1_01_22.png",
        "/images/A/thumb_1_01_26.png",
        "/images/A/thumb_1_02_17.png",
        "/images/A/thumb_1_03_03.png",
        "/images/A/thumb_1_05_10.png",
        "/images/A/thumb_1_05_27.png",
        "/images/A/thumb_1_06_09.png",
        "/images/A/thumb_1_07_00.png",
        "/images/A/thumb_1_07_30.png",
        "/images/A/thumb_1_08_40.png",
        "/images/A/thumb_1_12_33.png",
        "/images/A/thumb_1_13_40.png",
        "/images/A/thumb_1_16_35.png",
        "/images/A/thumb_1_18_21.png",
        "/images/A/thumb_1_19_32.png",
        "/images/A/thumb_1_19_59.png",
        "/images/A/thumb_1_31_00.png",
        "/images/A/thumb_1_31_03.png",
        "/images/A/thumb_1_31_28.png",
        "/images/A/thumb_1_41_33.png",
        "/images/A/thumb_1_41_51.png",
        "/images/A/thumb_1_41_55.png",
        "/images/A/thumb_1_44_19.png",
        "/images/A/thumb_1_46_28.png",
        "/images/A/thumb_1_47_00.png",
        "/images/A/thumb_1_50_27.png",
        "/images/A/thumb_1_50_43.png",
        "/images/A/thumb_1_50_52.png",
        "/images/A/thumb_1_53_33.png",
        "/images/A/thumb_1_53_45.png",
        "/images/A/thumb_1_54_43.png",
        "/images/A/thumb_1_57_18.png", ];

function createclasses() {
    var classes = [
        "context application linear",
        "context application",
        "support application linear",
        "support application",
        "support digital print slab linear",
        "support print linear transitional",
        "support print linear",
        "support print slab linear",
        "support print linear",
        "support print linear transitional",
        "support print medieval transitional",
        "support print linear",
        "support print slab linear",
        "support print lapidary linear",
        "context postproduction linear",
        "context postproduction linear",
        "support postproduction bodonian lapidary",
        "context postproduction linear",
        "context application linear transitional",
        "context application bodonian linear",
        "context digital linear",
        "context digital linear",
        "context digital linear",
        "context application digital lapidary linear",
        "context application linear",
        "context application linear",
        "context application linear",
        "context application linear",
        "context digital linear",
        "context application lapidary",
        "context application linear",
        "context application linear",
        "context application",
        "context application fantasy",
        "support application linear",
        "context application linear",
        "context digital print",
        "pointofview digital",
        "context application",
        "context application linear",
        "support print linear script",
        "support print linear script",
        "support print script",
        "support digital print",
        "context application linear",
        "context application linear",
        "context application linear",
        "context application linear",
        "figureofspeech application linear",
        "support application linear",
        "context application linear",
        "context application linear",
        "context application linear",
        "context application linear",
        "support digital linear",
        "link application digital linear",
        "link application digital print linear script",
        "context digital linear",
        "context digital linear",
        "context application linear",
        "context application linear",
        "support digital linear",
        "support digital",
        "support digital",
        "pointofview digital linear",
        "support application digital linear",
        "context application linear",
        "context application",
        "context application linear",
        "context application bodonian",
        "context application venetian",
        "context support application digital linear",
        "hero prop digital linear",
        "pointofview digital linear",
        "pointofview digital linear",
        "pointofview digital linear",
        "figureofspeech print script",
        "figureofspeech application linear",
        "context support application digital linear",
        "link digital linear",
        "support application lapidary linear",
        "context support application print linear script",
        "support application print linear",
        "herald digital",
        "context application linear",
        "context application linear",
        "context application transitional",
        "context application transitional",
        "context application digital linear",
        "support application digital linear",
        "support digital slab linear transitional",
        "context application linear",
        "context application linear",
        "context application linear",
        "pointofview digital linear",
        "context application linear",
        "context application linear",
        "context application linear script",
        "support application linear",
        "support application linear",
        "link digital linear",
        "link digital print",
        "linear medieval transitional",
        "context application linear",
        "context postproduction",];

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

        $(this).append('<a href="' + screencap[i % screencap.length] + '" data-lightbox="lightbox'+ indexnumber[i % indexnumber.length] + '" data-title="Iron Man | '+ code[i % code.length] + '" | "'+ timecode[i % timecode.length] + '"><div class="mouseovercontainer" onMouseOver="show(\'frame' + indexnumber[i % indexnumber.length] + '\')" onMouseOut="hide(\'frame' + indexnumber[i % indexnumber.length] + '\')"><div class="timecodebg" id="frame' + indexnumber[i % indexnumber.length] + '"><span class="timecode">' + timecode[i % timecode.length] + '</span></div></div></a>');
    });
}

function createclassification() {
    var classification = [
        "/images/A/classification/0.svg",
        "/images/A/classification/1.svg",
        "/images/A/classification/2.svg",
        "/images/A/classification/3.svg",
        "/images/A/classification/4.svg",
        "/images/A/classification/5.svg",
        "/images/A/classification/6.svg",
        "/images/A/classification/7.svg",
        "/images/A/classification/8.svg",
        "/images/A/classification/9.svg",
        "/images/A/classification/10.svg",
        "/images/A/classification/11.svg",
        "/images/A/classification/12.svg",
        "/images/A/classification/13.svg",
        "/images/A/classification/14.svg",
        "/images/A/classification/15.svg",
        "/images/A/classification/16.svg",
        "/images/A/classification/17.svg",
        "/images/A/classification/18.svg",
        "/images/A/classification/19.svg",
        "/images/A/classification/20.svg",
        "/images/A/classification/21.svg",
        "/images/A/classification/22.svg",
        "/images/A/classification/23.svg",
        "/images/A/classification/24.svg",
        "/images/A/classification/25.svg",
        "/images/A/classification/26.svg",
        "/images/A/classification/27.svg",
        "/images/A/classification/28.svg",
        "/images/A/classification/29.svg",
        "/images/A/classification/30.svg",
        "/images/A/classification/31.svg",
        "/images/A/classification/32.svg",
        "/images/A/classification/33.svg",
        "/images/A/classification/34.svg",
        "/images/A/classification/35.svg",
        "/images/A/classification/36.svg",
        "/images/A/classification/37.svg",
        "/images/A/classification/38.svg",
        "/images/A/classification/39.svg",
        "/images/A/classification/40.svg",
        "/images/A/classification/41.svg",
        "/images/A/classification/42.svg",
        "/images/A/classification/43.svg",
        "/images/A/classification/44.svg",
        "/images/A/classification/45.svg",
        "/images/A/classification/46.svg",
        "/images/A/classification/47.svg",
        "/images/A/classification/48.svg",
        "/images/A/classification/49.svg",
        "/images/A/classification/50.svg",
        "/images/A/classification/51.svg",
        "/images/A/classification/52.svg",
        "/images/A/classification/53.svg",
        "/images/A/classification/54.svg",
        "/images/A/classification/55.svg",
        "/images/A/classification/56.svg",
        "/images/A/classification/57.svg",
        "/images/A/classification/58.svg",
        "/images/A/classification/59.svg",
        "/images/A/classification/60.svg",
        "/images/A/classification/61.svg",
        "/images/A/classification/62.svg",
        "/images/A/classification/63.svg",
        "/images/A/classification/64.svg",
        "/images/A/classification/65.svg",
        "/images/A/classification/66.svg",
        "/images/A/classification/67.svg",
        "/images/A/classification/68.svg",
        "/images/A/classification/69.svg",
        "/images/A/classification/70.svg",
        "/images/A/classification/71.svg",
        "/images/A/classification/72.svg",
        "/images/A/classification/73.svg",
        "/images/A/classification/74.svg",
        "/images/A/classification/75.svg",
        "/images/A/classification/76.svg",
        "/images/A/classification/77.svg",
        "/images/A/classification/78.svg",
        "/images/A/classification/79.svg",
        "/images/A/classification/80.svg",
        "/images/A/classification/81.svg",
        "/images/A/classification/82.svg",
        "/images/A/classification/83.svg",
        "/images/A/classification/84.svg",
        "/images/A/classification/85.svg",
        "/images/A/classification/86.svg",
        "/images/A/classification/87.svg",
        "/images/A/classification/88.svg",
        "/images/A/classification/89.svg",
        "/images/A/classification/90.svg",
        "/images/A/classification/91.svg",
        "/images/A/classification/92.svg",
        "/images/A/classification/93.svg",
        "/images/A/classification/94.svg",
        "/images/A/classification/95.svg",
        "/images/A/classification/96.svg",
        "/images/A/classification/97.svg",
        "/images/A/classification/98.svg",
        "/images/A/classification/99.svg",
        "/images/A/classification/100.svg",
        "/images/A/classification/101.svg",
        "/images/A/classification/102.svg",
        "/images/A/classification/103.svg", ];

    var classcontainer= document.getElementById("classificationblock");
    for (var i=0; i < classification.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("id","classification" + i % classification.length);
        div.setAttribute("class","classification");
        div.innerHTML = '<img src=' + classification[i % classification.length] + ' id="classification' + i % classification.length + '"/>';
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


    var isAdvancedUpload = function() {
        var div = document.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
      }();


      var $form = $('.box');
    if (isAdvancedUpload) {
    $form.addClass('has-advanced-upload');
    }

    if (isAdvancedUpload) {

        var droppedFiles = false;
      
        $form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
          e.preventDefault();
          e.stopPropagation();
        })
        .on('dragover dragenter', function() {
          $form.addClass('is-dragover');
        })
        .on('dragleave dragend drop', function() {
          $form.removeClass('is-dragover');
        })
        .on('drop', function(e) {
          droppedFiles = e.originalEvent.dataTransfer.files;
        });
      
      }

UncheckAll();
createclasses();
creategallery();
createtimecodes();
createclassification();
createcodes();
lazyload();

});


