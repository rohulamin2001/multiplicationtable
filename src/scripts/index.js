
const updatedNo = document.getElementsByClassName("updated-no");
const select = document.querySelector("select");
const resultNo = document.getElementsByClassName("result")

select.addEventListener("change", function (e) {

    const value = JSON.parse(e.target.value);

    [...updatedNo].forEach((v,i) => {
        v.innerHTML = value
    });
    
    [...resultNo].forEach((v,i) =>{

        v.innerHTML = value*(i+1)
    })

})

