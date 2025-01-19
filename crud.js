let fetchData = async () => {
  let url =`http://localhost:3000/Booking`;

    let res = await fetch(url, { method: "GET" });
    
    let data = await res.json();
    console.log(data);

    let show = document.querySelector("#showData");
   // data.map((e) => {
      // show.innerHTML += `
      //           <div style="border: 1px solid black; padding: 10px; margin: 10px;">
      //               <h2>Name: ${e.Name}</h2>
      //               <p>Age: ${e.Age}</p>
      //               <p>Checking In: ${e["Cheaking In"]}</p>
      //               <p>Check Out: ${e["Cheak Out"]}</p>
      //               <p>Phone Number: ${e["Phone Number"]}</p>
      //               <p>Members: ${e.Member}</p>
      //           </div>
      //       `;
      data.map((e)=>{
        show.innerHTML += `
        <tr>
        <td>${e.Name}</td>
        <td>${e.Age}</td>
        <td>${e.Cheaking_In}</td>
        <td>${e.Cheak_Out}</td>
        <td>${e.Phone_Number}</td>
        <td>${e.Member}</td>
        <td onclick="deletee(${e.id})">Delete</td>
        </tr>
        `;
      })
    };
  

let deletee=(id)=>{
 let url = `http://localhost:3000/Booking/${id}`;
 fetch(url,{method:"DELETE"});
}