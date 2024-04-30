let url = "https://dog.ceo/api/breeds/image/random";


let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let link = await getImg();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    
    
})

async function getImg() {
    try{
        let res = await axios.get(url);
        alert("image generating")
        return res.data.message;
        
    }catch(e){
         return e
        console.log("image Not found");
    }
}
 