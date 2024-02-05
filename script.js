fetch("stdDetails.json")
.then(function(response){
   return response.json();
})
.then(function(stdDetails){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let stdDetail of stdDetails){
      out += `
         <tr>
            <td>  ${stdDetail.id}</td>
            <td> ${stdDetail.usn}</td>
            <td>${stdDetail.name}</td>
            <td>${stdDetail.email}</td>
            <td>${stdDetail.branch}</td>
            <td>${stdDetail.semester}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});
