function getData(lang) {
    console.log("here test" + lang)

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var myObj = JSON.parse(xhttp.response);
            if (lang == 'EN') {
                var obj = myObj.EN;
                localStorage.setItem("langObj", JSON.stringify(obj));
                window.document.location = './chooseEntries.html'
                document.getElementById("demo").innerHTML = obj.code;

                console.log(obj.UPS);
            } else if (lang == 'AR') {
                var obj = myObj.AR;
                localStorage.setItem("langObj", JSON.stringify(obj));
                window.document.location = './chooseEntries.html'
                document.getElementById("demo").innerHTML = obj.code;

                console.log(obj.UPS);
            } else if (lang == 'HE') {
                var obj = myObj.HE;
                localStorage.setItem("langObj", JSON.stringify(obj));
                window.document.location = './chooseEntries.html'
                document.getElementById("demo").innerHTML = obj.code;

                console.log(obj.UPS);
            } else if (lang == 'RU') {
                var obj = myObj.RU;
                localStorage.setItem("langObj", JSON.stringify(obj));
                window.document.location = './chooseEntries.html'
                document.getElementById("demo").innerHTML = obj.code;

                console.log(obj.UPS);
            }


        }
    };
    xhttp.open("GET", "lang.json", true);
    xhttp.send();

}

function ChangeLanguageForChooseEntries() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page3 = language.page3;
    console.log(page3);
    document.getElementById("opt1").innerHTML = page3.opt1;
    document.getElementById("opt2").innerHTML = page3.opt2;
    var page33 = language.page33;
    document.getElementById("checkboxText").innerHTML = page33.checkboxText;
}

function changeLanguageForIDScanner() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page41;
    console.log(page);
    document.getElementById("title").innerHTML = page.titlephoto;
    document.getElementById("subtitle3photo").innerHTML = page.subtitle3photo;
    document.getElementById("startphoto").innerHTML = page.startphoto;

}

function previewFile() {
    const preview = document.getElementById('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function() {
        // convert image file to base64 string
        preview.src = reader.result;
        console.dir(reader.result);
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

function changeLanguageForCustomerNotFound() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.errorMsgs.page312;
    console.log(page);
    document.getElementById("m211").innerHTML = page.m211;
    document.getElementById("m2112").innerHTML = page.m2112;
    document.getElementById("m2113").innerHTML = page.m2113;

}



function clickCounter() {


    if (typeof(localStorage.getItem("counter")) !== "undefined") {
        localStorage.setItem("counter", Number(localStorage.getItem("counter")) + 1);
    } else {
        localStorage.setItem("counter", 1)
    }

}

function hideme() {


    if (localStorage.getItem("counter") >= 3) {
        document.getElementsByClassName('page-button')[1].style.visibility = "visible"

        document.getElementsByClassName('page-button')[0].onclick = "";

        localStorage.setItem("counter", 1)
    } else {
        document.getElementsByClassName('page-button')[1].style.visibility = "hidden"
    }
}




function ChangeFontByLanguage() {
    var lang = localStorage.getItem("langObj");
    var elm = document.getElementById("opt6");
    var elm2 = document.getElementById("opt7");

    var language = JSON.parse(lang);
    if (language.code == "EN" || language.code == "RU") {
        elm.style["font-size"] = "60%";
        elm2.style["font-size"] = "66%";

    }
    if (language.code == "AR") {
        // padding-right: 51px;
    }

}




function changeLanguageForIdentifyingInformation() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page31;
    console.log(page);
    document.getElementById("opt5").innerHTML = page.opt5;
    document.getElementById("opt6").innerHTML = page.opt6;
    document.getElementById("opt7").innerHTML = page.opt7;
    ChangeFontByLanguage();

    document.getElementById("invitationbyNumber").innerHTML = page.opt8;
    document.getElementById("invitationbyNumber").placeholder = page.opt8;;

    document.getElementById("invitationByName").innerHTML = page.opt9;
    document.getElementById("invitationByName").placeholder = page.opt9;

    document.getElementById("confirm").innerHTML = page.confirm;


}




