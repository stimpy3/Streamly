
let vidNum=0;
const addVideo=()=>{
   console.log("add"); 
   document.querySelector("#mainVideoContainer").innerHTML+=`<article style=" border-radius:10px; overflow:hidden;background-color: var(--black); height: 300px;"
    id="${vidNum++}" class="videoContainer">
       <div style="width: 100%; height: 75%; background-color: var(--black);background-image: url('images/thumbnail.png'); background-size: contain; background-repeat: no-repeat;">
        
      </div>
       <section style="color:var(--text);  padding: 10px 10px;height: 25%;"><p><i class="fa-solid fa-circle-user"></i>&nbsp;Video description</p>
       <div style="display:flex; justify-content:space-between;margin-top:7px;">
      <p style="color:var(--text); width:fit-content;">Channel name</p> <p style="color:gray; width:fit-content;">-- Views</p>
       </div>
       </section>
   </article>`;
  };

let currentMode="dark";
const toggleMode=()=>{
    const root=document.documentElement; //used this to select html
    
   if(currentMode=="dark"){
    currentMode="light";
     root.classList.add("lightTheme");
     console.log(currentMode);
   }
   else if(currentMode=="light"){
    currentMode="dark";
    root.classList.remove("lightTheme");
    console.log(currentMode);
   }
}