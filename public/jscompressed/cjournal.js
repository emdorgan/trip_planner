const deleteJournalHandler=async a=>{if(a.target.hasAttribute("data-journal-id")&&"delete"===a.target.getAttribute("id")){const b=a.target.getAttribute("data-trip-id"),c=a.target.getAttribute("data-journal-id"),d=await fetch(`/api/journals/${c}`,{method:"DELETE"});d.ok?document.location.reload():alert("Failed to delete journal")}},addNewJournal=async a=>{a.preventDefault();const b=document.querySelector("#journal-title").value.trim(),c=document.querySelector("#journal-content").value.trim();if(b&&c){const a=document.getElementById("submit-entry").getAttribute("data-id"),d=await fetch(`/api/journals`,{method:"POST",body:JSON.stringify({title:b,content:c,trip_id:a}),headers:{"Content-Type":"application/json"}});d.ok?document.location.replace(`/trip/${a}/journal/`):alert("Failed to make new journal entry")}};document.querySelector(".add-journal").addEventListener("click",addNewJournal),document.querySelector(".my-journals").addEventListener("click",deleteJournalHandler);