function OnClickForButton() {
    var elements = document.getElementsByClassName('accordion-item accordion-active');
    var id = elements[0].dataset.actabId;
    if (id == "0") {
        var value = document.getElementById('invitationbyNumber').value;
    } else {
        if (id == "1") {
            var value = document.getElementById('invitationByName').value;
        }
    }
}

function focusFunction() {
    var elements = document.getElementsByClassName('accordion-item accordion-active');
    var id = elements[0].dataset.actabId;
    if (id == "0") {
        document.getElementById("invitationbyNumber").placeholder = '';

    } else {
        if (id == "1") {
            // Focus = Changes the background color of input to yellow
            document.getElementById("invitationByName").placeholder = '';
        }
    }
}

function blurFunction() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page31;
    console.log(page);

    var elements = document.getElementsByClassName('accordion-item accordion-active');
    var id = elements[0].dataset.actabId;
    if (id == "0") {
        // document.getElementById("invitationbyNumber").innerHTML = page.opt8;
        document.getElementById("invitationbyNumber").placeholder = page.opt8;;

    } else {
        if (id == "1") {
            //document.getElementById("invitationByName").innerHTML = page.opt9;

            // No focus = Changes the background color of input to red
            document.getElementById("invitationByName").placeholder = page.opt9;
        }
    }



}


function changeLanguageForOrderDetails() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page41;
    console.log(page);

    document.getElementById("title1").innerHTML = page.title1;
    document.getElementById("next1").innerHTML = page.next1;
    document.getElementById("again1").innerHTML = page.again1;



}

function ChangeTextToLeft() {
    var lang = localStorage.getItem("langObj");

    var elementimage4 = document.getElementById("imagenewinfo4");
    var elementopt4 = document.getElementById("opt4");
    var elementroomtype = document.getElementById("roomType");

    var elementimag2 = document.getElementById("imagenewinfo2");
    var elementopt2 = document.getElementById("opt2");
    var elementroomNumber = document.getElementById("roomNumber");

    var elementimage1 = document.getElementById("imagenewinfo1");
    var elementopt1 = document.getElementById("opt1");
    var elementguestNumber = document.getElementById("guestNumber");

    var elementimage5 = document.getElementById("imagenewinfo5");
    var elementopt5 = document.getElementById("opt5");
    var elementprice = document.getElementById("price");


    var language = JSON.parse(lang);
    if (language.code == "EN" || "RU") {
        elementimage4.style["left"] = "10%";
        elementopt2.style["left"] = "27%";
        elementroomtype.style["left"] = "27%";

        elementimag2.style["left"] = "10%";
        elementopt4.style["left"] = "27%";
        elementroomNumber.style["left"] = "27%";

        elementimage1.style["left"] = "10%";
        elementopt1.style["left"] = "27%";
        elementguestNumber.style["left"] = "27%";

        elementimage5.style["left"] = "10%";
        elementopt5.style["left"] = "27%";
        elementprice.style["left"] = "27%";


    }

}

function changeLanguageForNewInfo() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page9;
    console.log(page);
    document.getElementById("title").innerHTML = page.title;
    document.getElementById("opt1").innerHTML = page.opt1;
    document.getElementById("opt2").innerHTML = page.opt2;
    document.getElementById("opt4").innerHTML = page.opt4;
    document.getElementById("opt5").innerHTML = page.opt5;
    document.getElementById("ok").innerHTML = page.ok;
    document.getElementById("opt3").innerHTML = page.opt3;
    ChangeTextToLeft();



}

function changeLanguageForReceiptCode() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page10;
    console.log(page);
    document.getElementById("title").innerHTML = page.title;

    document.getElementById("subtitle").innerHTML = page.subtitle;




}

function changeLanguageForCitizenShip() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page41;
    console.log(page);
    document.getElementById("titlecitizen").innerHTML = page.titlecitizen;

    document.getElementById("choose").innerHTML = page.choose;
    document.getElementById("citizen").innerHTML = page.citizen;
    document.getElementById("nocitizen").innerHTML = page.nocitizen;




}

