webpackJsonp([1],{194:function(e,t,r){"use strict";function n(e){return{type:f.AUTH_ERROR,payload:e}}function a(e,t,r,a){var u=e.email,o=e.password;return function(e){c.default.post(m+"/"+t,{client_id:p.CLIENT_ID,client_secret:p.CLIENT_SECRET,username:u,password:o,grant_type:"password"}).then(function(t){if(e({type:f.AUTH_USER}),a){var r=t.data,n=r.access_token,u=r.refresh_token;localStorage.setItem(d.ACCESS_TOKEN,n),localStorage.setItem(d.REFRESH_TOKEN,u)}s.hashHistory.push("/feature")}).catch(function(t){var a=t.response;e(n(r||a.data.error))})}}function u(e,t){return a({email:e.email,password:e.password},"oauth/token","Wrong email or password.",t)}function o(){return localStorage.removeItem(d.ACCESS_TOKEN),{type:f.UNAUTH_USER}}function l(e){return{type:f.SET_LNG,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.authError=n,t.signinUser=u,t.signoutUser=o,t.changeLanguage=l;var i=r(195),c=function(e){return e&&e.__esModule?e:{default:e}}(i),s=r(48),f=r(66),d=r(201),p=r(416),m="http://s1.teachbase.ru/mobile/v1"},201:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ACCESS_TOKEN="access_token",t.REFRESH_TOKEN="refresh_token"},254:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=r(0),o=n(u),l=r(144),i=n(l),c=r(15),s=r(39),f=r(48),d=r(193),p=n(d);r(395);var m=r(396),v=n(m),h=r(397),b=n(h),y=r(585),E=n(y),g=r(586),O=n(g),_=r(587),N=n(_),S=r(590),T=n(S),j=r(592),w=n(j),A=r(66),R=r(201);r(595),r(596);var M=(0,s.applyMiddleware)(p.default)(s.createStore),H=M(w.default);localStorage.getItem(R.ACCESS_TOKEN)&&H.dispatch({type:A.AUTH_USER});var P=[{id:"ru",title:"Русский"},{id:"en",title:"English"}],k=[{provider:"facebook"},{provider:"vk"},{provider:"yandex"},{provider:"google-plus"}],U=function(e){return o.default.createElement("div",null,o.default.createElement(N.default,null),o.default.createElement(b.default,a({minLength:6,socials:k,withSocials:!0},e)),o.default.createElement(T.default,{languages:P}))};i.default.render(o.default.createElement(c.Provider,{store:H},o.default.createElement(f.Router,{history:f.hashHistory},o.default.createElement(f.Route,{path:"/",component:v.default},o.default.createElement(f.IndexRoute,{component:(0,O.default)(E.default)}),o.default.createElement(f.Route,{path:"signin",component:U}),o.default.createElement(f.Route,{path:"feature",component:(0,O.default)(E.default)})))),document.querySelector(".container"))},395:function(e,t){},396:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),u=n(a),o=r(7),l=n(o),i=function(e){return u.default.createElement("div",null,e.children)};i.propTypes={children:l.default.node.isRequired},t.default=i},397:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return{errorMessage:e.auth.error}}Object.defineProperty(t,"__esModule",{value:!0}),t.Signin=void 0;var u=r(0),o=n(u),l=r(7),i=n(l),c=r(15),s=r(194),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(s),d=r(417),p=n(d),m=r(419),v=n(m),h=r(420),b=n(h);r(584);var y=t.Signin=function(e){return o.default.createElement(p.default,{header:"Login"},e.withSocials&&o.default.createElement(v.default,e),o.default.createElement(b.default,e))};y.propTypes={withSocials:i.default.bool},y.defaultProps={withSocials:!1},t.default=(0,c.connect)(a,f)(y)},416:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CLIENT_ID="4ee04bb23c72ffba350ddf710930274c9980606ec30057a4c4dd07a20811ba47",t.CLIENT_SECRET="020f889c78f8fdf8b1f15d0d15bd0b26931ccb4850ed07a707ec9ae90b67ebf7"},417:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),u=n(a),o=r(7),l=n(o);r(418);var i=function(e){var t=e.children,r=e.header;return u.default.createElement("div",{className:"form-block"},u.default.createElement("h1",{className:"header text-center"},r),t)};i.propTypes={children:l.default.node.isRequired,header:l.default.string.isRequired},t.default=i},418:function(e,t){},419:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),u=n(a),o=r(7),l=n(o),i=function(e){var t=e.socials;return u.default.createElement("div",{className:"socials-auth-block d-flex flex-column"},u.default.createElement("h6",{className:"text-muted text-center"},"with"),u.default.createElement("div",{className:"socials"},t.map(function(e){var t=e.provider;return u.default.createElement("button",{key:t,className:"social border rounded "+t},u.default.createElement("i",{className:"fa fa-"+t}))})))};i.propTypes={socials:l.default.arrayOf(l.default.object).isRequired},t.default=i},420:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),s=n(c),f=r(48),d=r(113),p=r(7),m=n(p),v=function(e){return e?void 0:"Required"},h=function(e){return function(t){return t&&t.length<e?"Must be "+e+" characters or more":void 0}},b=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},y=function(e){function t(){var e,r,n,o;a(this,t);for(var i=arguments.length,c=Array(i),d=0;d<i;d++)c[d]=arguments[d];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.handleFormSubmit=function(e){var t=e.email,r=e.password,a=e.remember;n.props.signinUser({email:t,password:r},a)},n.minLength=function(e){return h(n.props.minLength)(e)},n.renderEmail=function(e){var t=e.input,r=e.label,n=e.type,a=e.placeholder,u=e.meta,o=u.touched,i=u.error;return s.default.createElement("fieldset",{key:r,className:"form-group"},s.default.createElement("label",{className:"text-muted"},r),s.default.createElement("input",l({},t,{placeholder:a,type:n,className:"form-control"})),o&&i&&s.default.createElement("div",{className:"error"},i))},n.renderPassword=function(e){var t=e.input,r=e.label,n=e.type,a=e.placeholder,u=e.meta,o=u.touched,i=u.error;return s.default.createElement("fieldset",{key:r,className:"form-group"},s.default.createElement("div",{className:"d-flex justify-content-between"},s.default.createElement("label",{className:"text-muted"},r),s.default.createElement(f.Link,{className:"reset-password",to:"\\reset"},"Forgot your password?")),s.default.createElement("input",l({},t,{placeholder:a,type:n,className:"form-control"})),o&&i&&s.default.createElement("div",{className:"error"},i))},n.renderRemember=function(e){var t=e.input,r=e.label,n=e.type;return s.default.createElement("label",{className:"remember checkbox-inline"},s.default.createElement("input",l({},t,{type:n})),r)},o=r,u(n,o)}return o(t,e),i(t,[{key:"renderAlert",value:function(){var e=this.props.errorMessage;return e?s.default.createElement("div",{className:"alert alert-danger"},s.default.createElement("strong",null,"Ooops!")," ",e):null}},{key:"render",value:function(){var e=this.props,t=e.handleSubmit,r=e.submitting;return s.default.createElement("form",{className:"signin d-flex flex-column",onSubmit:t(this.handleFormSubmit)},s.default.createElement(d.Field,{name:"email",type:"email",component:this.renderEmail,label:"Email",placeholder:"test@example.com",validate:[v,this.minLength,b]}),s.default.createElement(d.Field,{name:"password",type:"password",component:this.renderPassword,label:"Password",placeholder:"Qwerty123",validate:[v,this.minLength]}),s.default.createElement(d.Field,{name:"remember",type:"checkbox",component:this.renderRemember,label:"Remember me"}),s.default.createElement("button",{action:"submit",className:"btn btn-success text-uppercase signin",disabled:r},"Login"),this.renderAlert())}}]),t}(c.Component);y.propTypes={signinUser:m.default.func.isRequired,minLength:m.default.number,errorMessage:m.default.string,handleSubmit:m.default.func.isRequired,submitting:m.default.bool.isRequired},y.defaultProps={minLength:5,errorMessage:""},t.default=(0,d.reduxForm)({form:"signin"})(y)},584:function(e,t){},585:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),u=function(){return a.default.createElement("div",null,"Protected Resources")};t.default=u},586:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.default=function(e){function t(e){return{authenticated:e.auth.authenticated}}var r=function(t){function r(){return a(this,r),u(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return o(r,t),l(r,[{key:"componentWillMount",value:function(){this.checkAuth(this.props.authenticated)}},{key:"componentWillUpdate",value:function(e){this.checkAuth(e.authenticated)}},{key:"checkAuth",value:function(e){e||this.context.router.push("/signin")}},{key:"render",value:function(){return c.default.createElement(e,this.props)}}]),r}(i.Component);return r.contextTypes={router:f.default.object},r.propTypes={authenticated:f.default.bool},r.defaultProps={authenticated:!1},(0,d.connect)(t)(r)};var i=r(0),c=n(i),s=r(7),f=n(s),d=r(15)},587:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),u=n(a),o=r(588),l=n(o);r(589);var i=function(){return u.default.createElement("div",{className:"logo"},u.default.createElement("img",{src:l.default,alt:"logo"}))};t.default=i},588:function(e,t){e.exports="data:image/png;base64,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"},589:function(e,t){},590:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LanguageSwitcher=void 0;var a=r(0),u=n(a),o=r(15),l=r(48),i=r(7),c=n(i),s=r(194),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(s);r(591);var d=t.LanguageSwitcher=function(e){var t=e.languages,r=e.active,n=e.changeLanguage;return u.default.createElement("ul",{className:"lng"},t.map(function(e,a){var o=e.title,i=e.id;return u.default.createElement("li",{key:i},u.default.createElement(l.Link,{onClick:function(){n(i)},className:i===r?"active":""},o),a===t.length-1?"":"|")}))};d.propTypes={languages:c.default.arrayOf(c.default.object).isRequired,active:c.default.string.isRequired,changeLanguage:c.default.func.isRequired};var p=function(e){return{active:e.language.current}};t.default=(0,o.connect)(p,f)(d)},591:function(e,t){},592:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(39),u=r(113),o=r(593),l=n(o),i=r(594),c=n(i),s=(0,a.combineReducers)({form:u.reducer,auth:l.default,language:c.default});t.default=s},593:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case a.AUTH_USER:return n({},e,{authenticated:!0,error:null});case a.UNAUTH_USER:return n({},e,{authenticated:!1,error:null});case a.AUTH_ERROR:return n({},e,{authenticated:!1,error:t.payload});default:return e}};var a=r(66)},594:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case a.SET_LNG:return n({},e,{current:t.payload});default:return e}};var a=r(66),u={current:"en"}},595:function(e,t){},596:function(e,t){},66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.AUTH_USER="AUTH_USER",t.UNAUTH_USER="UNAUTH_USER",t.AUTH_ERROR="AUTH_ERROR",t.SET_LNG="SET_LNG"}},[254]);