fetch("stdDetails.json")
.then(function(response){
   return response.json();
})
.then(function(stdDetails){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let stdDetails of stdDetails){
      out += `
         <tr>
            <td>  ${stdDetails.id}</td>
            <td> ${stdDetails.usn}</td>
            <td>${stdDetails.name}</td>
            <td>${stdDetails.email}</td>
            <td>${stdDetails.branch}</td>
            <td>${stdDetails.semester}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});
