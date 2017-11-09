
$(function(){
    var state = $('#state');
	$('#checkbox1').click(function () {
		if ($('#checkbox1').attr("checked")) {
			$('#checkbox1').removeAttr("checked")
		} else {
			$('#checkbox1').attr("checked", 'true')
		}
	});
    $('#daily').click(function () {//给对象绑定事件
        chrome.tabs.query({active:true, currentWindow:true}, function (tab) {//获取当前tab
            //向tab发送请求
            chrome.tabs.sendMessage(tab[0].id, { 
                action: "daily",
                keyword: $('#keyword').val(),
				autosubmit: $('#checkbox1').attr("checked")
            }, function (response) {
                console.log(response);
                state.html(response.state)
            });
        });
    });
    //$('#submit').click(function () {
    //    chrome.tabs.query({active:true, currentWindow:true}, function (tab) {
    //        chrome.tabs.sendMessage(tab[0].id, {  
    //           action: "submit"   
    //        }, function (response) {
    //            state.html(response.state)
    //        });
    //    });
    //})

})
