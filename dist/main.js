(()=>{"use strict";const e=function(){document.querySelector(".content-title").replaceChildren(),document.querySelector(".add-content").replaceChildren(),document.querySelector(".form-container").replaceChildren(),document.querySelector(".task-container").replaceChildren(),document.querySelector(".project-container").replaceChildren()};let t=[];function n(){let e=document.querySelector(".task-container");e.innerHTML="";const o=document.createElement("div");o.classList.add("content-title"),o.textContent="Tasks",e.appendChild(o);for(let o=0;o<t.length;o++){let c=t[o],l=document.createElement("div");l.classList.add("taskList"),l.innerHTML=`<div class='task-content'>\n                    <div class='task-detail'>\n                        <input type="checkbox" id="task${o}" class="task">\n                        <label for="task${o}">${c.task} | ${c.dueDate} | ${c.priority}</label>\n                    </div>\n                    <div class='task-buttons'>\n                        <button class='remove-btn'>Remove</button>\n                    </div>\n                </div>`,l.querySelector(".remove-btn").addEventListener("click",(function(){var e;e=o,t.splice(e,1),n()})),e.appendChild(l)}console.log(task.task),function(){console.log("hello");const e=document.querySelector(".task-container"),n=document.createElement("div");n.textContent="Yay, we have no tasks!";const o=document.createElement("div");o.textContent="Yay, we finished our tasks!",0===t.length?e.appendChild(n):0===document.querySelectorAll(".task:checked").length&&document.querySelectorAll(".task").forEach((t=>{t.addEventListener("change",(()=>{e.appendChild(o)}))}))}()}const o=function(){e();const o=document.querySelector(".content-title"),c=document.createElement("div");c.textContent="Inbox",o.appendChild(c);const l=document.querySelector(".add-content"),r=document.createElement("div");r.classList.add("addTask"),r.textContent="+ Add Task",l.appendChild(r),r.addEventListener("click",(function(){let e=document.querySelector(".form");e.style.display="block",document.querySelector(".cancel-btn").addEventListener("click",(function(){e.style.display="none"}))}));const d=document.querySelector(".form-container"),i=document.createElement("div");i.innerHTML='<form class="form" style="display: none;">\n            <div class="form-element">\n                <label for="task">Task:</label>\n                <input type="text" id="task" required >\n            </div>\n            <div class="form-element">\n                <label for="date">Due Date:</label>\n                <input type="date" id="date" required>\n            </div>\n            <div class="form-element">\n                <label for="priority">Priority:</label >\n                <select id="priority" required>\n                    <option value="Low">Low</option>\n                    <option value="Medium">Medium</option>\n                    <option value="High">High</option>\n                    </select>\n            </div>\n            <div class="form-element">\n                <input type="submit" id="submit" class="submit-btn" value="Submit">\n            </div>\n            <div class="form-element">\n                <button type="button" class="cancel-btn">Cancel</button>\n            </div>\n        </form>',d.appendChild(i),document.querySelector("#submit").addEventListener("click",(function(e){e.preventDefault(),""!==document.querySelector("#task").value.trim()&&(function(){const e={task:document.querySelector("#task").value,dueDate:document.querySelector("#date").value,priority:document.querySelector("#priority").value};t.push(e)}(),n(),function(){let e=document.querySelector("#task"),t=document.querySelector("#date");document.querySelector("#priority"),e.value="",t.value=""}(),document.querySelector(".form").style.display="none")})),n()};let c=[];function l(){let e=document.querySelector(".project-container");e.innerHTML="";for(let t=0;t<c.length;t++){let n=c[t],o=document.createElement("div");o.classList.add("projectList"),o.innerHTML=`<div class='project-content'>\n                <div class='project-detail'>\n                    <div>${n.projectName}</div>\n                </div>\n                <div class='task-buttons'>\n                    <button class='remove-btn'>Remove</button>\n                    <button class='view-btn'>View Project</button>\n                </div>\n            </div>`,o.querySelector(".remove-btn").addEventListener("click",(function(){var e;e=t,c.splice(e,1),function(e){let t=document.querySelectorAll(".projectTabs");t.length>e&&t[e].remove()}(e),l()})),e.appendChild(o)}!function(){const e=document.querySelector(".project-container"),t=document.createElement("div");t.classList.add("project-message"),t.textContent="No projects to display!",0===c.length&&e.appendChild(t)}()}const r=function(){e();const t=document.querySelector(".content-title"),n=document.createElement("div");n.textContent="Projects",t.appendChild(n);const o=document.querySelector(".add-content"),r=document.createElement("div");r.classList.add("addTask"),r.textContent="+ Add a Project",o.appendChild(r),r.addEventListener("click",(function(){let e=document.querySelector(".form");e.style.display="block",document.querySelector(".cancel-btn").addEventListener("click",(function(){e.style.display="none"}))}));const d=document.querySelector(".form-container"),i=document.createElement("div");i.innerHTML='<form class="form" style="display: none;">\n            <div class="form-element">\n                <label for="project">Project Name:</label>\n                <input type="text" id="project" required >\n            </div>\n            <div class="form-element">\n                <input type="submit" id="submit" class="submit-btn" value="Submit">\n                <button type="button" class="cancel-btn">Cancel</button>\n            </div>\n        </form>',d.appendChild(i),document.querySelector("#submit").addEventListener("click",(function(e){e.preventDefault(),""!==document.querySelector("#project").value.trim()&&function(){const e={projectName:document.querySelector("#project").value};c.push(e),console.log(c),l(),document.querySelector("#project").value="",function(){let e=document.querySelector(".blank-project-tab"),t=document.createElement("div");t.classList.add("projectTabs");let n=document.createElement("div");n.classList.add("project-title"),e.appendChild(t);for(let e=0;e<c.length;e++){let o=c[e];n.textContent=`+  ${o.projectName}`,t.appendChild(n)}}()}()})),l()};o(),document.querySelector(".inbox").addEventListener("click",o),document.querySelector(".projects").addEventListener("click",r)})();