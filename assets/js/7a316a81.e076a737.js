"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[6479],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),v=p(n),d=a,f=v["".concat(c,".").concat(d)]||v[d]||l[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},41678:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return v}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"supported-react-native-versions",title:"Supported React Native versions",sidebar_label:"Supported React Native versions"},c=void 0,p={unversionedId:"supported-react-native-versions",id:"version-4.x/supported-react-native-versions",isDocsHomePage:!1,title:"Supported React Native versions",description:"Since react-navigation@3.x depends on the new React.createContext API, which was added in react@16.3.x, we require react-native@^0.54.x. Also, react-navigation@3.x needs react-native-gesture-handler to work, so you will need to make sure that the version of react-native-gesture-handler you are using matches your current react-native version.",source:"@site/versioned_docs/version-4.x/supported-react-native-versions.md",sourceDirName:".",slug:"/supported-react-native-versions",permalink:"/docs/4.x/supported-react-native-versions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/supported-react-native-versions.md",tags:[],version:"4.x",frontMatter:{id:"supported-react-native-versions",title:"Supported React Native versions",sidebar_label:"Supported React Native versions"},sidebar:"version-4.x-docs",previous:{title:"Navigation views",permalink:"/docs/4.x/navigation-views"},next:{title:"Community Navigators and Libraries",permalink:"/docs/4.x/community-libraries-and-navigators"}},u=[],l={toc:u};function v(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation@3.x")," depends on the new ",(0,i.kt)("inlineCode",{parentName:"p"},"React.createContext")," API, which was added in ",(0,i.kt)("inlineCode",{parentName:"p"},"react@16.3.x"),", we require ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native@^0.54.x"),". Also, ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation@3.x")," needs ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler#react-native-support"},"react-native-gesture-handler")," to work, so you will need to make sure that the version of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," you are using matches your current ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native")," version."),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.x/react-native-screens"},"react-native-screens"),", you will need to be aware of its own supported ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native")," version too."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please note that the statements above may not be correct for a particular ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native")," version. If you notice a version that is not working properly, feel free to either file an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation.github.io/issues/new"},"issue")," or correct it in this page.")))}v.isMDXComponent=!0}}]);