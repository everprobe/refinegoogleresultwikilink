// ==UserScript==
// @name        wikipedia_link_from_mobile_to_desktop_everprobe
// @namespace   https://jspenguin.org/monkey
// @description Redirect mobile wikipedia to desktop version
// @match     http://*.m.wikipedia.org/*
// @match     https://*.m.wikipedia.org/*
// @version     1
// @grant       none
// @author     everprobe  2022-07-11
// ==/UserScript==

var m = /^(https?:\/\/.*)\.m(\.wikipedia\.org\/.*)/.exec(location.href);
if (m) location.href=m[1] + m[2];
