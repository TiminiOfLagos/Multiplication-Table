// NUNMBER DECLARATON

const multiplicationIndex = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

//NESTED LOOP DECLARATION (FOR OF & FOR LOOP)

for (const i of multiplicationIndex) {
  for (let index = 1; index <= 12; index++) {
    console.log(`${i} x ${index} = ${i * index}`);
  }
}

const table = document.createElement("table")

const headerRow = table.insertRow();

headerRow.innerHTML = `
    <tr>
        <th> 1 </th>
        <th> 2 </th>
        <th> 3 </th>
        <th> 4 </th>
        <th> 5 </th>
        <th> 6 </th>
        <th> 7 </th> 
        <th> 8 </th>
        <th> 9 </th>
        <th> 10 </th>
        <th> 11 </th>
        <th> 12 </th>
        <th> 13 </th>
        <th> 14 </th>
        <th> 15 </th>
        <th> 16 </th>
        <th> 17 </th> 
        <th> 18 </th>
        <th> 19 </th>
        <th> 20 </th>  
    <tr>
    `

    multiplicationIndex.map((items)=>{
      const tableRow= table.insertRow()
      tableRow.innerHTML =`<tr>
             
         </tr>
 `
  })

   
    document.body.appendChild(table)

    
 