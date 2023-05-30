(self.webpackChunkblockexplorer=self.webpackChunkblockexplorer||[]).push([[557],{4557:function(e,t,n){"use strict";n.r(t),n.d(t,{AlchemyWebSocketProvider:function(){return L}});var r=n(7762),s=n(7326),o=n(1752),i=n(1120),c=n(136),a=n(9388),u=n(4165),l=n(3433),h=n(5671),f=n(3144),d=n(9605),p=n(7949),v=n(2257),b=n(9083),m=n(2963),k=n(520),y=n(4721),g=n(9502),w=n(7059),_=null;try{if(null==(_=WebSocket))throw new Error("inject please")}catch(M){var E=new g.Yd(w.i);_=function(){E.throwError("WebSockets not supported in this environment",g.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new WebSocket()"})}}var I=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{a(r.next(e))}catch(t){o(t)}}function c(e){try{a(r.throw(e))}catch(t){o(t)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((r=r.apply(e,t||[])).next())}))},N=new g.Yd(w.i),x=1,T=function(e){(0,c.Z)(n,e);var t=(0,a.Z)(n);function n(e,r){var c,a;(0,h.Z)(this,n),"any"===r&&N.throwError("WebSocketProvider does not support 'any' network yet",g.Yd.errors.UNSUPPORTED_OPERATION,{operation:"network:any"}),(a="string"===typeof e?t.call(this,e,r):t.call(this,"_websocket",r))._pollingInterval=-1,a._wsReady=!1,"string"===typeof e?(0,k.zG)((0,s.Z)(a),"_websocket",new _(a.connection.url)):(0,k.zG)((0,s.Z)(a),"_websocket",e),(0,k.zG)((0,s.Z)(a),"_requests",{}),(0,k.zG)((0,s.Z)(a),"_subs",{}),(0,k.zG)((0,s.Z)(a),"_subIds",{}),(0,k.zG)((0,s.Z)(a),"_detectNetwork",(0,o.Z)((c=(0,s.Z)(a),(0,i.Z)(n.prototype)),"detectNetwork",c).call(c)),a.websocket.onopen=function(){a._wsReady=!0,Object.keys(a._requests).forEach((function(e){a.websocket.send(a._requests[e].payload)}))},a.websocket.onmessage=function(e){var t=e.data,n=JSON.parse(t);if(null!=n.id){var r=String(n.id),o=a._requests[r];if(delete a._requests[r],void 0!==n.result)o.callback(null,n.result),a.emit("debug",{action:"response",request:JSON.parse(o.payload),response:n.result,provider:(0,s.Z)(a)});else{var i=null;n.error?(i=new Error(n.error.message||"unknown error"),(0,k.zG)(i,"code",n.error.code||null),(0,k.zG)(i,"response",t)):i=new Error("unknown error"),o.callback(i,void 0),a.emit("debug",{action:"response",error:i,request:JSON.parse(o.payload),provider:(0,s.Z)(a)})}}else if("eth_subscription"===n.method){var c=a._subs[n.params.subscription];c&&c.processFunc(n.params.result)}else console.warn("this should not happen")};var u=setInterval((function(){a.emit("poll")}),1e3);return u.unref&&u.unref(),(0,m.Z)(a)}return(0,f.Z)(n,[{key:"websocket",get:function(){return this._websocket}},{key:"detectNetwork",value:function(){return this._detectNetwork}},{key:"pollingInterval",get:function(){return 0},set:function(e){N.throwError("cannot set polling interval on WebSocketProvider",g.Yd.errors.UNSUPPORTED_OPERATION,{operation:"setPollingInterval"})}},{key:"resetEventsBlock",value:function(e){N.throwError("cannot reset events block on WebSocketProvider",g.Yd.errors.UNSUPPORTED_OPERATION,{operation:"resetEventBlock"})}},{key:"poll",value:function(){return I(this,void 0,void 0,(0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})))}},{key:"polling",set:function(e){e&&N.throwError("cannot set polling on WebSocketProvider",g.Yd.errors.UNSUPPORTED_OPERATION,{operation:"setPolling"})}},{key:"send",value:function(e,t){var n=this,r=x++;return new Promise((function(s,o){var i=JSON.stringify({method:e,params:t,id:r,jsonrpc:"2.0"});n.emit("debug",{action:"request",request:JSON.parse(i),provider:n}),n._requests[String(r)]={callback:function(e,t){return e?o(e):s(t)},payload:i},n._wsReady&&n.websocket.send(i)}))}},{key:"_subscribe",value:function(e,t,n){return I(this,void 0,void 0,(0,u.Z)().mark((function r(){var s,o,i=this;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return null==(s=this._subIds[e])&&(s=Promise.all(t).then((function(e){return i.send("eth_subscribe",e)})),this._subIds[e]=s),r.next=4,s;case 4:o=r.sent,this._subs[o]={tag:e,processFunc:n};case 6:case"end":return r.stop()}}),r,this)})))}},{key:"_startEvent",value:function(e){var t=this;switch(e.type){case"block":this._subscribe("block",["newHeads"],(function(e){var n=v.O$.from(e.number).toNumber();t._emitted.block=n,t.emit("block",n)}));break;case"pending":this._subscribe("pending",["newPendingTransactions"],(function(e){t.emit("pending",e)}));break;case"filter":this._subscribe(e.tag,["logs",this._getFilter(e.filter)],(function(n){null==n.removed&&(n.removed=!1),t.emit(e.filter,t.formatter.filterLog(n))}));break;case"tx":var n=function(e){var n=e.hash;t.getTransactionReceipt(n).then((function(e){e&&t.emit(n,e)}))};n(e),this._subscribe("tx",["newHeads"],(function(e){t._events.filter((function(e){return"tx"===e.type})).forEach(n)}));break;case"debug":case"poll":case"willPoll":case"didPoll":case"error":break;default:console.log("unhandled:",e)}}},{key:"_stopEvent",value:function(e){var t=this,n=e.tag;if("tx"===e.type){if(this._events.filter((function(e){return"tx"===e.type})).length)return;n="tx"}else if(this.listenerCount(e.event))return;var r=this._subIds[n];r&&(delete this._subIds[n],r.then((function(e){t._subs[e]&&(delete t._subs[e],t.send("eth_unsubscribe",[e]))})))}},{key:"destroy",value:function(){return I(this,void 0,void 0,(0,u.Z)().mark((function e(){var t=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.websocket.readyState!==_.CONNECTING){e.next=3;break}return e.next=3,new Promise((function(e){t.websocket.onopen=function(){e(!0)},t.websocket.onerror=function(){e(!1)}}));case 3:this.websocket.close(1e3);case 4:case"end":return e.stop()}}),e,this)})))}}],[{key:"defaultUrl",value:function(){return"ws://localhost:8546"}}]),n}(y.r),O=n(1195),C=(n(4569),function(){function e(t){(0,h.Z)(this,e),this.provider=t,this.maxBackfillBlocks=120}return(0,f.Z)(e,[{key:"getNewHeadsBackfill",value:function(e,t,n){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function r(){var s,o,i,c,a;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return R(e),r.next=3,this.getBlockNumber();case 3:if(s=r.sent,R(e),0!==t.length){r.next=7;break}return r.abrupt("return",this.getHeadEventsInRange(Math.max(n,s-this.maxBackfillBlocks)+1,s+1));case 7:if(o=(0,d.f)(t[t.length-1].number),i=s-this.maxBackfillBlocks+1,!(o<=i)){r.next=11;break}return r.abrupt("return",this.getHeadEventsInRange(i,s+1));case 11:return r.next=13,this.getReorgHeads(e,t);case 13:return c=r.sent,R(e),r.next=17,this.getHeadEventsInRange(o+1,s+1);case 17:return a=r.sent,R(e),r.abrupt("return",[].concat((0,l.Z)(c),(0,l.Z)(a)));case 20:case"end":return r.stop()}}),r,this)})))}},{key:"getLogsBackfill",value:function(e,t,n,r){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function s(){var o,i,c,a,h,f,p;return(0,u.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return R(e),s.next=3,this.getBlockNumber();case 3:if(o=s.sent,R(e),0!==n.length){s.next=7;break}return s.abrupt("return",this.getLogsInRange(t,Math.max(r,o-this.maxBackfillBlocks)+1,o+1));case 7:if(i=(0,d.f)(n[n.length-1].blockNumber),c=o-this.maxBackfillBlocks+1,!(i<c)){s.next=11;break}return s.abrupt("return",this.getLogsInRange(t,c,o+1));case 11:return s.next=13,this.getCommonAncestor(e,n);case 13:return a=s.sent,R(e),h=n.filter((function(e){return(0,d.f)(e.blockNumber)>a.blockNumber})).map((function(e){return Object.assign(Object.assign({},e),{removed:!0})})),f=a.blockNumber===Number.NEGATIVE_INFINITY?(0,d.f)(n[0].blockNumber):a.blockNumber,s.next=19,this.getLogsInRange(t,f,o+1);case 19:return p=(p=s.sent).filter((function(e){return e&&((0,d.f)(e.blockNumber)>a.blockNumber||(0,d.f)(e.logIndex)>a.logIndex)})),R(e),s.abrupt("return",[].concat((0,l.Z)(h),(0,l.Z)(p)));case 23:case"end":return s.stop()}}),s,this)})))}},{key:"setMaxBackfillBlock",value:function(e){this.maxBackfillBlocks=e}},{key:"getBlockNumber",value:function(){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.provider.send("eth_blockNumber");case 2:return t=e.sent,e.abrupt("return",(0,d.f)(t));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"getHeadEventsInRange",value:function(e,t){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function n(){var r,s,o,i;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e>=t)){n.next=2;break}return n.abrupt("return",[]);case 2:for(r=[],s=e;s<t;s++)r.push({method:"eth_getBlockByNumber",params:[(0,d.t)(s),!1]});return n.next=6,this.provider.sendBatch(r);case 6:return o=n.sent,i=o.reduce((function(e,t){return e.concat(t)}),[]),n.abrupt("return",i.map(Z));case 9:case"end":return n.stop()}}),n,this)})))}},{key:"getReorgHeads",value:function(e,t){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function n(){var r,s,o,i;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=[],s=t.length-1;case 2:if(!(s>=0)){n.next=14;break}return o=t[s],n.next=6,this.getBlockByNumber((0,d.f)(o.number));case 6:if(i=n.sent,R(e),o.hash!==i.hash){n.next=10;break}return n.abrupt("break",14);case 10:r.push(Z(i));case 11:s--,n.next=2;break;case 14:return n.abrupt("return",r.reverse());case 15:case"end":return n.stop()}}),n,this)})))}},{key:"getBlockByNumber",value:function(e){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function t(){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.provider.send("eth_getBlockByNumber",[(0,d.t)(e),!1]));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"getCommonAncestor",value:function(e,t){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function n(){var r,s,o;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getBlockByNumber((0,d.f)(t[t.length-1].blockNumber));case 2:r=n.sent,R(e),s=t.length-1;case 5:if(!(s>=0)){n.next=16;break}if((o=t[s]).blockNumber===r.number){n.next=11;break}return n.next=10,this.getBlockByNumber((0,d.f)(o.blockNumber));case 10:r=n.sent;case 11:if(o.blockHash!==r.hash){n.next=13;break}return n.abrupt("return",{blockNumber:(0,d.f)(o.blockNumber),logIndex:(0,d.f)(o.logIndex)});case 13:s--,n.next=5;break;case 16:return n.abrupt("return",{blockNumber:Number.NEGATIVE_INFINITY,logIndex:Number.NEGATIVE_INFINITY});case 17:case"end":return n.stop()}}),n,this)})))}},{key:"getLogsInRange",value:function(e,t,n){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function r(){var s;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t>=n)){r.next=2;break}return r.abrupt("return",[]);case 2:return s=Object.assign(Object.assign({},e),{fromBlock:(0,d.t)(t),toBlock:(0,d.t)(n-1)}),r.abrupt("return",this.provider.send("eth_getLogs",[s]));case 4:case"end":return r.stop()}}),r,this)})))}}]),e}());function Z(e){var t=Object.assign({},e);return delete t.totalDifficulty,delete t.transactions,delete t.uncles,t}function B(e){return P(e,(function(e){return e.hash}))}function S(e){return P(e,(function(e){return"".concat(e.blockHash,"/").concat(e.logIndex)}))}function P(e,t){var n=new Set,r=[];return e.forEach((function(e){var s=t(e);n.has(s)||(n.add(s),r.push(e))})),r}var A=new Error("Cancelled");function R(e){if(e())throw A}var L=function(e){(0,c.Z)(m,e);var t=(0,a.Z)(m);function m(e,o){var i,c;(0,h.Z)(this,m);var a=O.AlchemyProvider.getApiKey(e.apiKey),l=O.AlchemyProvider.getAlchemyNetwork(e.network),f=O.AlchemyProvider.getAlchemyConnectionInfo(l,a,"wss"),v="alchemy-sdk-".concat(d.V),b=new p.Z(null!==(c=e.url)&&void 0!==c?c:f.url,v,{wsConstructor:null!==o&&void 0!==o?o:"undefined"!==typeof process&&null!=process&&null!=process.versions&&null!=process.versions.node?n(5087).w3cwebsocket:WebSocket}),k=d.E[l];return(i=t.call(this,b,k))._events=[],i.virtualSubscriptionsById=new Map,i.virtualIdsByPhysicalId=new Map,i.handleMessage=function(e){var t=JSON.parse(e.data);if(function(e){return!function(e){return Array.isArray(e)||"2.0"===e.jsonrpc&&void 0!==e.id}(e)}(t)){var n=t.params.subscription,r=i.virtualIdsByPhysicalId.get(n);if(r){var s=i.virtualSubscriptionsById.get(r);if("eth_subscribe"===s.method)switch(s.params[0]){case"newHeads":var o=s,c=t,a=o.isBackfilling,u=o.backfillBuffer,l=c.params.result;a?function(e,t){F(e,t,H)}(u,l):n!==r?i.emitAndRememberEvent(r,l,H):i.rememberEvent(r,l,H);break;case"logs":var h=s,f=t,d=h.isBackfilling,p=h.backfillBuffer,v=f.params.result;d?function(e,t){F(e,t,D)}(p,v):r!==n?i.emitAndRememberEvent(r,v,D):i.rememberEvent(r,v,D)}}}},i.handleReopen=function(){i.virtualIdsByPhysicalId.clear();var e=function(){var e=!1;return{cancel:function(){return e=!0},isCancelled:function(){return e}}}(),t=e.cancel,n=e.isCancelled;i.cancelBackfill=t;var o,c=(0,r.Z)(i.virtualSubscriptionsById.values());try{var a=function(){var e=o.value;(0,d._)((0,s.Z)(i),void 0,void 0,(0,u.Z)().mark((function t(){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.resubscribeAndBackfill(n,e);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),n()||console.error('Error while backfilling "'.concat(e.params[0],'" subscription. Some events may be missing.'),t.t0);case 8:case"end":return t.stop()}}),t,this,[[0,5]])})))};for(c.s();!(o=c.n()).done;)a()}catch(l){c.e(l)}finally{c.f()}i.startHeartbeat()},i.stopHeartbeatAndBackfill=function(){null!=i.heartbeatIntervalId&&(clearInterval(i.heartbeatIntervalId),i.heartbeatIntervalId=void 0),i.cancelBackfill()},i.apiKey=a,i.backfiller=new C((0,s.Z)(i)),i.addSocketListeners(),i.startHeartbeat(),i.cancelBackfill=d.n,i}return(0,f.Z)(m,[{key:"on",value:function(e,t){return this._addEventListener(e,t,!1)}},{key:"once",value:function(e,t){return this._addEventListener(e,t,!0)}},{key:"off",value:function(e,t){return(0,d.i)(e)?this._off(e,t):(0,o.Z)((0,i.Z)(m.prototype),"off",this).call(this,e,t)}},{key:"removeAllListeners",value:function(e){return void 0!==e&&(0,d.i)(e)?this._removeAllListeners(e):(0,o.Z)((0,i.Z)(m.prototype),"removeAllListeners",this).call(this,e)}},{key:"listenerCount",value:function(e){return void 0!==e&&(0,d.i)(e)?this._listenerCount(e):(0,o.Z)((0,i.Z)(m.prototype),"listenerCount",this).call(this,e)}},{key:"listeners",value:function(e){return void 0!==e&&(0,d.i)(e)?this._listeners(e):(0,o.Z)((0,i.Z)(m.prototype),"listeners",this).call(this,e)}},{key:"_addEventListener",value:function(e,t,n){if((0,d.i)(e)){(0,d.v)(e);var r=new d.c((0,d.d)(e),t,n);return this._events.push(r),this._startEvent(r),this}return(0,o.Z)((0,i.Z)(m.prototype),"_addEventListener",this).call(this,e,t,n)}},{key:"_startEvent",value:function(e){[].concat((0,l.Z)(d.A),["block","filter"]).includes(e.type)?this.customStartEvent(e):(0,o.Z)((0,i.Z)(m.prototype),"_startEvent",this).call(this,e)}},{key:"_subscribe",value:function(e,t,n,r){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function s(){var o,i,c,a,l=this;return(0,u.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return o=this._subIds[e],s.next=3,this.getBlockNumber();case 3:return i=s.sent,null==o&&(o=Promise.all(t).then((function(e){return l.send("eth_subscribe",e)})),this._subIds[e]=o),s.next=7,o;case 7:return c=s.sent,s.next=10,Promise.all(t);case 10:a=s.sent,this.virtualSubscriptionsById.set(c,{event:r,method:"eth_subscribe",params:a,startingBlockNumber:i,virtualId:c,physicalId:c,sentEvents:[],isBackfilling:!1,backfillBuffer:[]}),this.virtualIdsByPhysicalId.set(c,c),this._subs[c]={tag:e,processFunc:n};case 14:case"end":return s.stop()}}),s,this)})))}},{key:"emit",value:function(e){for(var t,n=this,r=arguments.length,s=new Array(r>1?r-1:0),c=1;c<r;c++)s[c-1]=arguments[c];if((0,d.i)(e)){var a=!1,u=[],l=(0,d.d)(e);return this._events=this._events.filter((function(e){return e.tag!==l||(setTimeout((function(){e.listener.apply(n,s)}),0),a=!0,!e.once||(u.push(e),!1))})),u.forEach((function(e){n._stopEvent(e)})),a}return(t=(0,o.Z)((0,i.Z)(m.prototype),"emit",this)).call.apply(t,[this,e].concat(s))}},{key:"sendBatch",value:function(e){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function t(){var n,r,s,o;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=0,r=e.map((function(e){return{method:e.method,params:e.params,jsonrpc:"2.0",id:"alchemy-sdk:".concat(n++)}})),t.next=4,this.sendBatchConcurrently(r);case 4:if(s=t.sent,!(o=s.find((function(e){return!!e.error})))){t.next=8;break}throw new Error(o.error.message);case 8:return t.abrupt("return",s.sort((function(e,t){return e.id-t.id})).map((function(e){return e.result})));case 9:case"end":return t.stop()}}),t,this)})))}},{key:"destroy",value:function(){return this.removeSocketListeners(),this.stopHeartbeatAndBackfill(),(0,o.Z)((0,i.Z)(m.prototype),"destroy",this).call(this)}},{key:"isCommunityResource",value:function(){return this.apiKey===d.D}},{key:"_stopEvent",value:function(e){var t=this,n=e.tag;if(d.A.includes(e.type)){if(this._events.filter((function(e){return d.A.includes(e.type)})).length)return}else if("tx"===e.type){if(this._events.filter((function(e){return"tx"===e.type})).length)return;n="tx"}else if(this.listenerCount(e.event))return;var r=this._subIds[n];r&&(delete this._subIds[n],r.then((function(e){t._subs[e]&&(delete t._subs[e],t.send("eth_unsubscribe",[e]))})))}},{key:"addSocketListeners",value:function(){this._websocket.addEventListener("message",this.handleMessage),this._websocket.addEventListener("reopen",this.handleReopen),this._websocket.addEventListener("down",this.stopHeartbeatAndBackfill)}},{key:"removeSocketListeners",value:function(){this._websocket.removeEventListener("message",this.handleMessage),this._websocket.removeEventListener("reopen",this.handleReopen),this._websocket.removeEventListener("down",this.stopHeartbeatAndBackfill)}},{key:"resubscribeAndBackfill",value:function(e,t){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function n(){var r,s,o,i,c,a,h,f,d,p,v=this;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.virtualId,s=t.method,o=t.params,i=t.sentEvents,c=t.backfillBuffer,a=t.startingBlockNumber,t.isBackfilling=!0,c.length=0,n.prev=3,n.next=6,this.send(s,o);case 6:h=n.sent,R(e),t.physicalId=h,this.virtualIdsByPhysicalId.set(h,r),n.t0=o[0],n.next="newHeads"===n.t0?13:"logs"===n.t0?20:28;break;case 13:return n.next=15,j((function(){return G(v.backfiller.getNewHeadsBackfill(e,i,a),6e4)}),5,(function(){return!e()}));case 15:return f=n.sent,R(e),B([].concat((0,l.Z)(f),(0,l.Z)(c))).forEach((function(e){return v.emitNewHeadsEvent(r,e)})),n.abrupt("break",29);case 20:return d=o[1]||{},n.next=23,j((function(){return G(v.backfiller.getLogsBackfill(e,d,i,a),6e4)}),5,(function(){return!e()}));case 23:return p=n.sent,R(e),S([].concat((0,l.Z)(p),(0,l.Z)(c))).forEach((function(e){return v.emitLogsEvent(r,e)})),n.abrupt("break",29);case 28:return n.abrupt("break",29);case 29:return n.prev=29,t.isBackfilling=!1,c.length=0,n.finish(29);case 33:case"end":return n.stop()}}),n,this,[[3,,29,33]])})))}},{key:"emitNewHeadsEvent",value:function(e,t){this.emitAndRememberEvent(e,t,H)}},{key:"emitLogsEvent",value:function(e,t){this.emitAndRememberEvent(e,t,D)}},{key:"emitAndRememberEvent",value:function(e,t,n){this.rememberEvent(e,t,n);var r=this.virtualSubscriptionsById.get(e);r&&this.emitGenericEvent(r,t)}},{key:"rememberEvent",value:function(e,t,n){var r=this.virtualSubscriptionsById.get(e);r&&F(r.sentEvents,Object.assign({},t),n)}},{key:"emitGenericEvent",value:function(e,t){this.emitProcessFn(e.event)(t)}},{key:"startHeartbeat",value:function(){var e=this;null==this.heartbeatIntervalId&&(this.heartbeatIntervalId=setInterval((function(){return(0,d._)(e,void 0,void 0,(0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(this.send("net_version"),1e4);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this._websocket.reconnect();case 8:case"end":return e.stop()}}),e,this,[[0,5]])})))}),3e4))}},{key:"sendBatchConcurrently",value:function(e){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function t(){var n=this;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(e.map((function(e){return n.send(e.method,e.params)}))));case 1:case"end":return t.stop()}}),t)})))}},{key:"customStartEvent",value:function(e){if(e.type===d.e){var t=e.fromAddress,n=e.toAddress,r=e.hashesOnly;this._subscribe(e.tag,[d.h.PENDING_TRANSACTIONS,{fromAddress:t,toAddress:n,hashesOnly:r}],this.emitProcessFn(e),e)}else if(e.type===d.j){var s=e.addresses,o=e.includeRemoved,i=e.hashesOnly;this._subscribe(e.tag,[d.h.MINED_TRANSACTIONS,{addresses:s,includeRemoved:o,hashesOnly:i}],this.emitProcessFn(e),e)}else"block"===e.type?this._subscribe("block",["newHeads"],this.emitProcessFn(e),e):"filter"===e.type&&this._subscribe(e.tag,["logs",this._getFilter(e.filter)],this.emitProcessFn(e),e)}},{key:"emitProcessFn",value:function(e){var t=this;switch(e.type){case d.e:return function(n){return t.emit({method:d.h.PENDING_TRANSACTIONS,fromAddress:e.fromAddress,toAddress:e.toAddress,hashesOnly:e.hashesOnly},n)};case d.j:return function(n){return t.emit({method:d.h.MINED_TRANSACTIONS,addresses:e.addresses,includeRemoved:e.includeRemoved,hashesOnly:e.hashesOnly},n)};case"block":return function(e){var n=v.O$.from(e.number).toNumber();t._emitted.block=n,t.emit("block",n)};case"filter":return function(n){null==n.removed&&(n.removed=!1),t.emit(e.filter,t.formatter.filterLog(n))};default:throw new Error("Invalid event type to `emitProcessFn()`")}}},{key:"_off",value:function(e,t){var n=this;if(null==t)return this.removeAllListeners(e);var r=[],s=!1,o=(0,d.d)(e);return this._events=this._events.filter((function(e){return e.tag!==o||e.listener!=t||(!!s||(s=!0,r.push(e),!1))})),r.forEach((function(e){n._stopEvent(e)})),this}},{key:"_removeAllListeners",value:function(e){var t=this,n=[];if(null==e)n=this._events,this._events=[];else{var r=(0,d.d)(e);this._events=this._events.filter((function(e){return e.tag!==r||(n.push(e),!1)}))}return n.forEach((function(e){t._stopEvent(e)})),this}},{key:"_listenerCount",value:function(e){if(!e)return this._events.length;var t=(0,d.d)(e);return this._events.filter((function(e){return e.tag===t})).length}},{key:"_listeners",value:function(e){if(null==e)return this._events.map((function(e){return e.listener}));var t=(0,d.d)(e);return this._events.filter((function(e){return e.tag===t})).map((function(e){return e.listener}))}}],[{key:"getNetwork",value:function(e){return"string"===typeof e&&e in d.C?d.C[e]:(0,b.H)(e)}}]),m}(T);function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0};return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function r(){var s,o;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:s=0,o=0;case 2:return r.prev=3,r.next=6,e();case 6:return r.abrupt("return",r.sent);case 9:if(r.prev=9,r.t0=r.catch(3),!(++o>=t)&&n(r.t0)){r.next=14;break}throw r.t0;case 14:return r.next=16,W(s);case 16:if(n(r.t0)){r.next=18;break}throw r.t0;case 18:s=0===s?1e3:Math.min(3e4,2*s);case 19:r.next=2;break;case 21:case"end":return r.stop()}}),r,null,[[3,9]])})))}function W(e){return new Promise((function(t){return setTimeout(t,e)}))}function G(e,t){return Promise.race([e,new Promise((function(e,n){return setTimeout((function(){return n(new Error("Timeout"))}),t)}))])}function H(e){return(0,d.f)(e.number)}function D(e){return(0,d.f)(e.blockNumber)}function F(e,t,n){var r=n(t),s=e.findIndex((function(e){return n(e)>r-10}));-1===s?e.length=0:e.splice(0,s),e.push(t)}},4210:function(e){var t=function(){if("object"===typeof self&&self)return self;if("object"===typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"===typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}()},7949:function(e,t){"use strict";var n=function(){function e(t,n,s){if(void 0===s&&(s={}),this.url=t,this.onclose=null,this.onerror=null,this.onmessage=null,this.onopen=null,this.ondown=null,this.onreopen=null,this.CONNECTING=e.CONNECTING,this.OPEN=e.OPEN,this.CLOSING=e.CLOSING,this.CLOSED=e.CLOSED,this.hasBeenOpened=!1,this.isClosed=!1,this.messageBuffer=[],this.nextRetryTime=0,this.reconnectCount=0,this.lastKnownExtensions="",this.lastKnownProtocol="",this.listeners={},null==n||"string"===typeof n||Array.isArray(n)?this.protocols=n:s=n,this.options=r(s),!this.options.wsConstructor){if("undefined"===typeof WebSocket)throw new Error("WebSocket not present in global scope and no wsConstructor option was provided.");this.options.wsConstructor=WebSocket}this.openNewWebSocket()}return Object.defineProperty(e.prototype,"binaryType",{get:function(){return this.binaryTypeInternal||"blob"},set:function(e){this.binaryTypeInternal=e,this.ws&&(this.ws.binaryType=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferedAmount",{get:function(){var e=this.ws?this.ws.bufferedAmount:0,t=!1;return this.messageBuffer.forEach((function(n){var r=function(e){return"string"===typeof e?2*e.length:e instanceof ArrayBuffer?e.byteLength:e instanceof Blob?e.size:void 0}(n);null!=r?e+=r:t=!0})),t&&this.debugLog("Some buffered data had unknown length. bufferedAmount() return value may be below the correct amount."),e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extensions",{get:function(){return this.ws?this.ws.extensions:this.lastKnownExtensions},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"protocol",{get:function(){return this.ws?this.ws.protocol:this.lastKnownProtocol},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"readyState",{get:function(){return this.isClosed?e.CLOSED:e.OPEN},enumerable:!0,configurable:!0}),e.prototype.close=function(e,t){this.disposeSocket(e,t),this.shutdown(),this.debugLog("WebSocket permanently closed by client.")},e.prototype.send=function(e){if(this.isClosed)throw new Error("WebSocket is already in CLOSING or CLOSED state.");this.ws&&this.ws.readyState===this.OPEN?this.ws.send(e):this.messageBuffer.push(e)},e.prototype.reconnect=function(){if(this.isClosed)throw new Error("Cannot call reconnect() on socket which is permanently closed.");this.disposeSocket(1e3,"Client requested reconnect."),this.handleClose(void 0)},e.prototype.addEventListener=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.prototype.dispatchEvent=function(e){return this.dispatchEventOfType(e.type,e)},e.prototype.removeEventListener=function(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter((function(e){return e!==t})))},e.prototype.openNewWebSocket=function(){var e=this;if(!this.isClosed){var t=this.options,n=t.connectTimeout,r=t.wsConstructor;this.debugLog("Opening new WebSocket to "+this.url+".");var s=new r(this.url,this.protocols);s.onclose=function(t){return e.handleClose(t)},s.onerror=function(t){return e.handleError(t)},s.onmessage=function(t){return e.handleMessage(t)},s.onopen=function(t){return e.handleOpen(t)},this.connectTimeoutId=setTimeout((function(){e.clearConnectTimeout(),e.disposeSocket(),e.handleClose(void 0)}),n),this.ws=s}},e.prototype.handleOpen=function(e){var t=this;if(this.ws&&!this.isClosed){var n=this.options.allClearResetTime;this.debugLog("WebSocket opened."),null!=this.binaryTypeInternal?this.ws.binaryType=this.binaryTypeInternal:this.binaryTypeInternal=this.ws.binaryType,this.clearConnectTimeout(),this.hasBeenOpened?this.dispatchEventOfType("reopen",e):(this.dispatchEventOfType("open",e),this.hasBeenOpened=!0),this.messageBuffer.forEach((function(e){return t.send(e)})),this.messageBuffer=[],this.allClearTimeoutId=setTimeout((function(){t.clearAllClearTimeout(),t.nextRetryTime=0,t.reconnectCount=0;var e=n/1e3|0;t.debugLog("WebSocket remained open for "+e+" seconds. Resetting retry time and count.")}),n)}},e.prototype.handleMessage=function(e){this.isClosed||this.dispatchEventOfType("message",e)},e.prototype.handleClose=function(e){var t=this;if(!this.isClosed){var n=this.options,r=n.maxReconnectAttempts,s=n.shouldReconnect;if(this.clearConnectTimeout(),this.clearAllClearTimeout(),this.ws&&(this.lastKnownExtensions=this.ws.extensions,this.lastKnownProtocol=this.ws.protocol,this.disposeSocket()),this.dispatchEventOfType("down",e),this.reconnectCount>=r)this.stopReconnecting(e,this.getTooManyFailedReconnectsMessage());else{var o=!e||s(e);"boolean"===typeof o?this.handleWillReconnect(o,e,"Provided shouldReconnect() returned false. Closing permanently."):o.then((function(n){t.isClosed||t.handleWillReconnect(n,e,"Provided shouldReconnect() resolved to false. Closing permanently.")}))}}},e.prototype.handleError=function(e){this.dispatchEventOfType("error",e),this.debugLog("WebSocket encountered an error.")},e.prototype.handleWillReconnect=function(e,t,n){e?this.reestablishConnection():this.stopReconnecting(t,n)},e.prototype.reestablishConnection=function(){var e=this,t=this.options,n=t.minReconnectDelay,r=t.maxReconnectDelay,s=t.reconnectBackoffFactor;this.reconnectCount++;var o=this.nextRetryTime;this.nextRetryTime=Math.max(n,Math.min(this.nextRetryTime*s,r)),setTimeout((function(){return e.openNewWebSocket()}),o);var i=o/1e3|0;this.debugLog("WebSocket was closed. Re-opening in "+i+" seconds.")},e.prototype.stopReconnecting=function(e,t){this.debugLog(t),this.shutdown(),e&&this.dispatchEventOfType("close",e)},e.prototype.shutdown=function(){this.isClosed=!0,this.clearAllTimeouts(),this.messageBuffer=[],this.disposeSocket()},e.prototype.disposeSocket=function(e,t){this.ws&&(this.ws.onerror=s,this.ws.onclose=s,this.ws.onmessage=s,this.ws.onopen=s,this.ws.close(e,t),this.ws=void 0)},e.prototype.clearAllTimeouts=function(){this.clearConnectTimeout(),this.clearAllClearTimeout()},e.prototype.clearConnectTimeout=function(){null!=this.connectTimeoutId&&(clearTimeout(this.connectTimeoutId),this.connectTimeoutId=void 0)},e.prototype.clearAllClearTimeout=function(){null!=this.allClearTimeoutId&&(clearTimeout(this.allClearTimeoutId),this.allClearTimeoutId=void 0)},e.prototype.dispatchEventOfType=function(e,t){var n=this;switch(e){case"close":this.onclose&&this.onclose(t);break;case"error":this.onerror&&this.onerror(t);break;case"message":this.onmessage&&this.onmessage(t);break;case"open":this.onopen&&this.onopen(t);break;case"down":this.ondown&&this.ondown(t);break;case"reopen":this.onreopen&&this.onreopen(t)}return e in this.listeners&&this.listeners[e].slice().forEach((function(e){return n.callListener(e,t)})),!t||!t.defaultPrevented},e.prototype.callListener=function(e,t){"function"===typeof e?e.call(this,t):e.handleEvent.call(this,t)},e.prototype.debugLog=function(e){this.options.debug&&console.log(e)},e.prototype.getTooManyFailedReconnectsMessage=function(){var e,t=this.options.maxReconnectAttempts;return"Failed to reconnect after "+t+" "+(e="attempt",(1===t?e:e+"s")+". Closing permanently.")},e.DEFAULT_OPTIONS={allClearResetTime:5e3,connectTimeout:5e3,debug:!1,minReconnectDelay:1e3,maxReconnectDelay:3e4,maxReconnectAttempts:Number.POSITIVE_INFINITY,reconnectBackoffFactor:1.5,shouldReconnect:function(){return!0},wsConstructor:void 0},e.CONNECTING=0,e.OPEN=1,e.CLOSING=2,e.CLOSED=3,e}();function r(e){var t={};return Object.keys(n.DEFAULT_OPTIONS).forEach((function(r){var s=e[r];t[r]=void 0===s?n.DEFAULT_OPTIONS[r]:s})),t}function s(){}t.Z=n},5087:function(e,t,n){var r;if("object"===typeof globalThis)r=globalThis;else try{r=n(4210)}catch(c){}finally{if(r||"undefined"===typeof window||(r=window),!r)throw new Error("Could not determine global this")}var s=r.WebSocket||r.MozWebSocket,o=n(1496);function i(e,t){return t?new s(e,t):new s(e)}s&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(i,e,{get:function(){return s[e]}})})),e.exports={w3cwebsocket:s?i:null,version:o}},1496:function(e,t,n){e.exports=n(9794).version},9794:function(e){"use strict";e.exports={version:"1.0.34"}}}]);
//# sourceMappingURL=557.da4737ee.chunk.js.map