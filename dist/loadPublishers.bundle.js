(()=>{const e=e=>{const n=function(){const e=new URL(window.location.href);return new URLSearchParams(e.search).get("slug")}(),s=e.results.findIndex((e=>e.slug===n));if(-1!==s){const n=document.getElementById("subtitle-publishers"),a=e.results[s];n.innerHTML=a.name;const t=document.getElementById("box-publishers-header");document.getElementById("background-publisher").setAttribute("src",a.image_background),a.games.map(((e,n)=>{const s=document.createElement("div");s.classList.add("col-md-4"),s.classList.add("col-lg-3"),s.innerHTML=`\n            <a href="../pages/game-info.html?slug=${e.slug}&id=${e.id}" class="box">\n                <div class="box-publishers-header m-2">\n                    <div class="info-publishers-header">\n                        <h2>${e.name}</h2>\n                    </div>\n                </div>\n            </a>\n        `,t.append(s)}))}else console.log("Slug não encontrado no array.")};window.addEventListener("load",(n=>{var s;s=e,fetch("https://api.rawg.io/api/publishers?key=975632c0c3dc4a3ba4ed3aab3a1d9b24").then((e=>e.json()),(e=>console.error(e))).then((e=>s(e)),(e=>console.error(e)))}))})();