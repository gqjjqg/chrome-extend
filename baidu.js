var kw = $('#FinishedPercent');
var ch = $('#CosumeHours')
var am = $('#Achievement');
var fm = $('#formTaskTracking');

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == "daily") {
			var span = $('#spanTaskImpl').text();
			var context_a = parseInt(span.substr(0, 2), 10) + 1;
			ch.val("8");
            kw.val(context_a);
			am.val("1.2DP 2.FR");
			
			if (request.autosubmit == "checked") {
				//$("input[value='Save']").trigger("submit")
				//fm.submit();
				sendResponse({state:'提交成功失败！'})
			} else {
				sendResponse({state:'自动填写成功！'});
			}
        }
    }
);