function changeLanguageForNumberOfPeopleInRoom1() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page13;
    console.log(page);
    document.getElementById("title").innerHTML = page.title;

    document.getElementById("choose").innerHTML = page.choose;
    document.getElementById("opt1").innerHTML = page.opt1;
    document.getElementById("opt2").innerHTML = page.opt2;
    document.getElementById("opt3").innerHTML = page.opt3;




}

function changeLanguageForNumberOfPeopleInRoom2() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page14;
    console.log(page);
    document.getElementById("title").innerHTML = page.title;

    document.getElementById("subtitle").innerHTML = page.subtitle;
    document.getElementById("opt1").innerHTML = page.opt1;
    document.getElementById("opt2").innerHTML = page.opt2;
    document.getElementById("ok").innerHTML = page.ok;




}

function changeLanguageForTypingFullName() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page15;
    console.log(page);
    document.getElementById("info").innerHTML = page.title;

    document.getElementById("TypingName").innerHTML = page.inputtitle;
    document.getElementById("TypingName").placeholder = page.inputtitle;;

    document.getElementById("ok").innerHTML = page.ok;




}


function OnClickForButton2() {

    var value = document.getElementById('TypingName').value;

}

function focusFunctionforTypingName() {

    document.getElementById("TypingName").placeholder = '';

}

function blurFunctionforTypingName() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page15;
    console.log(page);
    document.getElementById("TypingName").placeholder = page.inputtitle;


}

function changeLanguageForChooseDate() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page33;
    console.log(page);
    document.getElementById("chosedate").innerHTML = page.title1;

    document.getElementById("dateText1").innerHTML = page.dateText1;
    document.getElementById("dateText2").innerHTML = page.dateText2;

    document.getElementById("ok").innerHTML = page.ok;




}


function ChangeimageToLeftForChooseRoom() {
    var lang = localStorage.getItem("langObj");
    var single = document.getElementById("roomTybe1");
    var couple = document.getElementById("roomTybe2");
    var group = document.getElementById("roomTybe3");
    var apartment = document.getElementById("roomTybe4");
    var rightSecT1 = document.getElementById("rightSecT1");
    var rightSecT2 = document.getElementById("rightSecT2");
    var rightSecT3 = document.getElementById("rightSecT3");
    var rightSecT4 = document.getElementById("rightSecT4");
    var leftSecT1 = document.getElementById("leftSecT1");
    var leftSecT2 = document.getElementById("leftSecT2");
    var leftSecT3 = document.getElementById("leftSecT3");
    var leftSecT4 = document.getElementById("leftSecT4");

    var changePos = document.getElementById("changePos");



    var language = JSON.parse(lang);
    if (language.code == "EN" || "RU") {
        single.style["left"] = "16%";
        couple.style["left"] = "16%";
        group.style["left"] = "16%";
        apartment.style["left"] = "16%";
        changePos.style["transform"] = "translate(-12%, -3%)"
        rightSecT1.style["left"] = "2%";
        rightSecT1.style["text-align"] = "left";
        rightSecT2.style["left"] = "2%";
        rightSecT3.style["left"] = "2%";
        rightSecT4.style["left"] = "2%";
        leftSecT1.style["width"] = "48%";
        leftSecT2.style["width"] = "48%";
        leftSecT3.style["width"] = "48%";
        leftSecT4.style["width"] = "48%";
        leftSecT1.style["left"] = "78%";
        leftSecT3.style["left"] = "78%";
        leftSecT2.style["left"] = "78%";
        leftSecT4.style["left"] = "78%";




    }

}

function changeLanguageForChooseRoom() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page9;
    console.log(page);
    document.getElementById("title").innerHTML = page.title2;

    document.getElementById("opt4").innerHTML = page.opt4;
    document.getElementById("opt5").innerHTML = page.opt5;
    document.getElementById("opt3").innerHTML = page.opt3;

    document.getElementById("ok").innerHTML = page.ok;
    ChangeimageToLeftForChooseRoom();



}