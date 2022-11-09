// ==UserScript==
// @name         自动展开
// @version      1.3.23
// @namespace    https://github.com/AirBashX/AutoUnfold/
// @homepage     https://github.com/AirBashX/UserScript
// @author       airbash
// @description  自动展开文档	隐藏部分;长期维护、PC+手机全平台支持;全平台支持:CSDN、it1352、编程之家、简书、知乎、百家号、百度资讯、百度经验、百度知道、百度贴吧、百度新闻、新浪新闻、腾讯新闻、搜狐新闻、网易新闻、凤凰新闻、澎湃新闻、澎湃新闻、新京报、环球网、日民日报、人民网、36氪、果壳、虎扑、虎嗅、头条、B站专栏、微博文章、豆瓣文章、开源中国、360图书馆、太平洋电脑网、中关村在线、汽车之家、游侠网
// @match      	 *://*.jianshu.com/*
// @match        *://*blog.csdn.net/*
// @match        *://ask.csdn.net/questions/*
// @match        *://*.it1352.com/*
// @match        *://*.jb51.cc/*
// @match        *://www.zhihu.com/question/*
// @match        *://jingyan.baidu.com/article*
// @match        *://zhidao.baidu.com/question*
// @match        *://tieba.baidu.com/p*
// @match        *://wk.baidu.com/view/*
// @match        *://tanbi.baidu.com/h5apptopic/browse/*
// @match        *://baijiahao.baidu.com/s*
// @match        *://mbd.baidu.com/newspage/data/*
// @match        *://news.baidu.com/news*
// @match        *://m.baidu.com/sf_baijiahao/*
// @match        *://*.sina.cn/*
// @match        *://3g.163.com/*
// @match        *://m.sohu.com/a/*
// @match        *://view.inews.qq.com/*
// @match        *://*.ifeng.com/*
// @match        *://m.thepaper.cn/newsDetail_forward*
// @match        *://m.bjnews.com.cn/detail/*
// @match        *://world.huanqiu.com/article/*
// @match        *://3g.dxy.cn/*
// @match        *://www.bilibili.com/read/mobile*
// @match        *://weibo.com/ttarticle/p/show?id=*
// @match        *://m.douban.com/group/topic/197415364/*
// @match        *://card.weibo.com/article/m/show/id*
// @match        *://www.oschina.net/p/*
// @match        *://www.360doc.cn/article/*
// @match        *://www.360doc.com/content/*
// @match        *://g.pconline.com.cn/x/*
// @match        *://m.zol.com.cn/article/*
// @match        *://autohome.com.cn/*
// @match        *://chejiahao.m.autohome.com.cn/info/*
// @match        *://3g.ali213.net/*
// @run-at       document-body
// @icon         data:image/png;base64,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
// @grant        none
// @license      GPL-3.0
// ==/UserScript==
(function () {
	"use strict";

	/**
	 * 网站列表
	 * @type {name/url/操作类型}
	 */
	var websites = [
		{
			name: "CSDN",
			url: "blog.csdn.net",
			handles: [
				//PC端:自动展开代码块
				{
					type: "click",
					item: ".hide-preCode-bt",
				},
				//PC端:关注博主即可阅读全文
				{
					type: "display",
					item: ".hide-article-box",
				},
				//下载弹窗
				{
					type: "display",
					item: ".weixin-shadowbox",
				},
				//阅读全文
				{
					type: "display",
					item: ".btn_mod",
				},
				{
					type: "height",
					item: ".article_content",
				},
				{
					type: "display",
					item: ".readall_box",
				},
				//展开评论
				{
					type: "click",
					item: ".btn_comment_readmore",
				},
			],
		},
		{
			name: "CSDN问答",
			url: "ask.csdn.net/questions",
			handles: [
				//PC端:展开全部
				{
					type: "display",
					item: ".expandBtn",
				},
				{
					type: "height",
					item: ".normal-style",
				},
				//PC端:查看等多回答
				{
					type: "click",
					item: ".ic_ask_down_reeow",
				},
			],
		},
		{
			name: "it1352",
			url: "it1352.com",
			handles: [
				//PC端:查看全文:解除公众号限制
				{
					type: "display",
					item: ".arc-body-main-more",
				},
				{
					type: "height",
					item: ".arc-body-main",
				},
			],
		},
		{
			name: "编程之家",
			url: "jb51.cc",
			handles: [
				//PC端:阅读全文
				{
					type: "display",
					item: "#read-more-wrap",
				},
				{
					type: "height",
					item: "#container",
				},
				//展开
				{
					type: "height",
					item: ".read-more-hidden",
				},
			],
		},
		{
			name: "简书",
			url: "jianshu.com/p",
			handles: [
				//下载弹窗
				{
					type: "display",
					item: ".download-app-guidance",
				},
				//阅读全文
				{
					type: "display",
					item: ".collapse-tips",
				},
				{
					type: "height",
					item: ".collapse-free-content",
				},
				{
					type: "display",
					item: ".copyright",
				},
				//允许滑动
				{
					type: "overflow",
					item: "body",
				},
			],
		},
		{
			name: "知乎",
			url: "www.zhihu.com/question",
			handles: [
				//PC端:显示全部(问题描述)
				{
					type: "click",
					item: ".QuestionRichText-more",
				},
				//允许滑动
				{
					type: "overflow",
					item: "body",
				},
				//PC+移动版:展开阅读全文+查看问题描述
				{
					type: "display",
					item: ".ContentItem-rightButton",
				},
				{
					type: "height",
					item: ".RichContent-inner",
				},
			],
			//删除透明遮挡
			fun: function () {
				var items = document.querySelectorAll(".RichContent-inner");
				for (var item of items) {
					item.style.setProperty("-webkit-mask-image", "none", "important");
				}
			},
		},
		{
			name: "百度经验",
			url: "jingyan.baidu.com/article",
			handles: [
				//PC端:展开内容
				{
					type: "display",
					item: ".read-whole-mask",
				},
				{
					type: "height",
					item: ".exp-content-container",
				},
				//展开内容
				{
					type: "click",
					item: ".more-img-opt",
				},
			],
		},
		{
			//https://zhidao.baidu.com/question/646382577725897205.html
			//https://zhidao.baidu.com/question/422818846
			name: "百度知道",
			url: "zhidao.baidu.com/question",
			handles: [
				//展开剩余
				{
					type: "display",
					item: ".w-detail-display-btn",
				},
				{
					type: "height",
					item: ".w-detail-container",
				},
				//PC端:展开全部(1)
				{
					type: "display",
					item: ".wgt-best-mask",
				},
				{
					type: "height",
					item: ".best-text",
				},
				//PC端:展开全部(2)
				{
					type: "display",
					item: ".wgt-answers-mask",
				},
				{
					type: "height",
					item: ".answer-text",
				},
				//PC端:更多回答1
				{
					type: "display",
					item: "#show-hide-container",
				},
				//PC端:更多回答2
				{
					type: "display",
					item: ".show-answer-dispute",
				},
			],
			fun: function () {
				var items = document.querySelectorAll(".answer");
				if (items) {
					for (var item of items) {
						item.classList.remove("answer-hide");
						item.classList.remove("answer-dispute-hide");
					}
				}
			},
		},
		{
			name: "百度贴吧",
			url: "tieba.baidu.com/p",
			handles: [
				//PC端:自动展开图片
				{
					type: "display",
					item: ".replace_tip",
				},
				{
					type: "height",
					item: ".replace_div",
				},
				//PC端:自动展开回复
				{
					type: "click",
					item: ".j_lzl_m",
				},
			],
		},
		{
			//https://wk.baidu.com/view/a87844da7f1922791688e862
			name: "百度文库手机版1",
			url: "wk.baidu.com/view",
			handles: [
				//自动展开
				{
					type: "height",
					item: ".reader-copy",
				},
				{
					//透明遮挡
					type: "display",
					item: ".blur-bg",
				},
			],
			fun: function () {
				//工具相关内容下移,避免遮挡
				var item = document.querySelector(".fold-pager");
				item.style.setProperty('margin-top','0px');
			},
		},
		{
			//https://tanbi.baidu.com/h5apptopic/browse/wkjumpdownload?fromKey=1028200x&docId=0e07a7f1ba0d4a7302763aea
			name: "百度文库手机版2",
			url: "tanbi.baidu.com/h5apptopic/browse/",
			handles: [
				{
					//下载app,继续阅读
					type: "display",
					item: ".continue-read-wrap",
				},
			],
			fun: function () {
				var item = document.querySelector("#read-view");
				item.setAttribute("scrolling", "yes");
			},
		},
		{
			name: "百家号",
			url: "baijiahao.baidu.com/s",
			handles: [
				//阅读全文
				{
					type: "display",
					item: ".oPadding",
				},
				{
					type: "height",
					item: ".mainContent",
				},
			],
		},
		{
			name: "百度app新闻",
			url: "mbd.baidu.com/newspage/data",
			handles: [
				//类似于百家
				//阅读全文
				{
					type: "display",
					item: ".height-fold",
				},
				{
					type: "height",
					item: ".dynamic-item",
				},

				//类似于百度
				//阅读全文
				{
					type: "display",
					item: ".packupButton",
				},
				{
					type: "height",
					item: ".mainContent",
				},
			],
		},
		{
			name: "百度资讯",
			url: "m.baidu.com/sf_baijiahao",
			handles: [
				//展开全文
				{
					type: "display",
					item: ".oPadding",
				},
				{
					type: "height",
					item: ".mainContent",
				},
			],
		},
		{
			name: "百度新闻",
			url: "news.baidu.com/news#/detail",
			handles: [
				//阅读全文
				{
					type: "display",
					item: ".show-more-btn-container",
				},
				{
					type: "display",
					item: ".show-more-end",
				},
				{
					type: "height",
					item: ".detail-content-main",
				},
			],
		},
		{
			name: "新浪新闻",
			url: "sina.cn",
			handles: [
				//展开
				{
					type: "display",
					item: ".look_more",
				},
				{
					type: "height",
					item: ".s_card",
				},
			],
		},
		{
			name: "网易新闻",
			url: "3g.163.com",
			handles: [
				//展开
				{
					type: "display",
					item: ".show_article",
				},
				{
					type: "height",
					item: "article",
				},
			],
		},
		{
			name: "搜狐新闻",
			url: "m.sohu.com/a",
			handles: [
				//展开
				{
					type: "display",
					item: ".lookall-box",
				},
			],
			fun: function () {
				var item = document.querySelector(".hidden-content");
				item.classList.remove("hide");
			},
		},
		{
			name: "腾讯新闻",
			url: "view.inews.qq.com/",
			handles: [
				//点击展开全文
				{
					type: "display",
					item: "[class^=show-more_outer__]",
				},
				{
					type: "display",
					item: "[class^=show-more-article_cover__]",
				},
				{
					type: "height",
					item: "[class^=show-more_height-not-full__]",
				},
			],
		},
		{
			name: "凤凰新闻",
			url: "ifeng.com/",
			handles: [
				//点击查看完整内容(房子)
				{
					type: "display",
					item: ".showall",
				},
				{
					type: "height",
					item: ".article",
				},
				//点击展开全文(资讯)
				{
					type: "display",
					item: "[class^=tip]",
				},
				//展开全文(汽车)
				{
					type: "display",
					item: "[class^=more]",
				},
				{
					type: "height",
					item: "[class^=main_content]",
				},
				//展开(财经视频介绍)
				{
					type: "click",
					item: "[class^=videoBrefTextBtn-]",
				},
			],
		},
		{
			name: "澎湃新闻",
			url: "m.thepaper.cn/newsDetail_forward",
			handles: [
				//展开全文
				{
					type: "display",
					item: "#clickForMore",
				},
				{
					type: "height",
					item: ".newsdetail_body",
				},
			],
		},
		{
			name: "新京报",
			url: "m.bjnews.com.cn/detail/",
			handles: [
				//展开全文
				{
					type: "display",
					item: ".shade",
				},
				{
					type: "height",
					item: ".article",
				},
			],
		},
		{
			name: "环球网",
			url: "world.huanqiu.com/article",
			handles: [
				//展开全文
				{
					type: "click",
					item: ".unfold-btn",
				},
				{
					type: "height",
					item: ".newsdetail_body",
				},
			],
		},
		{
			name: "丁香园",
			url: "3g.dxy.cn",
			handles: [
				//显示第一条评论
				{
					type: "height",
					item: ".dicussion-text",
				},
			],
		},
		{
			//https://www.bilibili.com/read/mobile?id=18846196
			name: "B站专栏",
			url: "www.bilibili.com/read/mobile",
			handles: [
				//继续阅读全文
				{
					type: "display",
					item: ".read-more",
				},
			],
			fun: function () {
				var item = document.querySelector(".read-article-box");
				item.classList.remove("limit");
				item.classList.remove("show-later");
			},
		},
		{
			//https://weibo.com/ttarticle/p/show?id=2309404770482854428687
			name: "微博文章PC版",
			url: "weibo.com/ttarticle/p/show?id=",
			handles: [
				{
					type: "height",
					item: ".WB_editor_iframe_new",
				},
				{
					type: "display",
					item: ".btn_line",
				},
			],
		},
		{
			//https://card.weibo.com/article/m/show/id/2309404770482854428687
			name: "微博文章移动版",
			url: "card.weibo.com/article/m/show/id",
			handles: [
				{
					type: "height",
					item: ".f-art",
				},
				{
					type: "display",
					item: ".f-art-opt",
				},
			],
		},
		{
			//https://www.oschina.net/p/xmind
			name: "开源中国",
			url: "www.oschina.net/p/",
			handles: [
				//展开阅读全文
				{
					type: "display",
					item: ".collapse-bar",
				},
				{
					type: "height",
					item: ".article-detail",
				},
			],
		},
		//移动版:http://www.360doc.cn/article/60244337_924865821.html
		{
			name: "360图书馆手机版",
			url: "www.360doc.cn/article/",
			handles: [
				//移动版:展开剩余内容
				{
					type: "display",
					item: ".article_showall",
				},
				{
					type: "height",
					item: ".article",
				},
			],
		},
		//PC版:http://www.360doc.com/content/20/0717/15/60244337_924865821.shtml
		{
			name: "360图书馆PC版",
			url: "www.360doc.com/content/",
			handles: [
				//展开
				// {
				// 	type: "display",
				// 	item: ".article_showall",
				// },
			],
			fun: function () {
				var item = document.querySelector("body");
				item.classList.remove("articleMaxH");
			},
		},
		{
			//https://g.pconline.com.cn/x/1504/15043167.html
			name: "太平洋电脑网",
			url: "g.pconline.com.cn/x/",
			handles: [
				//展开全文
				{
					type: "display",
					item: ".show_article",
				},
				{
					type: "height",
					item: ".art-content",
				},
			],
		},
		{
			//https://m.zol.com.cn/article/7934726.html
			name: "中关村在线",
			url: "m.zol.com.cn/article/",
			handles: [
				//展开全文
				{
					type: "display",
					item: ".unfold-article-btn",
				},
				{
					type: "height",
					item: ".article-content",
				},
			],
		},
		{
			name: "汽车之家",
			url: "autohome.com.cn/",
			handles: [
				//展开全文
				{
					type: "display",
					item: "#continue_reading",
				},
				//展开全文
				{
					type: "display",
					item: ".unfold_warp",
				},
			],
			fun: function () {
				//替换图片:防止显示不出图片
				var item = document.querySelector(".fn-hide img");
				var date = item.getAttribute("data-src-webp-1");
				if (date) {
					item.setAttribute("src", date);
				}
				//删除class
				var items = document.querySelectorAll(".fn-hide");
				for (item of items) {
					item.classList.remove("fn-hide");
				}
			},
		},
		{
			//https://m.douban.com/group/topic/197415364/
			name: "豆瓣文章",
			url: "m.douban.com/group/topic/",
			handles: [
				//点击展开全文
				{
					type: "display",
					item: ".oia-readall",
				},
				{
					type: "height",
					item: ".note-content",
				},
			],
		},
		{
			//https://3g.ali213.net/news/html/716303.html
			name: "游侠网",
			url: "3g.ali213.net",
			handles: [
				//阅读全文
				{
					type: "display",
					item: ".read-all-con",
				},
				{
					type: "display",
					item: ".read-all-con2",
				},
				{
					type: "height",
					item: ".detail-content",
				},
			],
		},
	];
	var time = 0;
	var interval = setInterval(() => {
		if (++time == 100) {
			clearInterval(interval);
		}
		for (var website of websites) {
			if (location.href.indexOf(website.url) != -1) {
				if (website.fun) {
					website.fun();
				}
				for (var handle of website.handles) {
					var items = document.querySelectorAll(handle.item);
					if (items.length != 0) {
						if (handle.type == "display") {
							//隐藏遮挡部分
							for (var item of items) {
								item.style.display = "none";
							}
						} else if (handle.type == "height") {
							//加长内容部分
							for (var item of items) {
								item.style.setProperty("height", "unset", "important");
								item.style.setProperty("max-height", "unset", "important");
								item.style.setProperty("max-height", "unset", "important");
							}
						} else if (handle.type == "overflow") {
							//防止无法滑动
							for (var item of items) {
								item.style.setProperty("overflow", "unset", "important");
							}
						} else {
							//模拟点击,后续可能取消
							for (var item of items) {
								if (item != null && item.getAttribute("opened") != "yes") {
									item.click();
									item.setAttribute("opened", "yes");
								}
							}
						}
					}
				}
			}
		}
	}, 100);
})();
