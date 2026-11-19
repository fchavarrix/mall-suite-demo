import{S as e,_ as t,a as n,b as r,c as i,i as a,n as o,o as s,s as c,x as l}from"./sim-DCLvUt8G.js";import{t as u}from"./zeppelin-Bj4mvcpK.js";var d=e=>document.querySelector(e),f,p;function m(e){let t=e.kind===`disponible`;return`${e.logo?`<span class="logo${e.dark?` dark`:``}"><img src="${e.logo}" alt=""></span>`:`<span class="logo initials">${t?`＋`:e.name.slice(0,2)}</span>`}<span class="who"><b>${t?`Local ${e.unit} · disponible`:e.name}</b><small>${t?`${e.area} m²`:e.category} · ${f.venue.floorShort(e.floor)} · Local ${e.unit}</small></span>`}function h(e){p&&f.paint(p),p=e;let t=d(`#selected`);if(!e){t.hidden=!0;return}f.paint(e,l.selected),f.mapView.currentFloor.id!==e.floor.id&&f.setFloor(e.floor),f.mapView.Camera.focusOn(e.space,{maxZoomLevel:19.5,duration:600});let n=e.kind===`real`?`Marca real (ilustrativa)`:e.kind===`ficticia`?`Nombre ficticio`:`Para alquilar`;t.innerHTML=`<div class="row">${m(e)}</div><p class="meta">${n} · ${s(e.area)} m² · ${f.venue.floorName(e.floor)}</p>`,t.hidden=!1}function g(e=``){let t=e=>e.normalize(`NFD`).replace(/\p{M}/gu,``).toLowerCase(),n=t(e.trim()),r=f.venue.stores.filter(e=>!n||t(`${e.name} ${e.category} ${e.unit}`).includes(n)).sort((e,t)=>Number(t.anchor)-Number(e.anchor)||Number(t.kind===`real`)-Number(e.kind===`real`)||e.name.localeCompare(t.name,`es`)).slice(0,40),i=d(`#results`);i.innerHTML=``;for(let e of r){let t=document.createElement(`li`),n=document.createElement(`button`);n.type=`button`,n.className=`row`,n.innerHTML=m(e),n.addEventListener(`click`,()=>h(e)),t.append(n),i.append(t)}d(`#count`).textContent=r.length===40?`Primeros 40`:`${r.length} resultado${r.length===1?``:`s`}`}function _(){let n=f.venue,i=o(n),c=n.stores.filter(e=>e.kind===`real`).length,l=n.stores.filter(e=>e.kind===`disponible`).length,u=t.filter(e=>!e.internal);d(`#panel`).innerHTML=`
    <section class="hero">
      <p class="kicker">${e}</p>
      <h1>${r.name}</h1>
      <p class="lead">${r.tagline}. Un mismo mapa vivo para el visitante, Leasing, Seguridad y Gerencia.</p>
      <div class="kpis">
        <div><b>${s(i.totals.visits)}</b><small>visitas en 30 días*</small></div>
        <div><b>${n.stores.length}</b><small>locales en ${n.floors.length} pisos</small></div>
        <div><b>${c}</b><small>marcas reales</small></div>
        <div><b>${l}</b><small>locales disponibles</small></div>
      </div>
      <p class="fine">* Datos simulados con una semilla fija: todas las apps cuentan la misma historia.</p>
    </section>
    <section>
      <h2><img class="x" src="/brand/simbolo-x.svg" alt="">Apps de la suite</h2>
      <ul class="apps">${u.map(e=>{let t=`<span class="ic" aria-hidden="true">${e.icon}</span><span><b>${e.name}</b><small>${e.pitch}</small></span><em>${e.ready?`Abrir →`:`Próximamente`}</em>`;return e.ready?`<li><a href="/apps/${e.id}/">${t}</a></li>`:`<li class="soon">${t}</li>`}).join(``)}</ul>
    </section>
    <section>
      <h2><img class="x" src="/brand/simbolo-x.svg" alt="">Directorio</h2>
      <label class="search"><span aria-hidden="true">⌕</span><input id="q" type="search" placeholder="Busca «pollo», «Saga» o «1045»" autocomplete="off"></label>
      <div id="selected" class="selected" hidden></div>
      <p class="count" id="count"></p>
      <ul class="results" id="results"></ul>
    </section>
    <p class="ak-note-inline">${a}</p>`,d(`#q`).addEventListener(`input`,e=>g(e.target.value)),g()}async function v(){c({title:`Inicio`}),f=await i(d(`#map`)),n(f),_(),f.mapView.on(`click`,e=>{let t=e.spaces?.map(e=>f.venue.bySpace.get(e.id)).find(Boolean);h(t)}),new URLSearchParams(location.search).get(`zeppelin`)!==`0`&&u(f.mapView,f.venue,d(`#map`)),d(`#loading`).remove()}v().catch(e=>{console.error(e),d(`#loading`).innerHTML=`<p>No se pudo abrir el mapa. Revisa la conexión y recarga.</p>`});