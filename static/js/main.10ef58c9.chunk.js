(this["webpackJsonpcard-dnd"]=this["webpackJsonpcard-dnd"]||[]).push([[0],{25:function(e,t,n){e.exports=n(32)},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),d=n.n(c),i=n(35),l=n(17),s=n(10),u=n(3),o=n(4),f=n(34),g="card",m=function(e){var t=e.url;return a.a.createElement("div",{className:"card-outer"},a.a.createElement("div",{className:"card-inner"},a.a.createElement("img",{src:t,width:"60",height:"84",draggable:"false"})))},I=function(e){var t=e.cards;return a.a.createElement("div",null,t.slice(0,3).map((function(e,n){return a.a.createElement("div",{key:e.id,className:"card card-dragged",style:{zIndex:t.length-n,transform:"rotateZ(".concat(2.5*-n,"deg)")}},a.a.createElement(m,{url:e.url}))})))},E={position:"fixed",pointerEvents:"none",zIndex:100,left:0,top:0,right:0,bottom:0},v=function(e){if(!e)return{display:"none"};var t=e.x,n=e.y;return{transform:"translate(".concat(t,"px, ").concat(n,"px)"),filter:"drop-shadow(0 2px 12px rgba(0,0,0,0.45))"}};function x(){var e=Object(f.a)((function(e){return{item:e.getItem(),itemType:e.getItemType(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}})),t=e.itemType,n=e.isDragging,r=e.item,c=e.currentOffset;return n?a.a.createElement("div",{style:E},a.a.createElement("div",{style:v(c)},function(e,t){switch(e){case g:return a.a.createElement(I,{cards:t.cardsDragStack});default:return null}}(t,r))):null}var p=n(22),h=n(36),C=n(37);function O(e){var t=Object(r.useRef)(null),n=Object(h.a)({item:{type:g},begin:function(t){var n,r={id:e.id,order:e.order,url:e.url};e.selectedCards.find((function(t){return t.id===e.id}))?n=e.selectedCards:(e.clearItemSelection(),n=[r]);var a=n.concat();a.splice(n.findIndex((function(t){return t.id===e.id})),1);var c=[r].concat(Object(u.a)(a)),d=n.map((function(e){return e.id}));return{cards:n,cardsDragStack:c,draggedCard:r,cardsIDs:d}},isDragging:function(t){return t.getItem().cardsIDs.includes(e.id)},end:function(t,n){e.rearrangeCards(t),e.clearItemSelection()},collect:function(e){return{isDragging:e.isDragging()}}}),c=Object(s.a)(n,3),d=c[0].isDragging,i=c[1],l=c[2],o=Object(C.a)({accept:g,hover:function(n,r){var a,c=n.draggedCard.index,d=e.index,i=null===(a=t.current)||void 0===a?void 0:a.getBoundingClientRect(),l=i.left+(i.right-i.left)/2,s=r.getClientOffset().x<l?d:d+1;e.setInsertIndex(c,d,s)},collect:function(e){return{hovered:e.isOver()}}}),f=Object(s.a)(o,2),I=f[0].hovered;i((0,f[1])(t));Object(r.useEffect)((function(){l(Object(p.a)(),{captureDraggingState:!0})}),[]);var E=e.url,v=d?.4:1,x=[];return e.isSelected&&x.push("card-wrapper-selected"),a.a.createElement("div",{key:"card-div-"+e.id,style:{position:"relative"}},e.insertLineOnLeft&&I&&a.a.createElement("div",{className:"insert-line-left"}),a.a.createElement("div",{className:"card-wrapper "+x.join(" ")},a.a.createElement("div",{ref:t,className:"card",onClick:function(t){e.onSelectionChange(e.index,t.metaKey,t.shiftKey)},style:{opacity:v}},a.a.createElement(m,{url:E}))),e.insertLineOnRight&&I&&a.a.createElement("div",{className:"insert-line-right"}))}var S=function(e,t){switch(t.type){case"CLEAR_SELECTION":return Object(o.a)(Object(o.a)({},e),{},{selectedCards:D.selectedCards,lastSelectedIndex:D.lastSelectedIndex});case"UPDATE_SELECTION":return Object(o.a)(Object(o.a)({},e),{},{selectedCards:t.newSelectedCards,lastSelectedIndex:t.newLastSelectedIndex});case"REARRANGE_CARDS":return Object(o.a)(Object(o.a)({},e),{},{cards:t.newCards});case"SET_INSERTINDEX":return Object(o.a)(Object(o.a)({},e),{},{dragIndex:t.dragIndex,hoverIndex:t.hoverIndex,insertIndex:t.insertIndex});default:throw new Error}},b=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)},y=["A","2","3","4","5","6","7","8","9","T","J","Q","K","X"],j=["C","D","H","S"],D={cards:Object(u.a)(Array(50).keys()).map((function(e){return{id:e+1,order:e,url:"/resources/"+y[b(0,y.length)]+j[b(0,j.length)]+".svg"}})),selectedCards:[],lastSelectedIndex:-1,dragIndex:-1,hoverIndex:-1,insertIndex:-1,isDragging:!1};function N(){var e=Object(r.useReducer)(S,D),t=Object(s.a)(e,2),n=t[0],c=t[1],d=function(){c({type:"CLEAR_SELECTION"})},i=function(e,t,r){var a,d=n.cards,i=e<0?"":d[e],l=e;if(t||r){if(r)a=n.lastSelectedIndex>=e?[].concat.apply(n.selectedCards,d.slice(e,n.lastSelectedIndex)):[].concat.apply(n.selectedCards,d.slice(n.lastSelectedIndex+1,e+1));else if(t){var s=n.selectedCards.findIndex((function(e){return e===i}));a=s>=0?[].concat(Object(u.a)(n.selectedCards.slice(0,s)),Object(u.a)(n.selectedCards.slice(s+1))):[].concat(Object(u.a)(n.selectedCards),[i])}}else a=[i];var o=d?d.filter((function(e){return a.find((function(t){return t===e}))})):[];c({type:"UPDATE_SELECTION",newSelectedCards:o,newLastSelectedIndex:l})},l=function(e){var t,r=n.cards.slice(),a=e.cards;t=n.insertIndex>=0&n.insertIndex<r.length?n.insertIndex:r.length;var d=r.slice(0,t).filter((function(e){return!a.find((function(t){return t.id===e.id}))})),i=r.slice(t).filter((function(e){return!a.find((function(t){return t.id===e.id}))})),l=[].concat(Object(u.a)(d),Object(u.a)(a),Object(u.a)(i));c({type:"REARRANGE_CARDS",newCards:l})},o=function(e,t,r){n.dragIndex===e&&n.hoverIndex===t&&n.insertIndex===r||c({type:"SET_INSERTINDEX",dragIndex:e,hoverIndex:t,insertIndex:r})};return a.a.createElement("main",null,a.a.createElement(x,null),a.a.createElement("div",{className:"container"},n.cards.map((function(e,t){var r=n.hoverIndex===t&&n.insertIndex===t,c=n.hoverIndex===t&&n.insertIndex===t+1;return a.a.createElement(O,{key:"card-"+e.id,id:e.id,index:t,order:e.order,url:e.url,selectedCards:n.selectedCards,rearrangeCards:l,setInsertIndex:o,onSelectionChange:i,clearItemSelection:d,isSelected:n.selectedCards.includes(e),insertLineOnLeft:r,insertLineOnRight:c})}))))}n(31);function R(){return a.a.createElement("div",{className:"App"},a.a.createElement("h2",null,"Drag and drop multiple items with React DnD"),a.a.createElement("h4",null,"Use Shift or Cmd key to multi-select"),a.a.createElement(i.a,{backend:l.a},a.a.createElement(N,null)))}var w=document.getElementById("root");d.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(R,null)),w)}},[[25,1,2]]]);
//# sourceMappingURL=main.10ef58c9.chunk.js.map