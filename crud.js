let fetchData = async () => {
  let url =`http://localhost:3000/Booking`;
  try {
    let res = await fetch(url, { method: "GET" });
    if (!res.ok) throw new Error("Failed to fetch data");
    let data = await res.json();
    console.log(data);

    let show = document.querySelector("#showData");
    data.map((e) => {
      show.innerHTML += `
                <div style="border: 1px solid black; padding: 10px; margin: 10px;">
                    <h2>Name: ${e.Name}</h2>
                    <p>Age: ${e.Age}</p>
                    <p>Checking In: ${e["Cheaking In"]}</p>
                    <p>Check Out: ${e["Cheak Out"]}</p>
                    <p>Phone Number: ${e["Phone Number"]}</p>
                    <p>Members: ${e.Member}</p>
                </div>
            `;
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
};
