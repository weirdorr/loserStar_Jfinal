/**
 * author: loserStar
 * date: 2019年5月17日下午12:10:27
 * email:362527240@qq.com
 * github:https://github.com/xinxin321198
 * remarks:
 */
package com.loserstar.controller;


import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;
import com.loserstar.config.annotation.Controller;

/**
 * author: loserStar
 * date: 2019年5月17日下午12:10:27
 * remarks:
 */
@Controller(controllerKey= {"/test"})
public class TestController extends BaseController {

	public void index() {
		List<Record> list =  Db.find("select * from DOC_GER_LIST");
		renderJson(list);
	}
	
	public void indexPage() {
		setAttr("name", "loserStar");
		renderFreeMarker("/index.ftl");
	}
}
