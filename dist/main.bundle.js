(()=>{const e=(e,n)=>{fetch(e).then((e=>e.json()),(e=>console.error(e))).then((e=>n(e)),(e=>console.error(e)))},n=e=>{console.log(e);const n=document.getElementById("box-news-header"),s=document.getElementsByClassName("box-news-header");e.results.slice(0,6).map(((e,a)=>{const o=document.createElement("div");o.classList.add("col-md-4"),o.innerHTML=`\n            <a href="../pages/publishers.html?slug=${e.slug}" class="box">\n                <div class="box-news-header m-2">\n                    <div class="info-news-header">\n                        <h2>${e.name}</h2>\n                    </div>\n                </div>\n            </a>\n        `,n.append(o),s[a].style.backgroundImage=`url("${e.image_background}")`}))},s=e=>{const n=document.getElementById("box-news-body"),s=document.getElementsByClassName("box-news-body");e.results.slice(0,4).map(((e,a)=>{const o=document.createElement("div");o.classList.add("col-md-6"),o.innerHTML=`\n            <a href="../pages/tags.html?slug=${e.slug}" class="box">\n                <div class="box-news-body m-2">\n                    <div class="info-news-body">\n                        <h2>${e.name}</h2>\n                    </div>\n                </div>\n            </a>\n        `,n.append(o),s[a].style.backgroundImage=`url("${e.image_background}")`}))};window.addEventListener("load",(a=>{const o="975632c0c3dc4a3ba4ed3aab3a1d9b24",d="https://api.rawg.io/api/tags?key="+o;e("https://api.rawg.io/api/publishers?key="+o,n),e(d,s)}))})();