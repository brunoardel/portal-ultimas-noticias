(this["webpackJsonpportal-ultimas-noticias"]=this["webpackJsonpportal-ultimas-noticias"]||[]).push([[0],{30:function(e,t,a){e.exports=a(59)},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(27),r=a.n(i),c=a(9),l=a(10),s=a(13),m=a(12),u=a(11),d=a(1);function g(e){return o.a.createElement("header",{className:"blog-header py-3"},o.a.createElement("div",{className:"row flex-nowrap justify-content-between align-items-center"},o.a.createElement("div",{className:"col-4"},o.a.createElement("img",{src:e.logo,height:"40px",alt:"Logo"})),o.a.createElement("div",{className:"col-4 text-center"},o.a.createElement("a",{className:"blog-header-logo text-dark",href:"/"},e.titulo)),o.a.createElement("div",{className:"col-4"})))}function p(e){return o.a.createElement("div",{className:"nav-scroller py-1 mb-2"},o.a.createElement("nav",{className:"nav d-flex justify-content-between"},e.categorias.map((function(t,a){return o.a.createElement(u.b,{className:e.categoriaAtiva===t.url?"nav-link active p-2 text-muted":"nav-link p-2 text-muted",to:"/categoria/"+t.url,key:a},t.nome)}))))}var v=a(29),h=a.n(v),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).chaveAcesso="e75c4d8babcc1fda571d67ad6fcdfd5a",e.state={noticias:[]},e.style={corNomeOrigemNoticia:"#8DB5E9"},e}return Object(l.a)(a,[{key:"definirNoticias",value:function(){var e=this;if(navigator.onLine)h.a.get("https://gnews.io/api/v4/top-headlines?lang=pt&country=br&topic="+this.props.categoriaAtiva+"&token="+this.chaveAcesso).then((function(t){e.setState({noticias:t.data.articles}),localStorage.setItem("noticias_"+e.props.categoriaAtiva,JSON.stringify(t.data.articles))})).catch((function(e){console.log(e)}));else{this.setState({noticias:[]});var t=localStorage.getItem("noticias_"+this.props.categoriaAtiva);"undefined"!==typeof t&&null!==t&&this.setState({noticias:JSON.parse(t)})}}},{key:"componentDidUpdate",value:function(e){e.categoriaAtiva!==this.props.categoriaAtiva&&this.definirNoticias()}},{key:"componentDidMount",value:function(){this.definirNoticias()}},{key:"render",value:function(){var e=this;return this.state.noticias.length?o.a.createElement("div",{className:"row mb-2"},this.state.noticias.map((function(t,a){return o.a.createElement("div",{className:"col-md-6",key:"noticia_"+a},o.a.createElement("div",{className:"card flex-md-row mb-4 shadow-sm h-md-200"},o.a.createElement("div",{className:"card-body d-flex flex-column align-items-start"},o.a.createElement("strong",{className:"d-inline-block mb-2",style:{color:e.style.corNomeOrigemNoticia}},t.source.name),o.a.createElement("h4",{className:"mb-0"},o.a.createElement("a",{className:"text-dark",href:t.url,target:"_new"},t.title)))))}))):navigator.onLine?o.a.createElement("div",null,"Carregando..."):o.a.createElement("div",{class:"alert alert-warning",role:"alert"},"N\xe3o foi poss\xedvel carregar as not\xedcias dessa categoria :(")}}]),a}(n.Component);function E(e){var t="general";return"undefined"!==typeof e.match.params.categoria&&(t=e.match.params.categoria),o.a.createElement("div",{className:"container"},o.a.createElement(g,{titulo:"\xdaltimas Not\xedcias",logo:"./logo.png"}),o.a.createElement(p,{categorias:[{url:"breaking-news",nome:"Geral"},{url:"world",nome:"Mundo"},{url:"nation",nome:"Nacional"},{url:"business",nome:"Neg\xf3cios"},{url:"technology",nome:"Tecnologia"},{url:"entertainment",nome:"Entretenimento"},{url:"sports",nome:"Esportes"},{url:"science",nome:"Ci\xeancia"},{url:"health",nome:"Sa\xfade"}],categoriaAtiva:t}),o.a.createElement(f,{categoriaAtiva:t}))}a(58);var b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(u.a,{basename:"/portal-ultimas-noticias"},o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/categoria/:categoria",component:E}),o.a.createElement(d.b,{exact:!0,path:"/",component:E}),o.a.createElement(d.a,{to:"/portal-ultimas-noticias/"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.6b65b6fa.chunk.js.map