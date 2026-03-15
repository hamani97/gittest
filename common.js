// Global
function goHome()       { document.location.href = '/'; }
function goMypage()     { document.location.href = '/mypage'; }
function goMydesk()     { document.location.href = '/mydesk'; }
function goScrap()      { document.location.href = '/scrap'; }
function goBoard()      { document.location.href = '/board'; }
function goPages(b,p)   {
	if (p==undefined){
		document.location.href = '/note/'+b;
	} else {
		document.location.href = '/note/'+b+'/'+p;
	}
}
function goPostEdit(pid){ document.location = '/mydesk/post/'+pid; }
function goCommon(url)  { document.location.href = url; }
function memberJoin()   { document.location.href = '/signup'; }
function memberLogout() { document.location.href = '/logout'; }
function memberLogin(url) {
	if (url==undefined){
		document.location.href = '/login';
	} else {
		document.location.href = '/login?url='+url;
	}
}

function goMydeskList() { setCookie('mydesk_list', 'list', 365); goMydesk(); }
function goMydeskGrid() { setCookie('mydesk_list', 'grid', 365); goMydesk(); }

$(document).ready(function(){
    $('#searchText').focus(function(){
        $(this).animate({'width':'250px'}, 400, 'easeInOutQuart');
    }).blur(function(){
        $(this).animate({'width':'150px'}, 400, 'easeInOutQuart');
    });

    $('#service_language').change(function() {
        $.get("/main/language/"+$('#service_language').val(), function(data){
            if (data.error) {
                alert(data.error);
            } else {
                document.location.reload();
            }
        },'json');
    });
});

function emailCheck(email) {
    var reg = /[^@]+@[A-Za-z0-9_-]+[.]+[A-Za-z]+/;
    return reg.test(email);
}

function setCookie(name, val, days) {
	var d = new Date();
	d.setDate(d.getDate() + days);
	document.cookie = name + "=" + escape(val) + "; path=/; expires=" + d.toGMTString() + ";";
}