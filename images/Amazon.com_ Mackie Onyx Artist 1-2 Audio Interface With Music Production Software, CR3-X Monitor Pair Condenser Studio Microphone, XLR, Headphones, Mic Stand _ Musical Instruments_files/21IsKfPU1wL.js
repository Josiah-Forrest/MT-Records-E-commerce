'use strict';mix_d("CerberusSharedCards__cerberus-shared:cerberus-shared___OgRkNxt","exports tslib @c/aui-utils @c/pagemarker @c/aui-truncate @c/logger @c/metrics @c/remote-operations @c/tracking @c/scoped-dom".split(" "),function(x,k,z,A,B,t,C,D,u,E){function p(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var F=p(z),G=p(A),H=p(B),n=p(C),I=p(D),q=p(E),J=function(a,c){return{uet:function(b){a.uet(b,c,{wb:1})},uex:function(b){a.uex(b,c,{wb:1})}}},K=function(a,c,b){if(a){for(var d=
[],g=0;g<a.length;g++){var e=a[g],h=c[g],l=b[g],f={};e.dataset.subasin&&(f.subsAsin=e.dataset.subasin);e.dataset.subasinprice&&"true"!==h.dataset.isparent&&(f.subsPrice=parseFloat(e.dataset.subasinprice),f.subsIsParent=!1);e.dataset.subasincurrency&&(f.subsCurrency=e.dataset.subasincurrency);e.dataset.subasinrating&&(f.subsAvgRating=parseFloat(e.dataset.subasinrating));e.dataset.subasintotalreviews&&(f.subsTotalReviews=parseInt(e.dataset.subasintotalreviews.replace(/[.,\s]/g,""),10));e.dataset.subasinsourcesmap&&
(f.subsSourcesMap=e.dataset.subasinsourcesmap);h.dataset&&h.dataset.lowestprice&&h.dataset.highestprice&&(f.subsPrice=parseFloat(h.dataset.lowestprice),f.subsLowestPrice=parseFloat(h.dataset.lowestprice),f.subsHighestPrice=parseFloat(h.dataset.highestprice),f.subsIsParent=!0);f.subsPrimeEligible=l.dataset.isprime&&"true"===l.dataset.isprime?!0:!1;f.subsPosition=g;f.subsSource=null;f.subsSourceScore=null;d.push(f)}return d}},L=function(a,c,b){a&&c?a.$Nav&&"function"===typeof a.$Nav.when?a.$Nav.when("api.setCartCount").run(function(a){a(c)}):
a.amazon&&a.amazon.mash&&a.amazon.mash.cart&&"function"===typeof a.amazon.mash.cart.didUpdate?a.amazon.mash.cart.didUpdate({newCartQuantity:c}):t.log("CerberusSharedCards.updateCartCount.deviceType."+b+".$Nav and mash missing","ERROR"):t.log("CerberusSharedCards.updateCartCount.deviceType."+b+".window."+a.toString()+".count."+c.toString()+".dependency missing","ERROR")},v=function(a,c,b,d){"undefined"===typeof d?(a.style.display="block",c.style.display="none",b.style.display="none"):d?(a.style.display=
"none",c.style.display="block",b.style.display="none"):(a.style.display="none",c.style.display="none",b.style.display="block")},M=function(a){a=a?a.dataset:{};return{deviceType:a.deviceType,seedAsin:a.landedAsin,subsReason:a.displayReason}},w=function(a,c){var b=q["default"].cardRoot.getElementsByClassName("_cerberus-shared_style_asinTitle__1nn_H"),d=q["default"].cardRoot.getElementsByClassName("_cerberus-shared_style_asinPriceRange__yoi8E"),g=q["default"].cardRoot.getElementsByClassName("_cerberus-shared_style_primeBadge__2RNdQ"),
e=q["default"].cardRoot.getElementsByClassName("_cerberus-shared_style_asinImage__3JG_P"),h=a.dataset.customerId||null,l=a.dataset.marketplaceId,f=a.dataset.sessionId,y=a.dataset.requestId,r=M(a),m=K(b,d,g);d=function(a){var d=b[a],e={subsAsin:(d?d.dataset:{}).subasin};a=k.__assign(k.__assign({customerId:h,obfuscatedMarketplaceId:l,sessionId:f},r),null===m||void 0===m?void 0:m[a]);n["default"].event(a,c,"prservices.SurfacedSubstituteEvent.6");var g=k.__assign(k.__assign({obfuscatedMarketplaceId:l,
sessionId:f,surfacedAsinRequestId:y},r),e);d.onclick=function(){return k.__awaiter(void 0,void 0,void 0,function(){return k.__generator(this,function(a){n["default"].event(g,c,"prservices.ClickedSubstituteEvent.3");return[2]})})}};for(a=0;a<b.length;a++)d(a);d=function(a){a=e[a];var b={subsAsin:(a?a.dataset:{}).subasin},d=k.__assign(k.__assign({obfuscatedMarketplaceId:l,sessionId:f,surfacedAsinRequestId:y},r),b);a.onclick=function(){return k.__awaiter(void 0,void 0,void 0,function(){return k.__generator(this,
function(a){n["default"].event(d,c,"prservices.ClickedSubstituteEvent.3");return[2]})})}};for(a=0;a<e.length;a++)d(a)},P=function(a,c,b,d){var g=a.dataset.reftag||"";if((a=q["default"].cardRoot.getElementsByClassName("_cerberus-shared_actions_action__2rnkD"))&&0<a.length){var e="prservices_cart_percolate"===c?"rsi.cart.":"rsi.oos.";n["default"].count(e+"atc.shown."+b,1);Array.prototype.forEach.call(a,function(a,c){var f=g+"_oos_atcajx_"+b+"_"+c,k=g+"_oos_cartajx_"+b+"_"+c;c=a.querySelector("button");
var h=a.querySelector("._cerberus-shared_actions_action-message-loading___LqSL"),m=a.querySelector("._cerberus-shared_actions_action-message-success__3NeI4"),l=a.querySelector("._cerberus-shared_actions_action-message-fail__1S0wg");a=c?c.dataset:{};var N=a.asin,O=a.offerlistingid;c.addEventListener("click",function(a){n["default"].count(e+"atc.click."+b,1);v(h,m,l,void 0);u.addTracking(d.addToCart,{},f||"")({asin:N,offerListingId:O}).then(function(a){n["default"].count(e+"atc.success."+b,1);u.addTracking(d.getCartCount,
{},k||"")().then(function(a){L(window,a.items,b);n["default"].count(e+"gcc.success."+b,1)}).catch(function(a){t.log("CerberusSharedCards.getCartCount."+a.toString(),"ERROR");n["default"].count(e+"gcc.fail."+b,1)});v(h,m,l,!0);a=q["default"].cardRoot.getElementsByClassName("_cerberus-shared_style_addToCartClickedFlag__3rAXC");0<a.length&&a[0].setAttribute("value","true")}).catch(function(a){t.log("CerberusSharedCards.ATC."+a.toString(),"ERROR");n["default"].count(e+"atc.fail."+b,1);v(h,m,l,!1)})})})}};
x._operationNames=["addToCart","getCartCount","getPrimeBadge"];x.card=function(){return k.__awaiter(void 0,void 0,void 0,function(){var a,c,b,d,g,e,h,l,f,p,r,m;return k.__generator(this,function(k){a=J(window,"cerberus-shared");a.uet("bb");c=I["default"].setup();b=q["default"].cardRoot.getElementsByClassName("_cerberus-shared_style_landingPageData__26puO")[0];d=b.dataset.producerId;g=b.dataset.deviceType||"";e=b.dataset.reftag||"";h=b.dataset.refreshImages||"";"prservices_dpx_percolate"===d?n["default"].count("prservices.ooswidget.shown."+
g,1):"prservices_fod_widget_feedback_loop"===d?n["default"].count("prservices.fodwidget.shown."+g,1):"prservices_cart_percolate"===d&&H["default"].refreshAutoTruncate();l=[];f=q["default"].cardRoot.getElementsByClassName("_cerberus-shared_style_lazyPrimeBadge__1Jj-2");Array.prototype.forEach.call(f,function(a){a.dataset.asin&&l.push(a.dataset.asin)});P(b,d,g,c);a.uet("cf");("prservices_fod_widget_feedback_loop"===d||"pd_aw_lpo"===e)&&0<l.length?u.addTracking(c.getPrimeBadge)(l).then(function(c){Array.prototype.forEach.call(f,
function(a){var b=a.dataset.asin;b&&c[b]?(a.classList.remove("_cerberus-shared_style_hidden__V3R2s"),a.dataset.isprime="true"):(a.classList.add("_cerberus-shared_style_hidden__V3R2s"),a.dataset.isprime="false")});a.uet("be");d&&w(b,d);a.uex("ld")}).catch(function(c){t.log("getPrimeBadge failed: "+c);a.uet("be");d&&w(b,d);a.uex("ld")}):(a.uet("be"),d&&w(b,d),a.uex("ld"));if("T1"===h)for(p=q["default"].cardRoot.getElementsByClassName("_cerberus-shared_style_asinImage__3JG_P"),r=function(a){var b=p[a].getElementsByTagName("img")[0];
G["default"].pageLoad.then(function(){return F["default"].loadDynamicImage(b)})},m=0;m<p.length;m++)r(m);return[2]})})}});
