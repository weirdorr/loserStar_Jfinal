/**
 * author: loserStar
 * date: 2019年5月17日下午12:10:27
 * email:362527240@qq.com
 * github:https://github.com/xinxin321198
 * remarks:
 */
package com.loserstar.controller;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;
import com.loserstar.config.annotation.Controller;
import com.loserstar.utils.db.jfinal.vo.VResult;
import com.loserstar.utils.json.LoserStarJsonUtil;

/**
 * author: loserStar
 * date: 2019年5月17日下午12:10:27
 * remarks:
 */
@Controller(controllerKey= {"/test"})
public class TestController extends BaseController {

	/**
	 * 测试数据库连接
	 */
	public void index() {
		List<Record> list =  Db.find("select * from DOC_GER_LIST");
		renderJson(list);
	}
	
	/**
	 * 测试freemarker渲染
	 */
	public void indexPage() {
		setAttr("name", "loserStar");
		renderFreeMarker("/index.ftl");
	}
	
	/**
	 * 测试jodd的json工具类可用
	 */
	public void testLoserStarJson() {
		VResult result = new VResult();
		try {
			Map<String, Object> data = new HashMap<String, Object>();
			data.put("aaa", "111");
			data.put("bbb", 222);
			data.put("ccc", 3.333);
			data.put("ddd", new Date());
			result.setData(data);
			result.ok("测试成功，该数据使用的是loserStarJsonUtil序列化");
			System.out.println(LoserStarJsonUtil.toJsonDeep(result));
		} catch (Exception e) {
			e.printStackTrace();
		}
		renderText(LoserStarJsonUtil.toJsonDeep(result));
	}
}
