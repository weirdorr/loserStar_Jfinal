/**
 * 
 */
/**
 * 公共ajax函数
 * @param url
 * @param data
 * @param callback
 * @returns {String}
 */
function ajaxFunc(url, data, callback){
	var result = "";
	$.ajax({
		type : "post",
		url : encodeURI(encodeURI(cxt + url)),
		data : data,
		dataType : "html",
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		async: false,
		cache: false,
		success:function(response){
			result = response;
			//扩展回调函数
			if( callback != null ){
				callback();
			}
		}
	});
	return result;
}

/**
 * ajax提交form替换content
 * @param divId 返回替换div
 * @param formId 提交formid
 * @param callback 回调
 */
function ajaxForm(divId, formId, callback){
	$('#content').fadeOut().parent().append('<div id="loading" class="center">正在加载中...<div class="center"></div></div>');
	$("#" + formId).ajaxSubmit({
		cache: false,
	    success:  function (data) {
	    	if(data != ""){
	    		$("#" + divId).html(data);
	    	}
			//扩展回调函数
			if( callback != null ){
				callback();
			}
	    	$('#loading').remove();
			$('#content').fadeIn();
			//docReady();
	    }
	});
}

/**
 * ajax请求url替换指定div
 * @param shade 是否开启遮罩层
 * @param divId 返回替换div
 * @param url 请求地址
 * @param data 参数
 * @param callback 回调
 */
function ajaxDiv(shade, divId, url, data, callback){
	if(shade){
		$('#'+divId).fadeOut().parent().append('<div id="loading" class="center">正在加载中...<div class="center"></div></div>');
	}
	//alert("c");
	$.ajax({
		type : "post",
		url : encodeURI(encodeURI(cxt + url)),
		data : data,
		dataType : "html",
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		async: true,
		cache: false,
		success:function(returnData){
			$("#" + divId).html(returnData);
			//扩展回调函数
			if( callback != null ){
				callback();
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) { 
			alert("请求出现错误！");
        },
        complete: function(XMLHttpRequest, textStatus) { 
        	if(shade){
        		$('#loading').remove();
    			$('#'+divId).fadeIn();
        	}
        }
	});
}

/**
 * ajax请求url替换指定div
 * @param shade 是否开启遮罩层
 * @param divId 返回替换div
 * @param url 请求地址
 * @param data 参数
 * @param callback 回调
 */
function ajaxDivByAsyncF(shade, divId, url, data, callback){
	if(shade){
		$('#content').fadeOut().parent().append('<div id="loading" class="center">正在加载中...<div class="center"></div></div>');
	}
	//alert("c");
	$.ajax({
		type : "post",
		url : encodeURI(encodeURI(cxt + url)),
		data : data,
		dataType : "html",
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		async: false,
		cache: false,
		success:function(returnData){
			$("#" + divId).html(returnData);
			//扩展回调函数
			if( callback != null ){
				callback();
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) { 
			alert("请求出现错误！");
        },
        complete: function(XMLHttpRequest, textStatus) { 
        	if(shade){
        		$('#loading').remove();
    			$('#content').fadeIn();
        	}
        }
	});
}

/**
 * ajax请求url替换div content
 * @param url 请求地址
 * @param data 参数
 * @param callback 回调
 */
function ajaxContent(url, data, callback){
	$('#content').fadeOut().parent().append('<div id="loading" class="center">正在加载中...<div class="center"></div></div>');
	
	$.ajax({
		type : "post",
		url : encodeURI(encodeURI(cxt + url)),
		data : data,
		dataType : "html",
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		async: false,
		cache: false,
		success:function(returnData){
			$("#content").html(returnData);
			//扩展回调函数
			if( callback != null ){
				callback();
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) { 
			// 这个方法有三个参数：XMLHttpRequest 对象，错误信息，（可能）捕获的错误对象。
			// 通常情况下textStatus和errorThown只有其中一个有值
            // alert(XMLHttpRequest.status);
            // alert(XMLHttpRequest.readyState);
            // alert(textStatus);
			alert("请求出现错误！");
        },
        complete: function(XMLHttpRequest, textStatus) { 
        	// 请求完成后回调函数 (请求成功或失败时均调用)。参数： XMLHttpRequest 对象，成功信息字符串。
            // 调用本次AJAX请求时传递的options参数
	    	$('#loading').remove();
			$('#content').fadeIn();
			//docReady();
        }
	});
}

/**
 * ajax请求url替换div content
 * @param url 请求URL
 * @param data 请求参数数据
 * @param callback 回调
 */
function ajaxContentConfirm(url, data, callback){
	var d = dialog({
	    title: '操作提示',
	    content: "确定要这样操作吗？",
	    okValue: '确定',
	    ok: function () {
	        //this.title('提交中…');
	        ajaxContent(url, data, callback);
	        return true;
	    },
	    cancelValue: '取消',
	    cancel: function () {
	    	return true ; //false
	    }
	});
	d.show();
}

/**
 * ajax请求url替换DiaLog
 * @param url 请求地址
 * @param data 参数
 * @param callback 回调
 */
function ajaxDiaLog(url, data, callback){
	$('#content').fadeOut().parent().append('<div id="loading" class="center">Loading...<div class="center"></div></div>');
	$.ajax({
		type : "post",
		url : encodeURI(encodeURI(cxt + url)),
		data : data,
		dataType : "html",
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		async: false,
		cache: false,
		success:function(returnData){
			$('#myModal').html(returnData);
			//扩展回调函数
			if( callback != null ){
				callback();
			}
			$('#myModal').modal('show');
	    	$('#loading').remove();
			$('#content').fadeIn();
			docReady();
		}
	});
}
function appendSelect(id,url,value,callback){
$.getJSON(encodeURI(encodeURI(cxt + url)), 
        function(responseData, status){
    if (status == "success"){
        //当前的店铺ID
    	$("#"+id).empty();
    	$("<option/>").html("").val("")
        .appendTo("#"+id);
        $(responseData).each(function(n){
            $("<option/>").html(this.name).val(this.id)
            .appendTo("#"+id);
        });
        if(value!=null){
        	$("#"+id).val(value);
        }
        if( callback != null ){
			callback();
		}
    }else{
        alert("下拉框数据加载失败！");
    }
});
}

function ajaxRequest(url,data,type,callback){
	$.ajax({  
        type: "post", 
        dataType:type,
        url: url,       
        data: data,      
        success: function(data) {  
			if (callback != null) {
				callback(data);
			}
        },  
        error: function(XmlHttpRequest, textStatus, errorThrown) {  
			alert("请求出错!");
        }  
    });
}

function checkdate(value,type){
	if(isNaN(value)||value<=0||!(/^\d+$/.test(value))){
		if(value==""){
			return true;
		}
		alert("日期只能输入数字，不能输入特殊符号和空格！");
		return false;
	}else{
	var ins=parseInt(value,10);
	switch(type){
	case 1:
		if(ins>=1000&&ins<=9999){
			
			return true;
		}else{
			alert("年份只能输入1000-9999之间的数字！");
		}
		break;
	case 2:
		if(ins<=12&&ins>0){
			
			return true;
		}else{
			alert("月份只能输入1-12之间的数字！");
		}
		break;
	case 3:
		if(ins<=60&&ins>0){
			return true;
		}
		break;
		return false;
	}
	}
}