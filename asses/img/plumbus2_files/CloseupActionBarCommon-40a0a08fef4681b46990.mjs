(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["CloseupActionBarCommon"],{"3vRR":function(e,t,n){var i=n("q1tI"),o=n.n(i),a=n("n6mq");t.a=({children:e})=>o.a.createElement(a.d,{width:"100%",role:"list"},e)},"6wCo":function(e,t,n){var i=n("q1tI"),o=n.n(i),a=n("JW66"),r=n("ENn1"),s=n("ynlw"),l=n("Hrat"),c=n("/MKj"),d=n("E/VT"),m=n("Ye/N"),u=n("7w6Q"),p=n("tkfL");const h=()=>u.a.increment("windows.download.blob.error"),f=(e,t,n)=>{const i=new window.Windows.Storage.Pickers.FileSavePicker;i.suggestedStartLocation=window.Windows.Storage.Pickers.PickerLocationId.picturesLibrary;const{extension:o,extensionName:a,name:r}=(e=>{const t=e.split("/"),n=t[t.length-1],i=n.split(".");if(i.length>1){const e=i.pop();return{extension:"."+e,extensionName:e.toUpperCase(),name:i.join()}}return{extension:".",extensionName:m.a._("Unknown","Label for file picker drop down when the file type is not known","Label for file picker drop down when the file type is not known"),name:n}})(t);i.suggestedFileName=n||r,i.fileTypeChoices.insert(a,[o]),i.pickSaveFileAsync().then(t=>{t&&(window.Windows.Storage.CachedFileManager.deferUpdates(t),t.openAsync(window.Windows.Storage.FileAccessMode.readWrite).then(t=>{const n=e.msDetachStream();window.Windows.Storage.Streams.RandomAccessStream.copyAsync(n,t).then(()=>{t.flushAsync().done(()=>{n.close(),t.close(),u.a.increment("windows.download.blob.success")},h)},h)},h))})};var g=({filename:e,imgSrc:t,category:n})=>{if(!t)return null;return o.a.createElement(p.b,{onClick:()=>{((e,t)=>{try{const n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onreadystatechange=()=>{if(4===n.readyState)if(200!==n.status)u.a.increment("windows.download.blob.nodownload",.1,{status:n.status});else{const i=n.response;f(i,e,t)}},n.send(null)}catch(n){u.a.increment("windows.download.blob.xhrexception",.1,{error:n})}})(t,e)},text:m.a._("Download image","Button to download Pin image","Button to download Pin image")})},b=n("lUXN"),y=n("TiQD"),w=n("kmwA"),E=n("n6mq");function _(e){const{onDismiss:t,myPin:n}=e,[a,r]=Object(i.useState)(1),s=[{label:m.a._("Small","pinActionDropdown.GetEmbedCodeModal.small","Label on segmented controller for pin embed code, for small width"),width:236},{label:m.a._("Medium","pinActionDropdown.GetEmbedCodeModal.medium","Label on segmented controller for pin embed code, for medium width"),width:345},{label:m.a._("Large","pinActionDropdown.GetEmbedCodeModal.large","Label on segmented controller for pin embed code, for large width"),width:450},{label:m.a._("Extra Large","pinActionDropdown.GetEmbedCodeModal.extra_large","Label on segmented controller for pin embed code, for extra-large width"),width:600}];return o.a.createElement(E.w,null,o.a.createElement(y.b,{accessibilityModalLabel:m.a._("Get Embed Code","pinActionDropdown.GetEmbedCodeModal.modalLabel","Accessibility label on modal for pin embed code"),heading:m.a._("Get Embed Code","pinActionDropdown.GetEmbedCodeModal.header","Heading on modal for pin embed code"),onDismiss:t,footer:o.a.createElement(E.d,{display:"flex",direction:"row",justifyContent:"end"},o.a.createElement(E.e,{size:"sm",text:m.a._("Got it!","pinActionDropdown.GetEmbedCodeModal.dismissButton","Button to dismiss embed code modal"),onClick:t}))},o.a.createElement(E.d,{paddingX:6,paddingY:4},o.a.createElement(E.K,{items:s.map(e=>e.label),selectedItemIndex:a,onChange:({activeIndex:e})=>{r(e)}})),o.a.createElement(E.d,{paddingX:8,paddingY:6},o.a.createElement("code",null,`<iframe src="${w.a.settings.ASSETS_SITE_URL}/ext/embed.html?id=${n.id}" height="${Math.ceil(n.height*s[a].width/n.width+100)}" width="${s[a].width}" frameborder="0" scrolling="no" ></iframe>`))))}var v=n("vepm"),S=n("hFNL"),C=n("LT60"),x=n("CvCA"),T=n("v/Q4"),R=n("CONZ"),O=n("eUcp"),I=n("U4JR"),j=n("nGHF"),k=n("pLLR"),P=n("ANjH"),B=n("+PUW");var D=Object(P.compose)(Object(c.connect)(B.d,e=>({deletePinMention:t=>e(Object(R.b)(t)),openLoginModal:()=>e(B.b)})),k.e)((function({bestPinImgSrc:e,bgColor:t,deletePinMention:n,embedImg:a,hideDownload:r,showEmbed:s,iconColor:l,iconSize:c,isFullAuth:u,onDropdownClick:h,onReportPin:f,onToggle:y,openLoginModal:w,pinCategory:R,pinDescription:k,pinId:P,pinImgSrc:B,pinTitle:D,reportPin:L,requestContext:A,showRemoveMention:M,usePortal:H,view:F}){const{showOneToast:U}=Object(j.b)(),[z,N]=Object(i.useState)(!1),[Y,q]=Object(i.useState)(!1),X=Object(T.a)(),G=Object(i.useRef)(),W=()=>{N(!1)},$=()=>{n(P),X.isAuth&&Object(I.a)(8909,{element:116,tag_id:X.id,tag_type:1,view:3}),W(),U(({onHide:e})=>o.a.createElement(x.a,{onHide:e,text:m.a._("@mention removed!","closeup.pinActionDropDown.mentionRemovalToast","Toast that tells user that they have successfully removed the @mention of them in another user's Pin description")}))},V=()=>{Y||Object(I.a)(4439,{view:3,viewParameter:156}),N(!1),q(!Y)},K=()=>{"function"==typeof f&&f(P),L()},J=m.a._("More options","Accessible label for more options dropdown","Accessible label for more options dropdown");return o.a.createElement(E.d,{flex:"grow",alignItems:"center",display:"flex"},o.a.createElement(E.d,{ref:G},o.a.createElement(v.a,{accessibilityLabel:J,icon:"ellipsis",onClick:()=>{var e;y&&y(),"function"==typeof h&&h(),N(!z),e=981,Object(I.a)(101,{element:e,component:4,view:3,viewParameter:139})}})),z&&(()=>{const t=o.a.createElement(E.d,{zIndex:O.a},o.a.createElement(E.p,{anchor:G.current,idealDirection:"down",onDismiss:W,size:"xs"},o.a.createElement(p.a,null,!r&&"undefined"!=typeof window&&"windows"!==Object(S.b)(window)&&e&&o.a.createElement(d.a,{imgSrc:e||"",filename:D||k,category:R,pinId:P},e=>o.a.createElement(p.b,{onClick:e,text:m.a._("Download image","Button to download Pin image","Button to download Pin image")})),!r&&"undefined"!=typeof window&&"windows"===Object(S.b)(window)&&(e||B)&&o.a.createElement(g,{imgSrc:e||B||"",filename:D||k,category:R}),o.a.createElement(p.b,{onClick:u?K:w,text:m.a._("Report Pin","Label for report pin action","Label for report pin action")}),M&&o.a.createElement(p.b,{onClick:$,text:m.a._("Remove @mention","closeup.pinActionDropDown.removeMention","Button that allows user to remove their @mention in the pin's")}),s&&o.a.createElement(b.a,{name:"closeup_pin_embed_code"},({anyEnabled:e})=>e&&o.a.createElement(p.b,{onClick:V,text:m.a._("Get Pin embed code","Label for embed pin action","Label for embed pin action")})))));return H?o.a.createElement(C.a,null,o.a.createElement(E.w,null,t)):t})(),Y&&o.a.createElement(_,{myPin:{id:P,height:a.height,width:a.width},onDismiss:V}))})),L=n("YxyV"),A=n("7jH2");t.a=e=>{var t;const n=Object(T.a)(),{onDropdownClick:i,onReportPin:c,pin:d,view:m,viewParameter:u}=e,{pinTitle:p,pinDescription:h,pinCategory:f}=Object(l.a)(d),g=Object(A.p)({pin:d}),{video:b}=Object(A.x)(g)||{},y=!!b;let w;d.images&&(w=d.embed&&"gif"===d.embed.type?d.embed.src:d.images["736x"]&&d.images["736x"].url);const _=!!d.story_pin_data_id,v=Object(L.d)(d),{isPromoted:S}=Object(s.a)(d),C=d.board.privacy===a.a.BoardPrivacy.SECRET,x=!S&&!C,R=n.isAuth&&(null===(t=d.user_mention_tags)||void 0===t?void 0:t.filter(e=>e.object_id===n.id).length)>0;return o.a.createElement(E.d,{"data-test-id":"pin-action-bar"},o.a.createElement(D,{embedImg:Object(L.e)(d,"736x"),showEmbed:x,bestPinImgSrc:v,bgColor:"transparent",hideDownload:y||_,iconColor:"gray",iconSize:"md",onDropdownClick:i,onReportPin:c,pinCategory:f,pinDescription:h,pinId:d.id,pinImgSrc:w,pinTitle:p,reportPin:Object(r.a)({pin:d,viewParameter:u,viewType:3}),showRemoveMention:R,usePortal:!1,view:m}))}},Hrat:function(e,t,n){var i=n("xdpg"),o=n("Ye/N");t.a=e=>{const t=e.link_domain||{},n=e.tracked_link||e.link||e.images&&e.images.orig&&e.images.orig.url,a=e.rich_metadata,r=e.domain,s=e.closeup_attribution||e.native_creator||t.official_user||e.pinner||e.origin_pinner,l=!(!(a&&a.recipe&&a.recipe.name&&a.recipe.categorized_ingredients)||a.recipe.from_aggregated_data);let c,d;a&&a.products&&a.products[0]&&(c=!!(a&&a.name&&a.offer_summary));const m=e.buyable_product,u=c||m,p=!(!a||!a.article),h=!(!a||!a.tutorial),f=!(!s||!s.username);let g=o.a._("Saved from ","Closeup pin annotation","Closeup pin annotation"),b=f?o.a._("Saved by"):o.a._("Saved from"),y=o.a._("Visit");a&&a.products&&a.products[0]&&a&&a.products[0].name&&a.products[0].offer_summary&&(g=o.a._("Product sold by ","pin annotation","pin annotation"),d=a.products[0].offer_summary),u?(b=o.a._("Sold by"),y=o.a._("Visit")):h?(g=o.a._("Saved from ","pin annotation","pin annotation"),b=f?o.a._("Saved by"):o.a._("Saved from"),y=o.a._("Visit")):l?(g=o.a._("Recipe from ","pin annotation","pin annotation"),b=f?o.a._("Recipe by"):o.a._("Recipe from"),y=o.a._("Make it")):p&&(g=o.a._("Article from ","pin annotation","pin annotation"),b=f?o.a._("Article by"):o.a._("Article from"),y=o.a._("Read it"));const w=e.rich_summary;if(!d&&w){let e;w&&w.products&&w.products[0]&&(e=!!(w&&w.products[0].name&&w.products[0].offer_summary),e&&(g=o.a._("Product sold by ","pin annotation","pin annotation")))}let E,_;f?(E="/"+s.username+"/",_=s.full_name):(E="/source/"+r,_=a&&a.site_name||r);return{actionButtonText:y,image:s&&(s.image_medium_url||s.image_small_url)||e.board&&e.board.image_thumbnail_url,link:E,pinLink:n,pin:e,pinCreditPrefix:g,prefixText:b,subtitle:_,title:i.c(o.a._("More from {{ subtitle }}"),{subtitle:_}),pinTitle:e.closeup_unified_title,pinDescription:e.closeup_unified_description,pinCategory:e.category}}},OPV1:function(e,t,n){var i=n("q1tI"),o=n.n(i),a=n("Ye/N"),r=n("vepm"),s=n("4cpq"),l=n("dtqy");t.a=Object(l.a)(({handlePinEditButtonClick:e})=>o.a.createElement(s.a,{id:"closeup-pin-edit-button"},o.a.createElement(r.a,{accessibilityLabel:a.a._("Edit","edit button on pin","edit button on pin"),onClick:t=>e&&e(t),icon:"edit"})))},Pus6:function(e,t,n){var i=n("q1tI"),o=n.n(i),a=n("R6wO"),r=n("3gA6"),s=n("n6mq");t.a=({bold:e,description:t,descriptionColor:n,external:i,hasDividerAfter:l,icon:c,onClick:d,text:m,url:u})=>{const p=o.a.createElement(s.d,{role:"listitem",overflow:"hidden"},o.a.createElement(a.a,{bold:e,description:t,descriptionColor:n,icon:c,text:m}));return o.a.createElement(s.d,null,u?o.a.createElement(r.b,{to:u,external:i,onClick:d},p):o.a.createElement(s.T,{fullWidth:!1,onTap:d},p),l&&o.a.createElement(s.n,null))}},qlIy:function(e,t,n){n.r(t),n.d(t,"CloseupActionBar",(function(){return A}));var i=n("q1tI"),o=n.n(i),a=n("OPV1"),r=n("6wCo"),s=n("c4Fo"),l=n("n6mq");class c extends o.a.Component{constructor(...e){var t,n,i;super(...e),i={paused:!1,showPulsar:!1},(n="state")in(t=this)?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}componentDidMount(){this.mountPulsar(),this.props.onExperienceMount&&this.experience&&this.props.onExperienceMount(this.experience)}componentWillUnmount(){clearTimeout(this.timer)}mountPulsar(){if(!this.experience)return;const{display_data:e}=this.experience;e.has_pulsar&&this.setState({showPulsar:!0})}renderPulsar(){const{anchor:e}=this.props,{paused:t}=this.state;if(!e)return null;const n=e.getBoundingClientRect(),{height:i,width:a}=n,r=-(68+i/2),s=-(68-a/2);return o.a.createElement(l.d,{position:"absolute",dangerouslySetInlineStyle:{__style:{zIndex:1,marginTop:r,marginLeft:s,cursor:"pointer",pointerEvents:"none"}}},o.a.createElement(l.F,{paused:t}))}renderFlyout(e){const{anchor:t,flyoutSize:n,idealDirection:i,textOverflow:a}=this.props;return o.a.createElement(l.p,{anchor:t,color:"blue",idealDirection:i||"down",onDismiss:()=>{},shouldFocus:!1,showCaret:!0,size:n},o.a.createElement(l.d,{column:12,padding:3},o.a.createElement(l.U,{color:"white",overflow:a,weight:"bold"},e)))}render(){const{experienceIds:e,placementId:t,shouldTimeoutDismiss:n}=this.props,{showPulsar:i}=this.state;return o.a.createElement(s.a,{experienceIds:e,placementId:t,type:8},e=>{const{complete:t,dismiss:a,display_data:r}=e;return this.experience=e,r.has_pulsar||r.has_tooltip?(n&&r.disappearTime&&r.disappearTime>0&&(this.timer=setTimeout(()=>(a(),null),r.disappearTime)),o.a.createElement(l.d,{dangerouslySetInlineStyle:{__style:{zIndex:10}}},i&&this.renderPulsar(),r.has_tooltip&&(!r.has_pulsar||this.state.paused)&&this.renderFlyout(r.text))):(t(),null)})}}var d=n("/MKj"),m=n("1Vso");const u="cubic-bezier(0, 0, 0.58, 1)",p={loaded:{opacity:1,transitionDuration:"0.20s",transitionTimingFunction:u,transitionProperty:"transform, opacity",transform:"translate(0, 5px)",transformOrigin:"center"},fade:{opacity:.1,transitionDuration:"0.30s",transitionTimingFunction:u,transitionProperty:"transform, opacity",transform:"translate(0, 5px)",transformOrigin:"center"}};function h({reactionLabel:e,handleHideConfirmation:t}){const[n,a]=Object(i.useState)("loaded"),r=Object(i.useRef)();return Object(i.useEffect)(()=>{let e=null,n=null;return r.current=requestAnimationFrame(()=>{e=setTimeout(()=>a("fade"),1e3),n=setTimeout(()=>t(),1300)}),function(){clearTimeout(e),clearTimeout(n)}},[]),o.a.createElement(l.d,{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},o.a.createElement(l.d,{rounding:"pill",position:"absolute",color:"darkGray",ref:r,height:20,display:"flex",alignItems:"center",justifyContent:"center",paddingY:1,paddingX:2,dangerouslySetInlineStyle:{__style:{...p[n],whiteSpace:"nowrap"}}},o.a.createElement(l.U,{color:"white",size:"sm",weight:"bold",overflow:"normal"},e)))}var f=n("KNE1"),g=n("eo+c");const b=40,y={icon:{backgroundRepeat:"no-repeat",backgroundSize:"cover"},loading:{opacity:0,transitionDuration:"0.25s",transitionTimingFunction:"ease-out",transitionProperty:"transform, opacity",transform:"scaleX(1) scaleY(1) translateZ(0) translateY(25px)",transformOrigin:"bottom"},loaded:{opacity:1,transitionDuration:"0.2s",transitionTimingFunction:"ease-out",transitionProperty:"transform, opacity",transform:"scaleX(1) scaleY(1)",transformOrigin:"bottom"},clicked:{transition:"transform 0.2s ease-out",transform:"translateY(-30px) scaleX(1.6) scaleY(1.6)",transformOrigin:"bottom",position:"relative",zIndex:1},flying:{transition:"transform 0.2s ease-out",transformOrigin:"bottom"},label:{transition:"transform 0.2s ease-out",transform:"scale(0.625)",transformOrigin:"bottom",whiteSpace:"nowrap"},fading:{opacity:0,transition:"opacity 0.2s ease-out"}},w={boxShadow:"0 9px 26px rgba(0, 0, 0, 0.4)"};function E({reactionButtonRect:e,handleReactionTrayClick:t}){const[n,a]=Object(i.useState)("loading"),[r,s]=Object(i.useState)(""),[c,d]=Object(i.useState)(),[m,u]=Object(i.useState)(!1),[p,h]=Object(i.useState)({}),[E]=Object(i.useState)(e),_=Object(i.useRef)(),v=Object(i.useRef)({});Object(i.useEffect)(()=>{"loading"===n&&(_.current=requestAnimationFrame(()=>a("loaded"))),(()=>{u(!0);const e={...p};g.c.forEach(t=>{v.current[t]&&!e[t]&&(e[t]=v.current[t].getBoundingClientRect())}),Object.keys(e).length===g.c.length&&h(e)})(),!c&&m&&(()=>{const e={...c};g.c.forEach(t=>{const n=p[t],{left:i,top:o}=E,{left:a,top:r}=n,s=i-a-8,l=o-r+9;e[t]={translateX:s,translateY:l}}),d(e)})()},[m,e]);const S=()=>{"clicked"===n&&r&&(a("flying"),setTimeout(()=>{t(r)},750))},C=g.c.map((e,t)=>{const{staticAsset:i,animatedAsset:a,label:s,htmlStyle:d,animationStyle:m}=Object(g.a)(e),u={transitionDelay:.08*t+"s",...y[n]},p={...r===e?y.clicked:y.loaded},h={...c&&r===e?{transform:`translateZ(0) translateX(${c[e].translateX}px) translateY(${c[e].translateY}px) scaleX(0.6) scaleY(0.6) `,...y[n]}:y.fading};let w={};return"loading"===n||"loaded"===n?w={...u}:"clicked"===n?w={...p}:"flying"===n&&(w={...h}),o.a.createElement(l.d,{display:"flex",alignSelf:"center",justifyContent:"between",key:t},o.a.createElement(l.d,{maxHeight:b,maxWidth:b,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",dangerouslySetInlineStyle:{__style:{...w}},ref:t=>{v.current[e]=t}},r!==e&&o.a.createElement(l.d,{position:"absolute",top:!0,left:!0,bottom:!0,right:!0},o.a.createElement(l.d,{width:b,height:b,dangerouslySetInlineStyle:{__style:{backgroundImage:`url(${i})`,backgroundPosiiton:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}})),o.a.createElement(l.d,{display:"flex",alignItems:"center",justifyContent:"center",direction:"column",position:"relative"},o.a.createElement(f.a,{unsafeCSS:d}),r===e&&"clicked"===n&&o.a.createElement(l.d,{rounding:"pill",color:"darkGray",height:20,dangerouslySetInlineStyle:{__style:y.label},display:"flex",alignItems:"center",justifyContent:"center",paddingY:1,paddingX:2},o.a.createElement(l.U,{color:"white",size:"sm",weight:"bold",overflow:"normal"},s)),o.a.createElement("div",{onClick:S,onKeyDown:S,role:"presentation"},o.a.createElement(l.d,{width:b,height:b,display:"flex",alignItems:"center",justifyContent:"center",dangerouslySetInlineStyle:{__style:{...y.icon,...r===e&&"clicked"===n?{animation:m}:{},backgroundImage:`url(${a})`}}})))))});return o.a.createElement(l.d,{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",dangerouslySetInlineStyle:{__style:{marginLeft:-150}}},o.a.createElement(l.d,{display:"flex",alignItems:"center",justifyContent:"center",width:300,height:80,rounding:"pill",color:"flying"===n?"transparent":"white",dangerouslySetInlineStyle:{__style:{..."flying"!==n?w:{}}},onMouseMove:e=>{const{clientX:t}=e;if("flying"!==n){const e=(e=>{let t;return m&&g.c.forEach(n=>{const i=p[n];if(i&&i.left&&i.right){const{left:o,right:a}=i;e>=o&&e<=a&&(t=n)}}),t||null})(t);e!==r&&s(e),a("clicked")}}},o.a.createElement(l.d,{display:"flex",alignItems:"center",justifyContent:"around",width:"100%",paddingX:5},C)))}var _=n("eOdZ");var v=n("U4JR");function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const C={borderRadius:"50%"},x={backgroundColor:"rgb(226, 226, 226)"},T={backgroundColor:"rgb(218, 218, 218)"},R={boxShadow:"0 0 0 4px rgba(0, 132, 255, 0.5)",outline:0};class O extends i.PureComponent{constructor(...e){super(...e),S(this,"state",{clickedReaction:0,isConfirmationShowing:!1,isReactionTrayShowing:!1,reactionButtonRect:null,useInitialReaction:!0,isHoveringOverTray:!1,isHoveringOverButton:!1}),S(this,"reactionButtonRef",o.a.createRef()),S(this,"trayOpenTimer",null),S(this,"trayCloseTimer",null),S(this,"onResize",()=>{this.setReactionButtonRect(),this.startTrayCloseTimer()}),S(this,"onScroll",()=>{this.setReactionButtonRect(),this.startTrayCloseTimer()}),S(this,"handleExperienceMount",e=>{e&&e.complete&&(501977===e.experience_id||501995===e.experience_id)&&(this.tooltipExperience=e)}),S(this,"handleReact",(e=7)=>{const{pinId:t,pinUpdateReactionCount:n}=this.props,i={pin_id:t,reaction_type:e};this.setState({clickedReaction:e,useInitialReaction:!1}),n(t,!0,e),_.a.create("ReactionsResource",i).callUpdate()}),S(this,"handleUnreact",()=>{const{pinId:e}=this.props,t={pin_id:e};this.setState({clickedReaction:0,useInitialReaction:!1}),_.a.create("ReactionsResource",t).callDelete()}),S(this,"setReactionButtonRect",()=>{if(this.reactionButtonRef.current&&this.reactionButtonRef.current instanceof HTMLElement){const e=this.reactionButtonRef.current.getBoundingClientRect();this.setState({reactionButtonRect:e})}}),S(this,"closeTray",()=>{this.setState({isReactionTrayShowing:!1})}),S(this,"startTrayCloseTimer",()=>{clearTimeout(this.trayCloseTimer),this.trayCloseTimer=setTimeout(()=>{const{isHoveringOverTray:e,isHoveringOverButton:t}=this.state;e||t||this.closeTray()},300)}),S(this,"handleOnHoverButton",()=>{this.setState({isHoveringOverButton:!0}),clearTimeout(this.trayOpenTimer),this.trayOpenTimer=setTimeout(()=>{const{isReactionTrayShowing:e,isHoveringOverButton:t}=this.state;!e&&t&&this.setState({isReactionTrayShowing:!0})},500),this.tooltipExperience&&this.tooltipExperience.complete()}),S(this,"handleOffHoverButton",()=>{this.setState({isHoveringOverButton:!1}),this.startTrayCloseTimer()}),S(this,"handleOnHoverTray",()=>{this.setState({isHoveringOverTray:!0})}),S(this,"handleOffHoverTray",()=>{this.setState({isHoveringOverTray:!1}),this.startTrayCloseTimer()}),S(this,"handleClickButton",()=>{const{clickedReaction:e,useInitialReaction:t}=this.state,{pinId:n,pinUpdateReactionCount:i,reactionByMe:o}=this.props,a=t?o:e;a?(i(n,!1,a),this.handleUnreact()):this.setReaction("love"),clearTimeout(this.trayOpenTimer),this.closeTray(),Object(v.a)(101,{view:3,viewParameter:139,element:11354,objectId:n})}),S(this,"setReaction",e=>{this.handleReact(Object(g.a)(e).type),this.handleShowConfirmation()}),S(this,"handleShowConfirmation",()=>{this.setState({isConfirmationShowing:!0})}),S(this,"handleHideConfirmation",()=>{this.setState({isConfirmationShowing:!1},this.startTrayCloseTimer)})}componentDidMount(){this.setReactionButtonRect(),window.addEventListener("mouseover",this.setReactionButtonRect)}componentWillUnmount(){clearTimeout(this.trayOpenTimer),clearTimeout(this.trayCloseTimer),window.removeEventListener("mouseover",this.setReactionButtonRect)}render(){const{isReactionTrayShowing:e,reactionButtonRect:t,isConfirmationShowing:n,clickedReaction:i,useInitialReaction:a,isHoveringOverTray:r}=this.state,{reactionByMe:s,showTooltip:d}=this.props,u=a?s:i,p=u?g.b[u]:"default",{staticAsset:f,label:b}=Object(g.a)(p);return o.a.createElement(l.d,{position:"relative"},o.a.createElement(m.a,{accessibilityLabel:"reaction",onClick:this.handleClickButton,onMouseEnter:this.handleOnHoverButton,onMouseLeave:this.handleOffHoverButton,style:{display:"block",border:"none",padding:0,cursor:"pointer",background:"transparent",outline:"none",borderRadius:"50%"}},({active:e,hovered:t,focused:n})=>{let i={...C};return e?i={...C,...T}:t||r?i={...C,...x}:n&&(i={...C,...R}),o.a.createElement(l.d,{color:"transparent",rounding:"circle",dangerouslySetInlineStyle:{__style:i}},o.a.createElement(l.d,{display:"flex",justifyContent:"center",alignItems:"center",dangerouslySetInlineStyle:{__style:{minHeight:44,minWidth:44}}},o.a.createElement(l.d,{height:24,width:24,ref:this.reactionButtonRef,display:"flex",alignItems:"center",justifyContent:"center",dangerouslySetInlineStyle:{__style:{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosiiton:"center",backgroundImage:`url(${f})`}}})))}),d&&!e&&!n&&a&&o.a.createElement(c,{experienceIds:[501977,501995],idealDirection:"down",placementId:12,anchor:this.reactionButtonRef.current,flyoutSize:"lg",onExperienceMount:this.handleExperienceMount}),e&&!!t&&!!t.left&&!!t.top&&o.a.createElement(l.d,{display:"flex",justifyContent:"center",alignItems:"center"},o.a.createElement(l.P,{top:0},o.a.createElement(l.T,{onMouseEnter:this.handleOnHoverTray,onMouseLeave:this.handleOffHoverTray},o.a.createElement(E,{reactionButtonRect:t,handleReactionTrayClick:this.setReaction})))),n&&!!u&&b&&o.a.createElement(h,{reactionLabel:b,handleHideConfirmation:this.handleHideConfirmation}))}}var I=Object(d.connect)(null,e=>({pinUpdateReactionCount:(t,n,i)=>e(function(e,t,n){return{type:"PIN_UPDATE_REACTION_COUNT",payload:{id:e,increment:t,reactionType:n}}}(t,n,i))}))(O),j=n("rYoy"),k=n("zXAL"),P=n("T5j3"),B=n("/zJj");function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const L=Object(i.lazy)(()=>n.e("SecondarySendButtonCommon").then(n.bind(null,"fepT")));class A extends o.a.Component{constructor(e){super(e),D(this,"sendExperienceComplete",()=>{}),D(this,"handleExternalSend",()=>{this.sendExperienceComplete()}),D(this,"onSendExperienceMount",e=>{e&&e.complete&&500946===e.experience_id&&(this.sendExperienceComplete=e.complete)}),D(this,"promoteButtonRef",Object(i.createRef)()),this.sendButtonTooltipRef=o.a.createRef()}render(){const{editable:e,gridDescription:t,hidePromoteButton:n,imageSrc:i,isFlyoutOpen:s,isOnSecretBoard:d,isPdp:m,onEditSubmit:u,onFlyoutDismiss:p,onToggleFlyout:h,pin:f,promoteButton:g,saveButton:b,shareButtonRef:y,viewParameter:w}=this.props,E=d?null:o.a.createElement(j.a,null,o.a.createElement(l.d,null,o.a.createElement(l.d,{ref:this.sendButtonTooltipRef},o.a.createElement(L,{buttonType:"icon",gridDescription:t,imageSrc:i,isFlyoutOpen:s,onExternalSend:this.handleExternalSend,onFlyoutDismiss:p,onToggleFlyout:h,pinId:f.id,sendType:"pin",shareButtonRef:y})),b&&!s&&o.a.createElement(c,{experienceIds:[500946],placementId:12,anchor:this.sendButtonTooltipRef.current,onExperienceMount:this.onSendExperienceMount}))),_=Object(P.c)(f),v=o.a.createElement(l.d,{display:"flex",color:"white",justifyContent:"between",rounding:2,"data-test-id":"closeup-action-items",maxWidth:m?B.f:B.d},o.a.createElement(l.d,{display:"flex"},e&&o.a.createElement(l.d,{marginEnd:1},o.a.createElement(a.a,{carouselSlotCurrentIndex:f&&f.carousel_data&&f.carousel_data.index,pinId:f.id,onSubmit:u,view:3,viewParameter:w})),o.a.createElement(r.a,{pin:f,viewParameter:w})),o.a.createElement(l.d,{alignItems:"center",display:"flex"},E,_&&o.a.createElement(j.a,null,o.a.createElement(I,{pinId:f.id,reactionByMe:f.reaction_by_me,showTooltip:!0})),!n&&g&&o.a.createElement(j.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(l.d,{ref:this.promoteButtonRef},g),o.a.createElement(c,{experienceIds:[501121],idealDirection:"down",placementId:12,anchor:this.promoteButtonRef.current,flyoutSize:"lg"})))));return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.d,{display:"flex",justifyContent:"between"},v,o.a.createElement(l.d,{marginStart:3},b)))}}t.default=Object(k.a)(A)},tkfL:function(e,t,n){var i=n("3vRR");n.d(t,"a",(function(){return i.a}));var o=n("Pus6");n.d(t,"b",(function(){return o.a}))}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/CloseupActionBarCommon-40a0a08fef4681b46990.mjs.map