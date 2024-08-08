const calculate = () => {
    // Getting input from user
    let m2 = document.querySelector("#name").value; 
    let m1 = document.querySelector("#scoremid").value; 
    let m3 = document.querySelector("#scorelast").value; 

    document.querySelector("#showdata").innerHTML = `Name is ${m3} Score sum is ${m1 + m2}`
}