(()=>{"use strict";const e=function(){document.querySelector(".content-title").replaceChildren(),document.querySelector(".add-content").replaceChildren(),document.querySelector(".form-container").replaceChildren(),document.querySelector(".task-container").replaceChildren(),document.querySelector(".project-container").replaceChildren(),document.querySelector(".return-btn").replaceChildren()};let t=[];function n(e){document.querySelector("#submit").addEventListener("click",(function(n){n.preventDefault(),""!==document.querySelector("#task").value.trim()&&(function(e){const n=((e,t,n,o)=>({task:e,dueDate:t,priority:n,projectID:o}))(document.querySelector("#task").value,document.querySelector("#date").value,document.querySelector("#priority").value,e);t.push(n)}(e),o(e),function(){let e=document.querySelector("#task"),t=document.querySelector("#date");document.querySelector("#priority"),e.value="",t.value=""}(),document.querySelector(".form").style.display="none")}))}function o(e){let n=document.querySelector(".task-container");n.innerHTML="";const o=document.createElement("div");o.classList.add("content-title"),o.textContent="Tasks",n.appendChild(o);for(let o=0;o<t.length;o++){let r=t[o];if(r.projectID===e){let e=document.createElement("div");e.classList.add("taskList"),e.innerHTML=`<div class='task-content'>\n          <div class='task-detail'>\n              <input type="checkbox" id="task${o}" class="task">\n              <label for="task${o}">${r.task} | ${r.dueDate} | ${r.priority}</label>\n          </div>\n          <div class='task-buttons'>\n              <button class='remove-btn'>Remove</button>\n          </div>\n      </div>`,e.querySelector(".remove-btn").addEventListener("click",(function(){c(o)})),n.appendChild(e)}}!function(e){const n=document.querySelector(".task-container"),o=document.createElement("div");o.textContent="Yay, we have no tasks!",0===t.length&&n.appendChild(o)}()}function c(e){t.splice(e,1),o(document.querySelector(".content-title").textContent)}document.querySelector(".content-title").textContent;const r=function(){e(),document.querySelector(".content-title").textContent="Inbox";const t=document.querySelector(".add-content"),c=document.createElement("div");c.classList.add("addTask"),c.textContent="+ Add Task",t.appendChild(c),c.addEventListener("click",(function(){let e=document.querySelector(".form");e.style.display="block",document.querySelector(".cancel-btn").addEventListener("click",(function(){e.style.display="none"}))}));const r=document.querySelector(".form-container"),l=document.createElement("div");l.innerHTML='<form class="form" style="display: none;">\n            <div class="form-element">\n                <label for="task">Task:</label>\n                <input type="text" id="task" required >\n            </div>\n            <div class="form-element">\n                <label for="date">Due Date:</label>\n                <input type="date" id="date" required>\n            </div>\n            <div class="form-element">\n                <label for="priority">Priority:</label >\n                <select id="priority" required>\n                    <option value="Low">Low</option>\n                    <option value="Medium">Medium</option>\n                    <option value="High">High</option>\n                    </select>\n            </div>\n            <div class="form-element">\n                <input type="submit" id="submit" class="submit-btn" value="Submit">\n            </div>\n            <div class="form-element">\n                <button type="button" class="cancel-btn">Cancel</button>\n            </div>\n        </form>',r.appendChild(l);const i=document.querySelector(".content-title").textContent;n(i),o(i)},l=function(t){e(),document.querySelector(".return-btn").textContent="Return to Projects",document.querySelector(".return-btn").addEventListener("click",(function(){f()})),document.querySelector(".content-title").textContent=`${t.projectName}`;const c=document.querySelector(".add-content"),r=document.createElement("div");r.classList.add("addTask"),r.textContent="+ Add Task",c.appendChild(r),r.addEventListener("click",(function(){let e=document.querySelector(".form");e.style.display="block",document.querySelector(".cancel-btn").addEventListener("click",(function(){e.style.display="none"}))}));const l=document.querySelector(".form-container"),i=document.createElement("div");i.innerHTML='<form class="form" style="display: none;">\n        <div class="form-element">\n            <label for="task">Task:</label>\n            <input type="text" id="task" required >\n        </div>\n        <div class="form-element">\n            <label for="date">Due Date:</label>\n            <input type="date" id="date" required>\n        </div>\n        <div class="form-element">\n            <label for="priority">Priority:</label >\n            <select id="priority" required>\n                <option value="Low">Low</option>\n                <option value="Medium">Medium</option>\n                <option value="High">High</option>\n                </select>\n        </div>\n        <div class="form-element">\n            <input type="submit" id="submit" class="submit-btn" value="Submit">\n        </div>\n        <div class="form-element">\n            <button type="button" class="cancel-btn">Cancel</button>\n        </div>\n    </form>',l.appendChild(i);let d=document.querySelector(".content-title").textContent;n(d),o(d)},i={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let d;const u=new Uint8Array(16);function a(){if(!d&&(d="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!d))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return d(u)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));const m=function(e,t,n){if(i.randomUUID&&!t&&!e)return i.randomUUID();const o=(e=e||{}).random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return function(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}(o)};let p=[];function y(){let e=document.querySelector("#project").value;const t={projectName:e,projectId:m()};p.push(t),console.log(p),v(),document.querySelector("#project").value="",function(){let e=document.querySelector(".blank-project-tab"),t=document.createElement("div");t.classList.add("projectTabs");let n=document.createElement("div");e.appendChild(t);for(let e=0;e<p.length;e++){let o=p[e],c=o.projectName.replace(/\s/g,"");n.setAttribute("class",`${c}`),n.setAttribute("id",o.projectId),n.textContent=`+  ${o.projectName}`,t.appendChild(n),document.querySelector(`.${c}`).addEventListener("click",(function(){l(o)}))}}()}function v(){let e=document.querySelector(".project-container");e.innerHTML="";for(let t=0;t<p.length;t++){let n=p[t],o=document.createElement("div");o.classList.add("projectList"),o.innerHTML=`<div class='project-content'>\n                <div class='project-detail'>\n                    <div>${n.projectName}</div>\n                </div>\n                <div class='task-buttons'>\n                    <button class='remove-btn'>Remove</button>\n                    <button class='view-btn'>View Project</button>\n                </div>\n            </div>`,o.querySelector(".remove-btn").addEventListener("click",(function(){var e;e=t,p.splice(e,1),function(e){let t=document.querySelectorAll(".projectTabs");t.length>e&&t[e].remove()}(e),v()})),o.querySelector(".view-btn").addEventListener("click",(function(){l(n)})),e.appendChild(o)}!function(){const e=document.querySelector(".project-container"),t=document.createElement("div");t.classList.add("project-message"),t.textContent="No projects to display!",0===p.length&&e.appendChild(t)}()}const f=function(){e();const t=document.querySelector(".content-title"),n=document.createElement("div");n.textContent="Projects",t.appendChild(n);const o=document.querySelector(".add-content"),c=document.createElement("div");c.classList.add("addTask"),c.textContent="+ Add a Project",o.appendChild(c),c.addEventListener("click",(function(){let e=document.querySelector(".form");e.style.display="block",document.querySelector(".cancel-btn").addEventListener("click",(function(){e.style.display="none"}))}));const r=document.querySelector(".form-container"),l=document.createElement("div");l.innerHTML='<form class="form" style="display: none;">\n            <div class="form-element">\n                <label for="project">Project Name:</label>\n                <input type="text" id="project" required >\n            </div>\n            <div class="form-element">\n                <input type="submit" id="submit" class="submit-btn" value="Submit">\n                <button type="button" class="cancel-btn">Cancel</button>\n            </div>\n        </form>',r.appendChild(l),document.querySelector("#submit").addEventListener("click",(function(e){e.preventDefault(),""!==document.querySelector("#project").value.trim()&&y()})),v()};r(),document.querySelector(".inbox").addEventListener("click",r),document.querySelector(".projects").addEventListener("click",f)})();