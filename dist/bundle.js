(()=>{"use strict";var t=document.createElement("div");t.style.width="25px",t.style.height="25px",t.style.position="absolute",t.style.top="10px",t.style.right="10px",t.style.cursor="pointer";var e=document.createElement("div"),n=document.createElement("div");n.style.width="110%",n.style.height="2px",n.style.backgroundColor="white",n.style.transform="rotate(45deg)",n.style.position="absolute",n.style.top="50%",n.style.left="0";var l=document.createElement("div");l.style.width="110%",l.style.height="2px",l.style.backgroundColor="white",l.style.transform="rotate(-45deg)",l.style.position="absolute",l.style.top="50%",l.style.left="0",e.appendChild(n),e.appendChild(l),t.appendChild(e);const i=t,o=function(t,e,n,l){var o=document.createElement("div");o.id="chatHeader",o.style.width="94.6%",o.style.display="flex",o.style.alignItems="center",o.style.justifyContent="start",o.style.height="5%",o.style.borderRadius="10px 10px 0px 0px",o.style.backgroundColor=l||window.ChatComponentMainColor,o.style.color="white",o.style.padding="10px",o.style.alignSelf="flex-start";var r=document.createElement("img");r.src="https://storage.googleapis.com/emeric-logo/eai.png",r.alt="logo",r.title="logo",r.style.width="60px",r.style.cursor="pointer",r.addEventListener("click",(function(){window.open("https://emeric.ai/","_blank")}));var s=function(t){var e=document.createElement("div");e.style.width="25px",e.style.height="25px",e.style.position="absolute",e.style.top="10px",e.style.right="50px",e.style.cursor="pointer";var n=document.createElement("div");n.style.width="25px",n.style.height="25px",n.style.backgroundColor="white",n.style.borderRadius="50%",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center";var l=document.createElement("div");l.style.width="22px",l.style.height="22px",l.style.backgroundColor=t||window.ChatComponentMainColor,l.style.borderRadius="50%";var i=document.createElement("div");i.style.width="25px",i.style.height="25px",i.style.backgroundColor=t||window.ChatComponentMainColor,i.style.position="absolute",i.style.right="11px",i.style.top="11px";var o=document.createElement("div");return o.style.width="0",o.style.height="0",o.style.borderLeft="4px solid white",o.style.borderTop="4px solid transparent",o.style.borderBottom="4px solid transparent",o.style.transform="rotate(90deg)",o.style.left="-1px",o.style.position="absolute",n.appendChild(i),n.appendChild(l),n.appendChild(o),e.appendChild(n),e}(l);return s.addEventListener("click",(function(){n()})),o.appendChild(r),o.appendChild(s),o.appendChild(i),i.addEventListener("click",(function(){var n;n=e,t.style.display="none",n.style.display="flex"})),o},r=function(){var t=document.createElement("div");t.style.width="40px",t.style.height="40px",t.style.border="2px solid ".concat(window.ChatComponentMainColor),t.style.borderRadius="50%",t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center",t.style.minWidth="40px",t.style.maxWidth="40px",t.style.minHeight="40px",t.style.maxHeight="40px";var e=document.createElement("img");return e.src=window.chatBotPictureURL,e.alt="logo",e.title="logo",e.style.width="30px",e.style.height="30px",e.style.borderRadius="40%",t.appendChild(e),t.style.marginRight="5px",t};var s="@keyframes dot {\n    0% { background-color: grey; transform: scale(1); }\n    50% { background-color: #333333; transform: scale(1.3); }\n    100% { background-color: grey; transform: scale(1); }\n}",a=document.createElement("style");if(a.type="text/css","sheet"in a)a.appendChild(document.createTextNode(s)),document.head.appendChild(a);else{var d=document.styleSheets[0]||document.styleSheets.item(0);d.insertRule(s,d.cssRules.length)}var p=document.createElement("div");p.classList.add("loading"),p.style.alignItems="center",p.style.display="flex",p.style.justifyContent="center",p.style.height="20px",p.style.width="80px",p.style.backgroundColor="#f2f2f2",p.style.padding="5px",p.style.borderRadius="8px",p.style.marginTop="5px",p.style.marginLeft="0px",p.style.alignSelf="flex-start";for(var c=0;c<3;c++){var y=document.createElement("span");y.classList.add("loading__dot"),y.style.backgroundColor="grey",y.style.display="inline-block",y.style.height="7px",y.style.margin="10px",y.style.width="10px",y.style.borderRadius="7px",y.style.animation="dot ease-in-out 1s infinite",1===c?y.style.animationDelay="0.2s":2===c&&(y.style.animationDelay="0.3s"),p.appendChild(y)}const h=p;var u=document.createElement("div");u.style.backgroundColor="#f2f2f2",u.style.color="black",u.style.borderRadius="8px",u.style.padding="10px",u.style.fontFamily="Arial",u.style.fontSize="14px",u.style.fontWeight="500",u.style.wordBreak="break-word",u.style.overflowWrap="break-word";var m=document.createElement("div");m.style.display="flex",m.style.flexDirection="row",m.style.marginTop="20px";const f=function(t,e){var n=m.cloneNode(!0);if("dots"===t)n.style.maxWidth="90%",n.style.alignSelf="flex-start",n.style.marginLeft="5px",n.appendChild(r().cloneNode(!0)),n.appendChild(h);else{"assistant2"===t.role?e.push({role:"assistant",content:t.content}):e.push(t);var l=u.cloneNode(!0);l.innerHTML=t.content.replace(/(\bhttps?:\/\/[^\s]+|\bwww\.[^\s]+)/g,(function(t){return'<a href="'+(t.startsWith("http")?t:"http://"+t)+'" target="_blank">'+t+"</a>"})),"user"===t.role?(n.style.maxWidth="80%",n.style.alignSelf="flex-end",n.style.marginRight="5px"):"assistant2"===t.role?(n.style.maxWidth="70%",n.style.alignSelf="flex-start",n.style.marginLeft="15.5%",n.style.marginRight="5px"):(n.style.maxWidth="80%",n.style.alignSelf="flex-start",n.style.marginLeft="5px",n.appendChild(r().cloneNode(!0))),n.appendChild(l)}return n};function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,l=new Array(e);n<e;n++)l[n]=t[n];return l}const g=function(t){var e=document.createElement("div");e.style.height="190px",e.style.maxWidth="98%",e.style.display="flex",e.style.flexDirection="row",e.style.marginTop="12px",e.style.marginLeft="1%",e.style.marginRight="1%",e.style.gap="4px",e.style.overflowX="scroll";var n,l=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var l=0,i=function(){};return{s:i,n:function(){return l>=t.length?{done:!0}:{done:!1,value:t[l++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){s=!0,o=t},f:function(){try{r||null==n.return||n.return()}finally{if(s)throw o}}}}(t.map((function(t){return t.note})));try{for(l.s();!(n=l.n()).done;){var i=n.value,o=document.createElement("div");o.style.width="140px",o.style.height="178px",o.style.border="0.5px solid grey",o.style.display="flex",o.style.justifyContent="start",o.style.flexDirection="column",o.style.cursor="pointer",o.addEventListener("click",(function(){window.open(i.link,"_blank")}));var r=document.createElement("img");r.style.width="140px",r.style.height="120px",r.src=i.url,o.appendChild(r);var s=document.createElement("div");s.style.width="140px",s.style.fontSize="9px",s.innerText=i.name,o.appendChild(s);var a=document.createElement("div");a.style.width="140px",a.style.fontSize="9px",a.innerText=i.price,o.appendChild(a);var d=document.createElement("div");d.style.width="140px",d.style.height="40px",d.style.fontSize="6px",d.innerText=i.description,o.appendChild(d),e.appendChild(o)}}catch(t){l.e(t)}finally{l.f()}return e},v=function(t,e){var n=document.createElement("div");return n.id="buttonsContainer",n.style.width="100%",n.style.display="flex",n.style.flexDirection="column",n.style.gap="6px",n.style.alignItems="start",n.style.justifyContent="center",n.style.marginTop="10px",n.style.marginLeft="3px",n.style.marginBottom="2px",t.forEach((function(t){var l=document.createElement("button");l.style.marginRight="10px",l.style.backgroundColor="white",l.style.color=window.ChatComponentMainColor,l.style.border="1.5px solid ".concat(window.ChatComponentMainColor),l.style.borderRadius="15px",l.style.padding="5px 10px",l.style.cursor="pointer",l.style.width="70%",l.style.display="flex",l.style.fontFamily="Arial",l.style.fontSize="12px",l.innerText=t.text,l.addEventListener("mouseenter",(function(){l.style.backgroundColor=window.ChatComponentMainColor,l.style.color="white"})),l.addEventListener("mouseleave",(function(){l.style.backgroundColor="white",l.style.color=window.ChatComponentMainColor})),l.addEventListener("click",(function(){e(t)})),n.appendChild(l)})),n},C={finnish:[{title:{title:"Hei, kuinka voin auttaa sinua?",id:"8916606",connection:"0"},texts:[],endpoint:""},{title:{title:"Anteeksi, mutta en löydä yrityksemme datasta vastausta kysymykseesi. Voit yrittää muotoilla kysymyksesi uudelleen tai halutessasi ottaa yhteyttä.",id:"3599790",connection:""},texts:[{text:"Haluan ottaa yhteyttä",id:"6010162",connection:"2526878"}],endpoint:"?"},{title:{title:"!Selvä! Voisitko antaa puhelinnumerosi tai sähköpostiosoitteesi, jotta voimme olla yhteydessä sinuun?",id:"2526878",connection:"6010162"},texts:[{text:"Kiitos, olemme sinuun yhteydessä pian!",id:"8974694",connection:""}],endpoint:""}]};function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,l=new Array(e);n<e;n++)l[n]=t[n];return l}var w,E,k,L,T,S,R=C.finnish,A="https://emeric-backend-finaali-z573vwoula-lz.a.run.app",j=!1,I=null,z=[],H="finnish";function B(t){var e=(new Option).style;return e.color=t,""!==e.color}var D,M,N,O,W,F=document.getElementById("viraltop-script");O=window.history,W=O.pushState,O.pushState=function(t,e,n){return D.concat(M).length>0&&(D.includes(n.split("/")[1])&&!M.includes(n.split("/")[1])?T.style.display="block":T.style.display="none"),W.apply(O,[t,e,n])},document.addEventListener("DOMContentLoaded",(function(){var t=F.getAttribute("header-color");null!==t&&B(t)&&(N=t);try{D=F.getAttribute("allowed-paths").split(",")}catch(t){D=[]}try{M=F.getAttribute("banned-paths").split(",")}catch(t){M=[]}try{S=F.getAttribute("border")}catch(t){S="none"}try{F.getAttribute("pictureURL")?window.chatBotPictureURL=F.getAttribute("pictureURL"):window.chatBotPictureURL="https://storage.googleapis.com/emeric-logo/download.svg"}catch(t){window.chatBotPictureURL="https://storage.googleapis.com/emeric-logo/download.svg"}var e=document.createElement("div");e.style.width="100%",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.style.overflow="scroll",e.style.scrollBehavior="smooth",e.style.padding="1px",e.style.fontFamily="Arial";var n=F.getAttribute("data-param1"),l=F.getAttribute("color");window.ChatComponentMainColor=B(l)?l:"#041F3E";var i,r=F.getAttribute("position");i="bottom-right"===r?["bottom","right"]:"top-right"===r?["top","right"]:"top-left"===r?["top","left"]:["bottom","left"];var s=R.find((function(t){return"0"===t.title.connection}));function a(t){if(!j){j=!0;try{e.removeChild(k)}catch(t){}var l=f({role:"user",content:t.text},z);e.appendChild(l);var i=f("dots",z);e.appendChild(i),e.scrollTop=e.scrollHeight,setTimeout((function(){e.removeChild(i);try{var l=R.find((function(e){return e.title.id===t.connection}));if(l.title.title.startsWith("!")){var o=f({role:"assistant",content:l.title.title.slice(1)},z);e.appendChild(o),L=function(t,e,n,l,i){var o=document.createElement("div");o.style.width="250px",o.style.display="flex",o.style.flexDirection="column",o.style.gap="6px",o.style.padding="10px",o.style.border="1px solid grey",o.style.marginLeft="50%",o.style.transform="translateX(-50%)",o.style.marginTop="10px",o.style.fontSize="14px";var r=document.createElement("div");r.style.display="flex",r.style.flexDirection="column",r.style.gap="6px";var s=document.createElement("span");s.innerText="Email";var a=document.createElement("input");r.appendChild(s),r.appendChild(a),o.appendChild(r);var d=document.createElement("div");d.style.display="flex",d.style.flexDirection="column",d.style.gap="6px";var p=document.createElement("span");p.innerText="Puhelinnumero";var c=document.createElement("input");d.appendChild(p),d.appendChild(c),o.appendChild(d);var y=document.createElement("div");y.style.display="flex",y.style.flexDirection="column",y.style.gap="6px";var h=document.createElement("span");h.innerText="Lisättävää?";var u=document.createElement("textarea");u.style.resize="none",u.style.fontSize="12px",y.appendChild(h),y.appendChild(u),o.appendChild(y);var m=document.createElement("button");return m.innerText="Lähetä",m.addEventListener("click",(function(){e.removeChild(o);var r=f("dots",n);e.appendChild(r),e.scrollTop=e.scrollHeight;var s=o.childNodes,a={prevChats:n,phone:s[0].childNodes[1].value,email:s[1].childNodes[1].value,text:s[2].childNodes[1].value},d={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};fetch("".concat(l,"/chatEmail/").concat(i),d).then((function(l){e.removeChild(r);var i=t[0].text,o=f({role:"assistant",content:i},n);e.appendChild(o),e.scrollTop=e.scrollHeight})).catch((function(t){try{e.removeChild(r)}catch(t){}var l=f({role:"assistant",content:"Error"},n);e.appendChild(l),e.scrollTop=e.scrollHeight}))})),o.appendChild(m),o}(l.texts,e,z,A,n),e.appendChild(L)}else{if(l.title.title.includes("///")){var r=f({role:"assistant",content:l.title.title.split("///")[0]},z);e.appendChild(r);var s=f({role:"assistant2",content:l.title.title.split("///")[1]},z);e.appendChild(s)}else{var d=f({role:"assistant",content:l.title.title},z);e.appendChild(d)}if(l.texts.length>0){var p=l.texts.filter((function(t){return t.text.startsWith("@")}));if(p.length>0){var c=g(p);e.appendChild(c)}l.texts.filter((function(t){return!t.text.startsWith("@")})).length>0&&(k=v(l.texts,a),e.appendChild(k))}}e.scrollTop=e.scrollHeight,j=!1}catch(t){var y=f({role:"assistant",content:"Error"},z);e.appendChild(y),e.scrollTop=e.scrollHeight,j=!1}}),2e3)}}function d(){if(!j){for(z=[w];e.firstChild;)e.removeChild(e.firstChild);if(void 0!==E.length?(e.appendChild(E[0]),e.appendChild(E[1])):e.appendChild(E),I=null,s&&s.texts&&s.texts.length>0){var t=s.texts;k=v(t,a),e.appendChild(k)}}}if(void 0===s)w={role:"assistant",content:"Hei, miten voin auttaa sinua?"};else if(w={role:"assistant",content:s.title.title},s.texts&&s.texts.length>0){var p=s.texts;k=v(p,a)}if(w.content.includes("///")){var c=f({role:"assistant",content:w.content.split("///")[0]},z),y=f({role:"assistant2",content:w.content.split("///")[1]},z);E=[c,y],e.appendChild(c),e.appendChild(y)}else E=f(w,z),e.appendChild(E);k&&e.appendChild(k);var h=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var l,i,o,r,s=[],a=!0,d=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(l=o.call(n)).done)&&(s.push(l.value),s.length!==e);a=!0);}catch(t){d=!0,i=t}finally{try{if(!a&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(d)throw i}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(function(t,e){var n=document.createElement("div");n.style.width="55px",n.style.height="55px",n.style.borderRadius="40px",n.style.backgroundColor=window.ChatComponentMainColor,n.style.position="fixed",n.style.zIndex="1000",n.style.cursor="pointer",n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.fontSize="26px",n.style[t[0]]="10px",n.style[t[1]]="10px",n.style.border=e;var l=function(){var t=document.createElement("div"),e=document.createElement("div");e.style.width="20px",e.style.height="18px",e.style.borderRadius="5px",e.style.backgroundColor="white",e.style.position="absolute",e.style.left="17px",e.style.bottom="20px",e.style.zIndex="1";var n=document.createElement("div");return n.style.borderLeft="5px solid transparent",n.style.borderRight="5px solid transparent",n.style.borderTop="10px solid white",n.style.position="absolute",n.style.bottom="15px",n.style.left="14px",n.style.transform="rotate(40deg)",t.appendChild(e),t.appendChild(n),t}();n.appendChild(l);var i=document.createElement("div");return i.className="chatDiv",i.style.width="350px",i.style.display="none",i.style.height="560px",i.style.position="fixed",i.style.zIndex="1000",i.style.flexDirection="column",i.style.fontSize="16px",i.style.border="0.1px solid grey",i.style.backgroundColor="white",i.style.borderRadius="10px",i.style[t[0]]="2px",i.style[t[1]]="2px",[i,n]}(i,S),2),u=h[0],m=h[1],x=function(t){var e=document.createElement("div"),n=document.createElement("div");n.style.width="0",n.style.height="0",n.style.borderLeft="20px solid white",n.style.borderTop="10px solid transparent",n.style.borderBottom="10px solid transparent",n.style.position="relative",n.style.bottom="0",n.style.zIndex="1";var l=document.createElement("div");l.style.width="0",l.style.height="0",l.style.borderLeft="15px solid ".concat(window.ChatComponentMainColor),l.style.borderTop="1.9px solid transparent",l.style.borderBottom="1.9px solid transparent",l.style.top="11.5px",l.style.position="relative",l.style.zIndex="2",e.appendChild(l),e.appendChild(n),e.style.display="inline-block";var i=document.createElement("div");i.style.width="100%",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="start",i.style.bottom="0",i.style.marginBottom="2px",i.style.marginTop="4px",i.style.paddingBottom="4px";var o=document.createElement("textarea");o.style.resize="none",o.style.overflowY="auto",o.style.width="75%",o.style.fontFamily="Arial",o.style.height="40px",o.style.marginLeft="5px",o.placeholder="Kirjoita chattisi tähän",o.style.padding="4px",o.style.borderRadius="5px";var r=document.createElement("button");return r.style.width="15%",r.style.height="40px",r.style.backgroundColor=window.ChatComponentMainColor,r.style.border="none",r.style.borderRadius="5px",r.style.marginLeft="10px",r.style.cursor="pointer",r.appendChild(e),i.appendChild(o),i.appendChild(r),o.addEventListener("keydown",(function(e){if(13===e.keyCode){e.preventDefault();try{o.blur(),t(o),o.value=""}catch(t){}}})),r.addEventListener("click",(function(){try{o.blur(),t(o)}catch(t){}})),i}((function(t){if(!j){j=!0;var l=f({role:"user",content:t.value},z);try{e.removeChild(k)}catch(t){}try{e.removeChild(L)}catch(t){}e.appendChild(l);var i=f("dots",z);e.appendChild(i),e.scrollTop=e.scrollHeight;var o={chats:z,id:I,language:H};t.value="",fetch("".concat(A,"/chatbot/").concat(n),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(t){if(!t.ok)throw j=!1,new Error("Network response was not ok");return t.json()})).then((function(t){if(t.id&&(I=t.id),e.removeChild(i),""!==t.result){var n=f({role:"assistant",content:t.result},z);e.appendChild(n)}if(void 0!==t.nextButtons){var l=R.find((function(e){return e.endpoint===t.nextButtons}));if(l){var o=f({role:"assistant",content:l.title.title},z);e.appendChild(o),l.texts.length>0&&(k=v(l.texts,a),e.appendChild(k))}else{var r=f({role:"assistant",content:"Error"},z);e.appendChild(r)}}e.scrollTop=e.scrollHeight,j=!1})).catch((function(t){console.log(t);try{e.removeChild(i)}catch(t){}var n=f({role:"assistant",content:"Error"},z);e.appendChild(n),e.scrollTop=e.scrollHeight,j=!1}))}})),O=o(u,m,d,N);if(Object.keys(C).length>1){var W=function(t){var e=document.createElement("div");e.id="FiEnButton",e.style.width="70px",e.style.height="25px",e.style.position="absolute",e.style.top="10px",e.style.right="100px",e.style.display="flex",e.style.flexDirection="row",e.style.alignItems="center",e.style.textAlign="center",e.style.borderRadius="12px";var n=document.createElement("div");n.innerText="FI",n.style.width="35px",n.style.height="25px",n.style.borderRadius="12px",n.style.cursor="pointer",n.style.backgroundColor="white",n.style.color="#041F3E",n.addEventListener("click",(function(){t("finnish")&&(n.style.color="#041F3E",n.style.backgroundColor="white",l.style.color="white",l.style.backgroundColor="#041F3E")}));var l=document.createElement("div");return l.innerText="EN",l.style.width="35px",l.style.height="25px",l.style.borderRadius="12px",l.style.cursor="pointer",l.addEventListener("click",(function(){t("english")&&(l.style.color="#041F3E",l.style.backgroundColor="white",n.style.color="white",n.style.backgroundColor="#041F3E")})),e.appendChild(n),e.appendChild(l),e}((function(t){if(!j&&H!==t)return j=!0,I=null,z=[],s=(R=C[t]).find((function(t){return"0"===t.title.connection})),w=s?{role:"assistant",content:s.title.title}:"english"===t?{role:"assistant",content:"Hi, how can I help you?"}:{role:"assistant",content:"Hei, miten voin auttaa?"},E=f(w,z),H=t,j=!1,d(),!0}));O.appendChild(W)}u.appendChild(O),u.appendChild(e),u.appendChild(x),(T=document.createElement("buttonContainer")).appendChild(m),T.appendChild(u),D.concat(M).length>0&&(!D.includes(window.location.pathname.split("/")[1])||M.includes(window.location.pathname.split("/")[1]))&&(T.style.display="none"),m.addEventListener("click",(function(){var t;t=u,m.style.display="none",t.style.display="flex"})),document.body.appendChild(T)}))})();