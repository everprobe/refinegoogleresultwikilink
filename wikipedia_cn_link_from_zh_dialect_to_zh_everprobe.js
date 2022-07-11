// ==UserScript==
// @name        wikipedia_cn_link_from_zh_dialect_to_zh_everprobe
// @namespace   https://jspenguin.org/monkey
// @description Redirect mobile wikipedia to desktop version
// @match     http*://zh.wikipedia.org/*
// @version     1
// @grant       none
// @author      everprobe 2022-07-11
// ==/UserScript==

var o = /^(https?:\/\/zh\.wikipedia\.org\/)(zh\-[a-zA-Z]{2,4})(\/.*)/.exec(location.href)
if (o) location.href = o[1] + "zh" + o[3]
