const deletePacklistHandler=async a=>{if(a.target.hasAttribute("data-packlist-id")&&"delete"===a.target.getAttribute("id")){const b=a.target.getAttribute("data-trip-id"),c=a.target.getAttribute("data-packlist-id");console.log(b),console.log(c);const d=await fetch(`/api/packlists/${c}`,{method:"DELETE"});d.ok?document.location.reload():alert("Failed to delete packing list")}},addNewList=async a=>{a.preventDefault();const b=document.querySelector("#packlist-items").value.trim();if(b){const a=document.getElementById("submit-entry").getAttribute("data-id"),c=await fetch(`/api/packlists`,{method:"POST",body:JSON.stringify({items:b,trip_id:a}),headers:{"Content-Type":"application/json"}});c.ok?document.location.replace(`/trip/${a}/packlist/`):alert("Failed to make new list")}};document.querySelector(".my-packlist").addEventListener("click",deletePacklistHandler),document.querySelector(".add-list").addEventListener("click",addNewList);