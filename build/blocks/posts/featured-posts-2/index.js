(()=>{var e,t={925:(e,t,a)=>{"use strict";const l=window.wp.blocks,n=window.wp.element,o=window.lodash;var r=a(184),i=a.n(r);const c=window.wp.i18n,s=window.wp.blockEditor,m=window.wp.data,g=window.wp.compose,h=window.wp.coreData,p=window.wp.components,b=[{label:(0,c.__)("Newest to oldest"),value:"date/desc"},{label:(0,c.__)("Oldest to newest"),value:"date/asc"},{
/* translators: label for ordering posts by title in ascending order */
label:(0,c.__)("A → Z"),value:"title/asc"},{
/* translators: label for ordering posts by title in descending order */
label:(0,c.__)("Z → A"),value:"title/desc"}],u=function(e){let{order:t,orderBy:a,onChange:l}=e;return(0,n.createElement)(p.SelectControl,{label:(0,c.__)("Order by"),value:`${a}/${t}`,options:b,onChange:e=>{const[t,a]=e.split("/");l({order:a,orderBy:t})}})},d=e=>{const t=null==e?void 0:e.reduce(((e,t)=>{const{mapById:a,mapByName:l,names:n}=e;return a[t.id]=t,l[t.name]=t,n.push(t.name),e}),{mapById:{},mapByName:{},names:[]});return{entities:e,...t}},_={who:"authors",per_page:-1,_fields:"id,name",context:"view"},S=function(e){let{value:t,onChange:a}=e;const l=(0,m.useSelect)((e=>{const{getUsers:t}=e(h.store);return t(_)}),[]);if(!l)return null;const o=d(l),r=(t?t.toString().split(","):[]).reduce(((e,t)=>{const a=o.mapById[t];return a&&e.push({id:t,value:a.name}),e}),[]);return(0,n.createElement)(p.FormTokenField,{label:(0,c.__)("Authors"),value:r,suggestions:o.names,onChange:e=>{const t=Array.from(e.reduce(((e,t)=>{const a=((e,t)=>{var a;const l=(null==t?void 0:t.id)||(null===(a=e[t])||void 0===a?void 0:a.id);if(l)return l})(o.mapByName,t);return a&&e.add(a),e}),new Set));a({author:t.join(",")})}})},C=function(e){let{onChange:t,query:a}=e;const l=(o=a.postType,(0,m.useSelect)((e=>{const{getTaxonomies:t}=e(h.store);return t({type:o,per_page:-1,context:"view"})}),[o]));var o;const r=(0,m.useSelect)((e=>{const{getEntityRecords:t}=e(h.store),a={per_page:100};return null==l?void 0:l.map((e=>{let{slug:l,name:n}=e;const o=t("taxonomy",l,a);return{slug:l,name:n,terms:d(o)}}))}),[l]),i=e=>{var t;const l=r.find((t=>{let{slug:a}=t;return a===e}));return l?((null===(t=a.taxQuery)||void 0===t?void 0:t[e])||[]).reduce(((e,t)=>{const a=l.terms.mapById[t];return a&&e.push({id:t,value:a.name}),e}),[]):[]};return(0,n.createElement)(n.Fragment,null,!(null==r||!r.length)&&r.map((e=>{var l;let{slug:o,name:c,terms:s}=e;return null!=s&&null!==(l=s.names)&&void 0!==l&&l.length?(0,n.createElement)(p.FormTokenField,{key:o,label:c,value:i(o),suggestions:s.names,onChange:(m=o,e=>{const l=r.find((e=>{let{slug:t}=e;return t===m}));if(!l)return;const n=Array.from(e.reduce(((e,t)=>{const a=((e,t)=>{var a;const l=(null==t?void 0:t.id)||(null===(a=e[t])||void 0===a?void 0:a.id);if(l)return l;const n=t.toLocaleLowerCase();for(const t in e)if(t.toLocaleLowerCase()===n)return e[t].id})(l.terms.mapByName,t);return a&&e.add(a),e}),new Set)),o={...a.taxQuery,[m]:n};t({taxQuery:o})})}):null;var m})))},v=[{label:(0,c.__)("Include"),value:""},{label:(0,c.__)("Exclude"),value:"exclude"},{label:(0,c.__)("Only"),value:"only"}];function E(e){let{value:t,onChange:a}=e;return(0,n.createElement)(p.SelectControl,{label:(0,c.__)("Sticky posts"),options:v,value:t,onChange:a})}function y(e){let{attributes:{query:t},setQuery:a}=e;const{order:l,orderBy:o,author:r,sticky:i,perPage:s}=t;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(C,{onChange:a,query:t}),(0,n.createElement)(S,{value:r,onChange:a}),(0,n.createElement)(u,{order:l,orderBy:o,onChange:a}),(0,n.createElement)(E,{value:i,onChange:e=>a({sticky:e})}),(0,n.createElement)(p.RangeControl,{label:(0,c.__)("Number of items","bnm-blocks"),value:s,onChange:e=>a({perPage:e}),min:2,max:100,required:!0}))}function x(e){const[t,a]=(0,n.useState)(!1),l=()=>{a((e=>!e))},o=[{name:(0,c.__)("Small"),slug:"small",size:16},{name:(0,c.__)("Medium"),slug:"medium",size:24},{name:(0,c.__)("Large"),slug:"large",size:32},{name:(0,c.__)("Extra Large"),slug:"extra-large",size:42}];return(0,n.createElement)("div",{className:"thbnm-typography-control-container"},(0,n.createElement)("div",{className:"thbnm-control-label"},e.label),(0,n.createElement)("div",{className:"thbnm-color-control-click-side"},t&&(0,n.createElement)(p.Button,{className:"thbnm-typograpy-control-button",onClick:l},(0,n.createElement)(p.Dashicon,{icon:"edit"})),!t&&(0,n.createElement)(p.Button,{className:"thbnm-typograpy-control-button",onClick:l},(0,n.createElement)(p.Dashicon,{icon:"edit"})),t&&(0,n.createElement)(p.Popover,{position:"top left",onClose:l},(0,n.createElement)("div",{className:"thbnm-typography-controls-wrapper"},(0,n.createElement)(p.FontSizePicker,{__nextHasNoMarginBottom:!0,value:e.fontSize,onChange:e.onFontSizeChange,fontSizes:o}),(0,n.createElement)("br",null),(0,n.createElement)(p.__experimentalUnitControl,{label:(0,c.__)("Line Height","bnm-blocks"),value:e.lineHeight,onChange:e.onLineHeightChange,step:.1,units:[{a11yLabel:"Unitless (-)",label:"-",step:.1,value:""},{a11yLabel:"Pixels (px)",label:"px",step:.1,value:"px"},{a11yLabel:"Percentage (%)",label:"%",step:1,value:"%"}]}),(0,n.createElement)("br",null),(0,n.createElement)(p.__experimentalUnitControl,{label:(0,c.__)("Letter Spacing","bnm-blocks"),value:e.letterSpacing,onChange:e.onLetterSpacingChange,step:.1,min:-50,max:100}),(0,n.createElement)("br",null)))))}function f(e){let{attributes:t,setAttributes:a}=e;const{showSectionHeader:l,headerHtmlTag:r,headerFontSize:i,headerLineHeight:m,headerLetterSpacing:g,headerMargin:h,headerPadding:b,showTitle:u,titleHtmlTag:d,titleFontSize:_,titleFontSizeSmall:S,titleLineHeight:C,titleLineHeightSmall:v,titleLetterSpacing:E,titleLetterSpacingSmall:y,titleMargin:f,titlePadding:k,showDate:w,showCategory:L,showAuthor:H,showAvatar:P,showCommentCount:z,displayPostExcerpt:T,showDateSmall:N,showCategorySmall:M,categoryMargin:B,categoryPadding:F,showAuthorSmall:O,showAvatarSmall:A,showCommentCountSmall:R,displayPostExcerptSmall:I,excerptLength:j,excerptLengthSmall:D,excerptFontSize:G,excerptFontSizeSmall:q,excerptLineHeight:U,excerptLineHeightSmall:$,excerptLetterSpacing:Q,excerptLetterSpacingSmall:W,excerptMargin:V,excerptMarginSmall:Z,excerptPadding:J,excerptPaddingSmall:K,showReadMore:X,showReadMoreSmall:Y,readMoreLabel:ee,metaFontSize:te,metaFontSizeSmall:ae,metaLineHeight:le,metaLineHeightSmall:ne,metaLetterSpacing:oe,metaLetterSpacingSmall:re,metaSpacing:ie,metaMargin:ce,metaPadding:se,categoryFontSize:me,categoryLineHeight:ge,categoryLetterSpacing:he}=t;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(p.PanelBody,{title:(0,c.__)("Section Header","bnm-blocks"),initialOpen:!1},(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Section Header","bnm-blocks"),checked:l,onChange:()=>a({showSectionHeader:!l})}),l&&(0,n.createElement)("div",{className:"thbnm-settings-panel"},(0,n.createElement)(p.SelectControl,{label:(0,c.__)("Section Header HTML tag","bnm-blocks"),labelPosition:"side",value:r,options:[{label:"h1",value:"h1"},{label:"h2",value:"h2"},{label:"h3",value:"h3"},{label:"h4",value:"h4"},{label:"h5",value:"h5"},{label:"h6",value:"h6"},{label:"span",value:"span"},{label:"p",value:"p"}],onChange:e=>a({headerHtmlTag:e}),__nextHasNoMarginBottom:!0}),(0,n.createElement)(x,{label:(0,c.__)("Typography","bnm-blocks"),fontSize:i,onFontSizeChange:e=>a({headerFontSize:e}),lineHeight:m,onLineHeightChange:e=>a({headerLineHeight:e}),letterSpacing:g,onLetterSpacingChange:e=>a({headerLetterSpacing:e})}),(0,n.createElement)("br",null),(0,n.createElement)(p.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:h,onChange:e=>a({headerMargin:e})}),(0,n.createElement)(p.__experimentalBoxControl,{label:(0,c.__)("Padding","bnm-blocks"),values:b,onChange:e=>a({headerPadding:e})}),(0,n.createElement)(s.PanelColorSettings,{title:(0,c.__)("Color","bnm-blocks"),initialOpen:!1,colorSettings:[{value:t.headerColor,onChange:e=>a({headerColor:e}),label:(0,c.__)("Header Text Color","bnm-blocks")},{value:t.headerHoverColor,onChange:e=>a({headerHoverColor:e}),label:(0,c.__)("Header Text Hover Color","bnm-blocks")}]}))),(0,n.createElement)(p.PanelBody,{title:(0,c.__)("Post Title","bnm-blocks"),initialOpen:!1},(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Title","bnm-blocks"),checked:u,onChange:()=>a({showTitle:!u})}),u&&(0,n.createElement)("div",{className:"thbnm-settings-panel"},(0,n.createElement)(p.SelectControl,{label:(0,c.__)("Title HTML tag","bnm-blocks"),labelPosition:"side",value:d,options:[{label:"h1",value:"h1"},{label:"h2",value:"h2"},{label:"h3",value:"h3"},{label:"h4",value:"h4"},{label:"h5",value:"h5"},{label:"h6",value:"h6"},{label:"span",value:"span"},{label:"p",value:"p"}],onChange:e=>a({titleHtmlTag:e}),__nextHasNoMarginBottom:!0}),(0,n.createElement)(x,{label:(0,c.__)("Typography (Big Post Title)","bnm-blocks"),fontSize:_,onFontSizeChange:e=>a({titleFontSize:e}),lineHeight:C,onLineHeightChange:e=>a({titleLineHeight:e}),letterSpacing:E,onLetterSpacingChange:e=>a({titleLetterSpacing:e})}),(0,n.createElement)("br",null),(0,n.createElement)(x,{label:(0,c.__)("Typography (Small Post Titles)","bnm-blocks"),fontSize:S,onFontSizeChange:e=>a({titleFontSizeSmall:e}),lineHeight:v,onLineHeightChange:e=>a({titleLineHeightSmall:e}),letterSpacing:y,onLetterSpacingChange:e=>a({titleLetterSpacingSmall:e})}),(0,n.createElement)("br",null),(0,n.createElement)(p.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:f,onChange:e=>a({titleMargin:e})}),(0,n.createElement)(p.__experimentalBoxControl,{label:(0,c.__)("Padding","bnm-blocks"),values:k,onChange:e=>a({titlePadding:e})}),(0,n.createElement)(s.PanelColorSettings,{title:(0,c.__)("Color","bnm-blocks"),initialOpen:!1,colorSettings:[{value:t.titleColor,onChange:e=>a({titleColor:e}),label:(0,c.__)("Title Color","bnm-blocks")},{value:t.titleHoverColor,onChange:e=>a({titleHoverColor:e}),label:(0,c.__)("Title Hover","bnm-blocks")}]}))),(0,n.createElement)(p.PanelBody,{title:(0,c.__)("Category","bnm-blocks"),initialOpen:!1},(0,n.createElement)(p.PanelRow,null,(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Category","bnm-blocks"),checked:L,onChange:()=>a({showCategory:!L})})),(0,n.createElement)(p.PanelRow,null,(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Category(Small Posts)","bnm-blocks"),checked:M,onChange:()=>a({showCategorySmall:!M})})),(0,n.createElement)(x,{label:(0,c.__)("Typography","bnm-blocks"),fontSize:me,onFontSizeChange:e=>a({categoryFontSize:e}),lineHeight:ge,onLineHeightChange:e=>a({categoryLineHeight:e}),letterSpacing:he,onLetterSpacingChange:e=>a({categoryLetterSpacing:e})}),(0,n.createElement)("br",null),(0,n.createElement)(p.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:B,onChange:e=>a({categoryMargin:e})}),(0,n.createElement)(p.__experimentalBoxControl,{label:(0,c.__)("Padding","bnm-blocks"),values:F,onChange:e=>a({categoryPadding:e})}),(0,n.createElement)(s.PanelColorSettings,{title:(0,c.__)("Category Color","bnm-blocks"),initialOpen:!1,colorSettings:[{value:t.categoryColor,onChange:e=>a({categoryColor:e}),label:(0,c.__)("Text Color","bnm-blocks")},{value:t.categoryHoverColor,onChange:e=>a({categoryHoverColor:e}),label:(0,c.__)("Text Color: Hover","bnm-blocks")},{value:t.categoryBGColor,onChange:e=>a({categoryBGColor:e}),label:(0,c.__)("Background Color","bnm-blocks")},{value:t.categoryBGHoverColor,onChange:e=>a({categoryBGHoverColor:e}),label:(0,c.__)("Background Color: Hover","bnm-blocks")}]})),(0,n.createElement)(p.PanelBody,{title:(0,c.__)("Post Meta","bnm-blocks"),className:"thbnm-panelbody",initialOpen:!1},(0,n.createElement)(p.TabPanel,{className:"thbnm-featured-image-settings-tab-panel thbnm-tab-panel",activeClass:"thbnm-active-tab",initialTabName:"big-post",tabs:[{name:"big-post",title:"Big Post",className:"tab-big-post"},{name:"small-post",title:"Small Posts",className:"tab-small-post"}]},(e=>"big-post"===e.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Author","bnm-blocks"),checked:H,onChange:()=>a({showAuthor:!H})}),H&&(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Author Avatar","bnm-blocks"),checked:P,onChange:()=>a({showAvatar:!P})}),(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Date","bnm-blocks"),checked:w,onChange:()=>a({showDate:!w})}),(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Comment Count","bnm-blocks"),checked:z,onChange:()=>a({showCommentCount:!z})}),(0,n.createElement)(x,{label:(0,c.__)("Typography","bnm-blocks"),fontSize:te,onFontSizeChange:e=>a({metaFontSize:e}),lineHeight:le,onLineHeightChange:e=>a({metaLineHeight:e}),letterSpacing:oe,onLetterSpacingChange:e=>a({metaLetterSpacing:e})})):"small-post"===e.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Author","bnm-blocks"),checked:O,onChange:()=>a({showAuthorSmall:!O})}),O&&(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Author Avatar","bnm-blocks"),checked:A,onChange:()=>a({showAvatarSmall:!A})}),(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Date","bnm-blocks"),checked:N,onChange:()=>a({showDateSmall:!N})}),(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Comment Count","bnm-blocks"),checked:R,onChange:()=>a({showCommentCountSmall:!R})}),(0,n.createElement)(x,{label:(0,c.__)("Typography","bnm-blocks"),fontSize:ae,onFontSizeChange:e=>a({metaFontSizeSmall:e}),lineHeight:ne,onLineHeightChange:e=>a({metaLineHeightSmall:e}),letterSpacing:re,onLetterSpacingChange:e=>a({metaLetterSpacingSmall:e})})):void 0)),(0,n.createElement)(p.__experimentalUnitControl,{label:(0,c.__)("Meta Spacing","bnm-blocks"),value:ie,onChange:e=>a({metaSpacing:e})}),(0,n.createElement)(p.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:ce,onChange:e=>a({metaMargin:e})}),(0,n.createElement)(p.__experimentalBoxControl,{label:(0,c.__)("Padding","bnm-blocks"),values:se,onChange:e=>a({metaPadding:e})}),(0,n.createElement)(s.PanelColorSettings,{title:(0,c.__)("Post Meta Color","bnm-blocks"),initialOpen:!1,colorSettings:[{value:t.metaColor,onChange:e=>a({metaColor:e}),label:(0,c.__)("Text Color","bnm-blocks")},{value:t.metaHoverColor,onChange:e=>a({metaHoverColor:e}),label:(0,c.__)("Text Color: Hover","bnm-blocks")}]})),(0,n.createElement)(p.PanelBody,{title:(0,c.__)("Post Excerpt","bnm-blocks"),className:"thbnm-panelbody",initialOpen:!1},(0,n.createElement)(p.TabPanel,{className:"thbnm-featured-image-settings-tab-panel thbnm-tab-panel",activeClass:"thbnm-active-tab",initialTabName:"big-post",tabs:[{name:"big-post",title:"Big Post",className:"tab-big-post"},{name:"small-post",title:"Small Posts",className:"tab-small-post"}]},(e=>"big-post"===e.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Post Excerpt","bnm-blocks"),checked:T,onChange:()=>a({displayPostExcerpt:!T})}),T&&(0,n.createElement)(p.RangeControl,{label:(0,c.__)("Max number of words in excerpt","bnm-blocks"),value:j,onChange:e=>a({excerptLength:e}),min:5,max:100}),T&&(0,n.createElement)(p.ToggleControl,{label:(0,c.__)('Add a "Read More" link',"bnm-blocks"),checked:X,onChange:()=>a({showReadMore:!X})}),T&&(0,n.createElement)(x,{label:(0,c.__)("Typography","bnm-blocks"),fontSize:G,onFontSizeChange:e=>a({excerptFontSize:e}),lineHeight:U,onLineHeightChange:e=>a({excerptLineHeight:e}),letterSpacing:Q,onLetterSpacingChange:e=>a({excerptLetterSpacing:e})}),(0,n.createElement)("br",null),X&&(0,n.createElement)(p.TextControl,{label:(0,c.__)('"Read More" link text',"bnm-blocks"),value:ee,placeholder:ee,onChange:e=>a({readMoreLabel:e})}),(0,n.createElement)(p.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:V,onChange:e=>a({excerptMargin:e})}),(0,n.createElement)(p.__experimentalBoxControl,{label:(0,c.__)("Padding","bnm-blocks"),values:J,onChange:e=>a({excerptPadding:e})})):"small-post"===e.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(p.ToggleControl,{label:(0,c.__)("Show Post Excerpt","bnm-blocks"),checked:I,onChange:()=>a({displayPostExcerptSmall:!I})}),I&&(0,n.createElement)(p.RangeControl,{label:(0,c.__)("Max number of words in excerpt","bnm-blocks"),value:D,onChange:e=>a({excerptLengthSmall:e}),min:5,max:100}),I&&(0,n.createElement)(p.ToggleControl,{label:(0,c.__)('Add a "Read More" link',"bnm-blocks"),checked:Y,onChange:()=>a({showReadMoreSmall:!Y})}),I&&(0,n.createElement)(x,{label:(0,c.__)("Typography","bnm-blocks"),fontSize:q,onFontSizeChange:e=>a({excerptFontSizeSmall:e}),lineHeight:$,onLineHeightChange:e=>a({excerptLineHeightSmall:e}),letterSpacing:W,onLetterSpacingChange:e=>a({excerptLetterSpacingSmall:e})}),(0,n.createElement)("br",null),Y&&(0,n.createElement)(p.TextControl,{label:(0,c.__)('"Read More" link text',"bnm-blocks"),value:ee,placeholder:ee,onChange:e=>a({readMoreLabel:e})}),(0,n.createElement)(p.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:Z,onChange:e=>a({excerptMarginSmall:e})}),(0,n.createElement)(p.__experimentalBoxControl,{label:(0,c.__)("Padding","bnm-blocks"),values:K,onChange:e=>a({excerptPaddingSmall:e})})):void 0)),(0,n.createElement)(s.PanelColorSettings,{title:(0,c.__)("Color","bnm-blocks"),initialOpen:!1,colorSettings:[{value:t.excerptColor,onChange:e=>a({excerptColor:e}),label:(0,c.__)("Excerpt Color","bnm-blocks")}]})),(0,n.createElement)(p.PanelBody,{title:(0,c.__)("Featured Image Settings","bnm-blocks"),initialOpen:!1},(0,n.createElement)(p.TabPanel,{className:"thbnm-featured-image-settings-tab-panel thbnm-tab-panel",activeclassName:"thbnm-active-tab",initialTabName:"big-post",tabs:[{name:"big-post",title:"Big Post",className:"tab-big-post"},{name:"small-post",title:"Small Posts",className:"tab-small-post"}]},(e=>"big-post"===e.name?(0,n.createElement)(p.SelectControl,{label:(0,c.__)("Image Size","bnm-blocks"),value:t.featuredImageSizeSlug,options:window.themezHutGutenberg.imageSizes.map((e=>({label:(0,o.startCase)((0,o.toLower)(e)),value:e}))),onChange:e=>a({featuredImageSizeSlug:e})}):"small-post"===e.name?(0,n.createElement)(p.SelectControl,{label:(0,c.__)("Image Size (Small)","bnm-blocks"),value:t.featuredImageSizeSlugSmall,options:window.themezHutGutenberg.imageSizes.map((e=>({label:(0,o.startCase)((0,o.toLower)(e)),value:e}))),onChange:e=>a({featuredImageSizeSlugSmall:e})}):void 0))))}const k=e=>(0,o.isNumber)(e)?(e=>e?`${e}px`:e)(e):e,w=e=>{var t,a,l,n;if(0!==Object.keys(e).length&&e.constructor===Object&&L(e))return`${null!==(t=e.top)&&void 0!==t?t:"0px"} ${null!==(a=e.right)&&void 0!==a?a:"0px"} ${null!==(l=e.bottom)&&void 0!==l?l:"0px"} ${null!==(n=e.left)&&void 0!==n?n:"0px"}`},L=e=>{for(const t in e)if(void 0!==e[t])return!0;return!1};function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},H.apply(this,arguments)}const P=window.wp.date;function z(e,t){var a,l,n,r;const i=(0,o.get)(e,["_embedded","wp:featuredmedia","0"]);return{url:null!==(a=null==i||null===(l=i.media_details)||void 0===l||null===(n=l.sizes)||void 0===n||null===(r=n[t])||void 0===r?void 0:r.source_url)&&void 0!==a?a:null==i?void 0:i.source_url,alt:null==i?void 0:i.alt_text}}const T=e=>{let{post:t,excerptLength:a,showReadMore:l,readMoreLabel:o}=e,r=t.excerpt.rendered;const i=document.createElement("div");return i.innerHTML=r,r=i.textContent||i.innerText||"",l?(0,n.createElement)("div",{className:"bnm-post-excerpt"},r.trim().split(" ",a).join(" "),(0,c.__)("… "),(0,n.createElement)("a",{href:"#",className:"bnm-readmore"},o)):(0,n.createElement)("div",{className:"bnm-post-excerpt"},r.trim().split(" ",a).join(" "),(0,c.__)("… "))},N=e=>{let{attributes:t,post:a}=e;const l=t.titleHtmlTag||"h3";return(0,n.createElement)(l,{className:"entry-title"},(0,n.createElement)("a",{href:"#"},a.title.rendered?a.title.rendered:(0,c.__)("Default title","bnm-blocks")))},M=e=>{let{categoriesList:t,post:a}=e;const l=t,o=a.categories,r=[];if(void 0!==l&&void 0!==o)for(let e=0;e<l.length;e++)for(let t=0;t<o.length;t++)l[e].id===o[t]&&r.push(l[e].name);return(0,n.createElement)("div",{className:"bnm-category-list"},r.map((e=>(0,n.createElement)("a",{href:"#"},e))))},B=e=>{let{author:t}=e;return(0,n.createElement)("span",{className:"byline"},(0,n.createElement)("span",{className:"author vcard bnm-post-author"},(0,n.createElement)("a",{href:"#"},(0,c.sprintf)(
/* translators: byline. %s: current author. */
(0,c.__)("by %s"),t.name))))},F=e=>{var t;let{author:a}=e;const l=null==a||null===(t=a.avatar_urls)||void 0===t?void 0:t[48];return l&&(0,n.createElement)("span",{className:"bnm-avatar"},(0,n.createElement)("img",{src:l}))||null},O=e=>{let{post:t}=e;const a=(0,P.getSettings)().formats.date;return t.date_gmt?(0,n.createElement)("span",{className:"posted-on bnm-post-date"},(0,n.createElement)("time",{className:"entry-date published",dateTime:(0,P.format)("c",t.date_gmt)},(0,n.createElement)("a",{href:"#"},(0,P.dateI18n)(a,t.date_gmt)))):null},A=e=>{let{post:t}=e;return t.comment_count?(0,n.createElement)("span",{className:"comments-link bnm-comment-count"},(0,n.createElement)("a",{href:"#"},t.comment_count)):null},R=e=>{let{posts:t,authorsList:a,categoriesList:l,blockProps:o,inlineStyles:r,attributes:i,setAttributes:m}=e;return(0,n.createElement)("div",H({},o,{style:r}),i.showSectionHeader&&(0,n.createElement)("div",{className:"bnm-block-title-wrap"},(0,n.createElement)(s.RichText,{onChange:e=>m({sectionHeader:e}),placeholder:(0,c.__)("Write section header…","bnm-blocks"),value:i.sectionHeader,tagName:i.headerHtmlTag,className:"article-section-title"})),(0,n.createElement)("div",{className:"bnm-fp2-container"},t&&t.length>0&&t.map(((e,t)=>{const{url:o,alt:r}=z(e,i.featuredImageSizeSlug),c=null==a?void 0:a.find((t=>t.id===e.author));return(0===t||1===t)&&(0,n.createElement)("article",{className:"bnm-fp2-large"},o&&(0,n.createElement)("img",{src:o,alt:r,className:"bnm-fp-img"}),(0,n.createElement)("div",{className:"bnmfpovrlay inside-gut-editor"},(0,n.createElement)("a",{className:"bnmlnkovrlay-ge",href:"#"})),(0,n.createElement)("div",{className:"bnm-fp2-post-content"},i.showCategory&&l&&(0,n.createElement)(M,{categoriesList:l,post:e}),i.showTitle&&(0,n.createElement)(N,{post:e,attributes:i}),(0,n.createElement)("div",{className:"entry-meta"},i.showAuthor&&i.showAvatar&&c&&(0,n.createElement)(F,{author:c}),i.showAuthor&&c&&(0,n.createElement)(B,{author:c}),i.showDate&&(0,n.createElement)(O,{post:e}),i.showCommentCount&&(0,n.createElement)(A,{post:e})),i.displayPostExcerpt&&(0,n.createElement)(T,{post:e,excerptLength:i.excerptLength,showReadMore:i.showReadMore,readMoreLabel:i.readMoreLabel})))})),t&&t.length>0&&t.map(((e,t)=>{const{url:o,alt:r}=z(e,i.featuredImageSizeSlugSmall),c=null==a?void 0:a.find((t=>t.id===e.author));return(2===t||3===t||4===t)&&(0,n.createElement)("article",{className:"bnm-fp2-small"},o&&(0,n.createElement)("img",{src:o,alt:r,className:"bnm-fp-img"}),(0,n.createElement)("div",{className:"bnmfpovrlay inside-gut-editor"},(0,n.createElement)("a",{className:"bnmlnkovrlay-ge",href:"#"})),(0,n.createElement)("div",{className:"bnm-fp2-post-content"},i.showCategorySmall&&l&&(0,n.createElement)(M,{categoriesList:l,post:e}),i.showTitle&&(0,n.createElement)(N,{post:e,attributes:i}),(0,n.createElement)("div",{className:"entry-meta"},i.showAuthorSmall&&i.showAvatarSmall&&c&&(0,n.createElement)(F,{author:c}),i.showAuthorSmall&&c&&(0,n.createElement)(B,{author:c}),i.showDateSmall&&(0,n.createElement)(O,{post:e}),i.showCommentCountSmall&&(0,n.createElement)(A,{post:e})),i.displayPostExcerptSmall&&(0,n.createElement)(T,{post:e,excerptLength:i.excerptLengthSmall,showReadMore:i.showReadMoreSmall,readMoreLabel:i.readMoreLabel})))}))))},I={per_page:-1,context:"view"},j={per_page:-1,has_published_posts:["post"],context:"view"},D=JSON.parse('{"u2":"bnm-blocks/featured-posts-2"}');(0,l.registerBlockType)(D.u2,{icon:()=>(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",version:"1.1",viewBox:"0 0 12.7 12.7"},(0,n.createElement)("g",{fillRule:"evenodd"},(0,n.createElement)("path",{strokeWidth:"0.197",d:"M0 2.381h5.82V6.88H0z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{fill:"#333",strokeWidth:"0.256",d:"M0 7.673h3.704v2.381H0z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.197",d:"M6.88 2.381h5.82V6.88H6.88z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{fill:"#333",strokeWidth:"0.256",d:"M4.498 7.673h3.704v2.381H4.498z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{fill:"#333",strokeWidth:"0.256",d:"M8.996 7.673H12.7v2.381H8.996z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}))),edit:function e(t){let{attributes:a,setAttributes:l}=t;const{queryId:r,query:b,categoryPadding:u,featuredImageSizeSlug:d}=a,{author:_,order:S,orderBy:C,perPage:v,taxQuery:E,sticky:x}=b,H={author:_,order:S,orderby:C,per_page:v,_embed:"wp:featuredmedia"};"exclude"===x&&(H.sticky=!1),"only"===x&&(H.sticky=!0),E&&(H.categories=E.category,H.tags=E.post_tag);const{posts:P,categoriesList:z,authorsList:T}=(0,m.useSelect)((e=>{const{getEntityRecords:t,getUsers:a}=e(h.store);return{posts:t("postType","post",(0,o.pickBy)(H,(e=>!(0,o.isUndefined)(e)))),categoriesList:t("taxonomy","category",I),authorsList:a(j)}}),[_,S,C,v,E,x,d]),{__unstableMarkNextChangeAsNotPersistent:N}=(0,m.useDispatch)(s.store),M=(0,g.useInstanceId)(e),{postsPerPage:B}=(0,m.useSelect)((e=>{const{getSettings:t}=e(s.store);return{postsPerPage:+t().postsPerPage||5}}),[]);(0,n.useEffect)((()=>{const e={};!b.perPage&&B&&(e.perPage=B),Object.keys(e).length&&(N(),D(e))}),[b.perPage]),(0,n.useEffect)((()=>{Number.isFinite(r)||(N(),l({queryId:M}))}),[r,M]);const F={"--title-font-size":k(a.titleFontSize),"--title-font-size-small":k(a.titleFontSizeSmall),"--title-line-height":a.titleLineHeight,"--title-line-height-small":a.titleLineHeightSmall,"--title-letter-spacing":a.titleLetterSpacing,"--title-letter-spacing-small":a.titleLetterSpacingSmall,"--title-padding":w(a.titlePadding),"--title-margin":w(a.titleMargin),"--title-color":a.titleColor,"--title-hover-color":a.titleHoverColor,"--category-font-size":k(a.categoryFontSize),"--category-line-height":a.categoryLineHeight,"--category-letter-spacing":a.categoryLetterSpacing,"--category-color":a.categoryColor,"--category-hover-color":a.categoryHoverColor,"--category-bg-color":a.categoryBGColor,"--category-bg-hover-color":a.categoryBGHoverColor,"--category-padding":w(a.categoryPadding),"--category-margin":w(a.categoryMargin),"--meta-font-size":k(a.metaFontSize),"--meta-font-size-small":k(a.metaFontSizeSmall),"--meta-line-height":a.metaLineHeight,"--meta-line-height-small":a.metaLineHeightSmall,"--meta-letter-spacing":a.metaLetterSpacing,"--meta-letter-spacing-small":a.metaLetterSpacingSmall,"--meta-spacing":a.metaSpacing,"--meta-padding":w(a.metaPadding),"--meta-margin":w(a.metaMargin),"--meta-color":a.metaColor,"--meta-hover-color":a.metaHoverColor,"--excerpt-font-size":k(a.excerptFontSize),"--excerpt-font-size-small":k(a.excerptFontSizeSmall),"--excerpt-line-height":a.excerptLineHeight,"--excerpt-line-height-small":a.excerptLineHeightSmall,"--excerpt-letter-spacing":a.excerptLetterSpacing,"--excerpt-letter-spacing-small":a.excerptLetterSpacingSmall,"--excerpt-padding":w(a.excerptPadding),"--excerpt-margin":w(a.excerptMargin),"--excerpt-padding-small":w(a.excerptPaddingSmall),"--excerpt-margin-small":w(a.excerptMarginSmall),"--excerpt-color":a.excerptColor,"--header-font-size":k(a.headerFontSize),"--header-line-height":a.headerLineHeight,"--header-letter-spacing":a.headerLetterSpacing,"--header-padding":w(a.headerPadding),"--header-margin":w(a.headerMargin),"--header-color":a.headerColor,"--header-hover-color":a.headerHoverColor,"--col-gap":a.colGap};let O=!1;0!==Object.keys(u).length&&u.constructor===Object&&L(u)&&(O=!0),(a.categoryBGColor||a.categoryBGHoverColor)&&(O=!0);const A=(0,s.useBlockProps)({className:i()("wpbnmfpb2",{"bnm-box-cat":O})}),D=e=>l({query:{...b,...e}}),G=!(null==P||!P.length),q=(0,n.createElement)(s.InspectorControls,null,(0,n.createElement)(p.PanelBody,{title:(0,c.__)("Content Settings","bnm-blocks"),initialOpen:!0},(0,n.createElement)(y,{attributes:a,setQuery:D})),(0,n.createElement)(f,{attributes:a,setAttributes:l}));return G?(0,n.createElement)(n.Fragment,null,q,(0,n.createElement)(R,{posts:P,categoriesList:z,authorsList:T,blockProps:A,inlineStyles:F,attributes:a,setAttributes:l})):(0,n.createElement)("div",A,q,(0,n.createElement)(p.Placeholder,null,Array.isArray(P)?(0,c.__)("No posts found"):(0,n.createElement)(p.Spinner,null)))},save:function(){return null}})},184:(e,t)=>{var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var r=n.apply(null,a);r&&e.push(r)}}else if("object"===o){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var i in a)l.call(a,i)&&a[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,a,n,o)=>{if(!a){var r=1/0;for(m=0;m<e.length;m++){for(var[a,n,o]=e[m],i=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(l.O).every((e=>l.O[e](a[c])))?a.splice(c--,1):(i=!1,o<r&&(r=o));if(i){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[a,n,o]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={683:0,871:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[r,i,c]=a,s=0;if(r.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(c)var m=c(l)}for(t&&t(a);s<r.length;s++)o=r[s],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(m)},a=globalThis.webpackChunkbnm_blocks=globalThis.webpackChunkbnm_blocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=l.O(void 0,[871],(()=>l(925)));n=l.O(n)})();