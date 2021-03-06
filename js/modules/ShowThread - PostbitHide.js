var debug = false;
var hideAvatar = false;
var hideUserTitle = false;
var hideUserStar = false;
var hideUserBar = false;
var hidePrestige = false;
var hidePostCount = false;
var hideJoinDate = false;
var hideReputation = false;
var hideWarningLevel = false;
var hideAwards = false;
var hideSignature = false;
var classPostStyle = isPostStyleClass();
getPostbitHide();

// Set vars equal to saved settings
function getPostbitHide(){
    chrome.storage.sync.get("PostbitHide", function (data) {
        if (!chrome.runtime.error){
            $.each(data, function (index, data1) {
                $.each(data1, function (index1, data2) {
                    $.each(data2, function (key, value) {
                        if (typeof key === undefined || typeof value === undefined) { return; }
                        switch (key) {
                            case "PostbitHideAvatar": hideAvatar = value;
                                break;
                            case "PostbitHideUsertitle": hideUserTitle = value;
                                break;
                            case "PostbitHideUserStar": hideUserStar = value;
                                break;
                            case "PostbitHideUserBar": hideUserBar = value;
                                break;
                            case "PostbitHidePrestige": hidePrestige = value;
                                break;
                            case "PostbitHidePostCount": hidePostCount = value;
                                break;
                            case "PostbitHideJoinDate": hideJoinDate = value;
                                break;
                            case "PostbitHideReputation": hideReputation = value;
                                break;
                            case "PostbitHideWarningLevel": hideWarningLevel = value;
                                break;
                            case "PostbitHideAwards": hideAwards = value;
                                break;
                            case "PostbitHideSignature": hideSignature = value;
                                break;
                            default: //console.log("ERROR: Key not found.");
                                break;
                        }
                    })
                })

            });
            debugTest();
            hideElements()
        }
    });
}
function debugTest() {
    if (debug == true) {
        console.log("Avatar: " + hideAvatar);
        console.log("Usertitle: " + hideUserTitle);
        console.log("Userstar: " + hideUserStar);
        console.log("Userbar: " + hideUserBar);
        console.log("Prestige: " + hidePrestige);
        console.log("Post Count: " + hidePostCount);
        console.log("Join Date: " + hideJoinDate);
        console.log("Reputation: " + hideReputation);
        console.log("Warning Level: " + hideWarningLevel);
        console.log("Awards: " + hideAwards);
        console.log("Signature: " + hideSignature);
    }
}
function hideElements() {
    $("#posts > table").each(function (index) {
        if (hideAvatar) {
            if (classPostStyle) {
                $(this).find(".smalltext:eq(0) > a:eq(0)").hide();
            } else {
                $(this).find(".post_avatar").hide();
            }
        }
        if (hideUserTitle) {
            if (classPostStyle) {
                
            } else {
                $(this).find(".post_author").find(".smalltext")[0].childNodes[0].nodeValue = '';
            }
        }
        if (hideUserStar) {
            $(this).find(".post_author").find(".userstars").remove();
        }
        if (hideUserBar) {
            $(this).find(".post_author").find(".smalltext > img").remove();
        }
        if (hidePrestige) {
            $(this).find(".post_author_info")[0].childNodes[0].nodeValue = '';
        }
        if (hidePostCount) {
            $(this).find(".post_author_info")[0].childNodes[3].nodeValue = '';
        }
        if (hideJoinDate) {
            $(this).find(".post_author_info")[0].childNodes[5].nodeValue = '';
        }
        if (hideReputation) {
            $(this).find(".post_author_info")[0].childNodes[9].nodeValue = '';
            $(this).find(".post_author_info").find(".reputation_positive").remove();
            $(this).find(".post_author_info").find(".reputation_negative").remove();
            $(this).find(".post_author_info").find(".reputation_neutral").remove();
        }
        if (hideWarningLevel) {
            $(this).find(".post_author_info")[0].childNodes[16].nodeValue = '';
            $(this).find(".post_author_info > a:eq(1)").remove();
        }
        if (hideAwards) {
            $(this).find(".post_author_info > span").remove();
        }
        if (hideSignature) {
            $(this).find(".post_content > div:eq(1)").remove();
            $(this).find(".post_content > hr:eq(0)").remove();
        }
    });
}

function isPostStyleClass() {
    if ($("html").html().includes("<!-- start: showthread_classic_header -->")) {
        return true;
    } else {
        return false;
    }
}