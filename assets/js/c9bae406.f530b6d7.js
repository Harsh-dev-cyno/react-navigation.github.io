(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[3508],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(b,r(r({ref:t},p),{},{components:a})):n.createElement(b,r({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(67294),i=a(80944),o=a(86010),r="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,a=e.block,p=e.defaultValue,u=e.values,m=e.groupId,d=e.className,b=(0,i.Z)(),h=b.tabGroupChoices,v=b.setTabGroupChoices,f=(0,n.useState)(p),k=f[0],g=f[1],N=n.Children.toArray(e.children),y=[];if(null!=m){var C=h[m];null!=C&&C!==k&&u.some((function(e){return e.value===C}))&&g(C)}var T=function(e){var t=e.currentTarget,a=y.indexOf(t),n=u[a].value;g(n),null!=m&&(v(m,n),setTimeout((function(){var e,a,n,i,o,r,s,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,o=e.right,r=window,s=r.innerHeight,c=r.innerWidth,a>=0&&o<=c&&i<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case c:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case s:var i=y.indexOf(e.target)-1;a=y[i]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",r,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:T,onClick:T},a)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),i=a(79443);t.Z=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},61118:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(74034),i=a(79973),o=(a(67294),a(3905)),r=a(41395),l=a(58215),s={id:"material-bottom-tab-navigator",title:"Material Bottom Tabs Navigator",sidebar_label:"Material Bottom Tabs"},c={unversionedId:"material-bottom-tab-navigator",id:"version-5.x/material-bottom-tab-navigator",isDocsHomePage:!1,title:"Material Bottom Tabs Navigator",description:"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-5.x/material-bottom-tab-navigator.md",sourceDirName:".",slug:"/material-bottom-tab-navigator",permalink:"/docs/5.x/material-bottom-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/material-bottom-tab-navigator.md",version:"5.x",sidebar_label:"Material Bottom Tabs",frontMatter:{id:"material-bottom-tab-navigator",title:"Material Bottom Tabs Navigator",sidebar_label:"Material Bottom Tabs"},sidebar:"version-5.x/docs",previous:{title:"Bottom Tabs Navigator",permalink:"/docs/5.x/bottom-tab-navigator"},next:{title:"Material Top Tabs Navigator",permalink:"/docs/5.x/material-top-tab-navigator"}},p=[{value:"API Definition",id:"api-definition",children:[]},{value:"RouteConfigs",id:"routeconfigs",children:[{value:"Props",id:"props",children:[]},{value:"Options",id:"options",children:[]},{value:"Events",id:"events",children:[]},{value:"Helpers",id:"helpers",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Using with <code>react-native-paper</code> (optional)",id:"using-with-react-native-paper-optional",children:[]}],u={toc:p};function m(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused."),(0,o.kt)("p",null,"This wraps the ",(0,o.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/bottom-navigation.html"},(0,o.kt)("inlineCode",{parentName:"a"},"BottomNavigation"))," component from ",(0,o.kt)("a",{parentName:"p",href:"https://reactnativepaper.com"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-paper")),". If you ",(0,o.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/getting-started.html"},"configure the Babel plugin"),", it won't include the whole ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-paper")," library in your bundle."),(0,o.kt)("img",{src:"/assets/navigators/tabs/material-bottom-tabs.gif",style:{width:"420px",maxWidth:"100%",margin:"16px 0"}}),(0,o.kt)("p",null,"To use this navigator, ensure that you have ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/getting-started"},(0,o.kt)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/material-bottom-tabs"},(0,o.kt)("inlineCode",{parentName:"a"},"@react-navigation/material-bottom-tabs")),":"),(0,o.kt)(r.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/material-bottom-tabs@^5.x react-native-paper react-native-vector-icons\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/material-bottom-tabs@^5.x react-native-paper react-native-vector-icons\n")))),(0,o.kt)("p",null,"This API also requires that you install ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"! If you are using Expo managed workflow, it will work without any extra steps. Otherwise, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons#installation"},"follow these installation instructions"),"."),(0,o.kt)("p",null,"To use this tab navigator, import it from ",(0,o.kt)("inlineCode",{parentName:"p"},"@react-navigation/material-bottom-tabs")),(0,o.kt)("h2",{id:"api-definition"},"API Definition"),(0,o.kt)("p",null,"To use this tab navigator, import it from ",(0,o.kt)("inlineCode",{parentName:"p"},"@react-navigation/material-bottom-tabs"),":"),(0,o.kt)("samp",{id:"material-tab-based-navigation-minimal"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/tab-based-navigation"},"Tab Navigation"))),(0,o.kt)("h2",{id:"routeconfigs"},"RouteConfigs"),(0,o.kt)("p",null,"The route configs object is a mapping from route name to a route config."),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Tab.Navigator")," component accepts following props:"),(0,o.kt)("h4",{id:"initialroutename"},(0,o.kt)("inlineCode",{parentName:"h4"},"initialRouteName")),(0,o.kt)("p",null,"The name of the route to render on first load of the navigator."),(0,o.kt)("h4",{id:"screenoptions"},(0,o.kt)("inlineCode",{parentName:"h4"},"screenOptions")),(0,o.kt)("p",null,"Default options to use for the screens in the navigator."),(0,o.kt)("h4",{id:"backbehavior"},(0,o.kt)("inlineCode",{parentName:"h4"},"backBehavior")),(0,o.kt)("p",null,"Behavior of back button handling."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"order")," to return to previous tab (in the order they are shown in the tab bar)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"history")," to return to last visited tab"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none")," to not handle back button")),(0,o.kt)("h4",{id:"shifting"},(0,o.kt)("inlineCode",{parentName:"h4"},"shifting")),(0,o.kt)("p",null,"Whether the shifting style is used, the active tab icon shifts up to show the label and the inactive tabs won't have a label."),(0,o.kt)("p",null,"By default, this is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," when you have more than 3 tabs. Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"shifting={false}")," to explicitly disable this animation, or ",(0,o.kt)("inlineCode",{parentName:"p"},"shifting={true}")," to always use this animation."),(0,o.kt)("h4",{id:"labeled"},(0,o.kt)("inlineCode",{parentName:"h4"},"labeled")),(0,o.kt)("p",null,"Whether to show labels in tabs. When ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", only icons will be displayed."),(0,o.kt)("h4",{id:"activecolor"},(0,o.kt)("inlineCode",{parentName:"h4"},"activeColor")),(0,o.kt)("p",null,"Custom color for icon and label in the active tab."),(0,o.kt)("h4",{id:"inactivecolor"},(0,o.kt)("inlineCode",{parentName:"h4"},"inactiveColor")),(0,o.kt)("p",null,"Custom color for icon and label in the inactive tab."),(0,o.kt)("h4",{id:"barstyle"},(0,o.kt)("inlineCode",{parentName:"h4"},"barStyle")),(0,o.kt)("p",null,"Style for the bottom navigation bar. You can pass custom background color here:"),(0,o.kt)("samp",{id:"material-bottom-tab-styled"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Tab.Navigator\n  initialRouteName="Home"\n  activeColor="#f0edf6"\n  inactiveColor="#3e2465"\n  barStyle={{ backgroundColor: \'#694fad\' }}\n>\n  {/* ... */}\n</Tab.Navigator>\n')),(0,o.kt)("p",null,"If you have a translucent navigation bar on Android, you can also set a bottom padding here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Tab.Navigator\n  initialRouteName="Home"\n  activeColor="#f0edf6"\n  inactiveColor="#3e2465"\n  barStyle={{ paddingBottom: 48 }}\n>\n  {/* ... */}\n</Tab.Navigator>\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("p",null,"The following ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/screen-options"},"options")," can be used to configure the screens in the navigator:"),(0,o.kt)("h4",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h4"},"title")),(0,o.kt)("p",null,"Generic title that can be used as a fallback for ",(0,o.kt)("inlineCode",{parentName:"p"},"headerTitle")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),(0,o.kt)("h4",{id:"tabbaricon"},(0,o.kt)("inlineCode",{parentName:"h4"},"tabBarIcon")),(0,o.kt)("p",null,"Function that given ",(0,o.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in the tab bar."),(0,o.kt)("h4",{id:"tabbarcolor"},(0,o.kt)("inlineCode",{parentName:"h4"},"tabBarColor")),(0,o.kt)("p",null,"Color for the tab bar when the tab corresponding to the screen is active. Used for the ripple effect. This is only supported when ",(0,o.kt)("inlineCode",{parentName:"p"},"shifting")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h4",{id:"tabbarlabel"},(0,o.kt)("inlineCode",{parentName:"h4"},"tabBarLabel")),(0,o.kt)("p",null,"Title string of a tab displayed in the tab bar. When undefined, scene ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",(0,o.kt)("inlineCode",{parentName:"p"},"labeled")," option in the previous section."),(0,o.kt)("h4",{id:"tabbarbadge"},(0,o.kt)("inlineCode",{parentName:"h4"},"tabBarBadge")),(0,o.kt)("p",null,"Badge to show on the tab icon, can be ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to show a dot, ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," to show text."),(0,o.kt)("h4",{id:"tabbaraccessibilitylabel"},(0,o.kt)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),(0,o.kt)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),(0,o.kt)("h4",{id:"tabbartestid"},(0,o.kt)("inlineCode",{parentName:"h4"},"tabBarTestID")),(0,o.kt)("p",null,"ID to locate this tab button in tests."),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)("p",null,"The navigator can ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-events"},"emit events")," on certain actions. Supported events are:"),(0,o.kt)("h4",{id:"tabpress"},(0,o.kt)("inlineCode",{parentName:"h4"},"tabPress")),(0,o.kt)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the tab is not focused, tab press will focus that tab"),(0,o.kt)("li",{parentName:"ul"},"If the tab is already focused:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the screen for the tab renders a scroll view, you can use ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.x/use-scroll-to-top"},(0,o.kt)("inlineCode",{parentName:"a"},"useScrollToTop"))," to scroll it to top"),(0,o.kt)("li",{parentName:"ul"},"If the screen for the tab renders a stack navigator, a ",(0,o.kt)("inlineCode",{parentName:"li"},"popToTop")," action is performed on the stack")))),(0,o.kt)("p",null,"To prevent the default behavior, you can call ",(0,o.kt)("inlineCode",{parentName:"p"},"event.preventDefault"),":"),(0,o.kt)("samp",{id:"material-bottom-tab-prevent-default"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', (e) => {\n    // Prevent default behavior\n\n    e.preventDefault();\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),(0,o.kt)("h3",{id:"helpers"},"Helpers"),(0,o.kt)("p",null,"The tab navigator adds the following methods to the navigation prop:"),(0,o.kt)("h4",{id:"jumpto"},(0,o.kt)("inlineCode",{parentName:"h4"},"jumpTo")),(0,o.kt)("p",null,"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,o.kt)("em",{parentName:"li"},"string")," - Name of the route to jump to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,o.kt)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",(0,o.kt)("inlineCode",{parentName:"li"},"route.params"),").")),(0,o.kt)("samp",{id:"material-tab-jump-to"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigation.jumpTo('Profile', { name: 'Micha\u015b' });\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("samp",{id:"material-bottom-tab-example"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\nimport MaterialCommunityIcons from \'react-native-vector-icons/MaterialCommunityIcons\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName="Feed"\n      activeColor="#e91e63"\n      barStyle={{ backgroundColor: \'tomato\' }}\n    >\n      <Tab.Screen\n        name="Feed"\n        component={Feed}\n        options={{\n          tabBarLabel: \'Home\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="home" color={color} size={26} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Notifications"\n        component={Notifications}\n        options={{\n          tabBarLabel: \'Updates\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="bell" color={color} size={26} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Profile"\n        component={Profile}\n        options={{\n          tabBarLabel: \'Profile\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="account" color={color} size={26} />\n          ),\n        }}\n      />\n    </Tab.Navigator>\n  );\n}\n')),(0,o.kt)("h2",{id:"using-with-react-native-paper-optional"},"Using with ",(0,o.kt)("inlineCode",{parentName:"h2"},"react-native-paper")," (optional)"),(0,o.kt)("p",null,"You can use the theming support in ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-paper")," to customize the material bottom navigation by wrapping your app in ",(0,o.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/getting-started.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Provider")," from ",(0,o.kt)("inlineCode",{parentName:"a"},"react-native-paper")),". A common use case for this can be to customize the background color for the screens when your app has a dark theme. Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/theming.html"},"instructions on ",(0,o.kt)("inlineCode",{parentName:"a"},"react-native-paper"),"'s documentation")," to learn how to customize the theme."))}m.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);