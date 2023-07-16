let x = document.getElementById("hamburger-scroll");

function hamburgerimg() {

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }



}
let object = [{
  profileimage: "./images/Userpic.png",
  semicolonimage:"./images/Twitter.png",
  content: "Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
  Name: "Katherine Bishop",
  Twitterimage: "./images/twitterpic.png",
  Facebookimage: "./images/Facebook.png",
  
},
{
  profileimage: "./images/Userpic.png",
  semicolonimage: "./images/Twitter.png",
  content: "Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
  Name: "Katherine Bishop",
  Twitterimage: "./images/twitterpic.png",

  Facebookimage:"./images/Facebook.png",
  

},
{
  profileimage:"./images/Userpic.png",
  semicolonimage: "./images/Twitter.png",
  content: "Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
  Name: "Katherine Bishop",
  Twitterimage: "./images/twitterpic.png",
  Facebookimage: "./images/Facebook.png",
  
},
{
  profileimage: "./images/Userpic.png",
  semicolonimage: "./images/Twitter.png",
  content: "Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
  Name: "Katherine Bishop",
  Twitterimage: "./images/twitterpic.png",
  Facebookimage: "./images/Facebook.png",
  
  
}];
console.log(object);
  let display=" ";
  for(let i=0;i<object.length;i++)
  {
    display+="<div class='scroll-tags'>" ;
    display+="<div class='scroll-tag1'> <div class='profile'>";
    display+="<img src="+object[i].profileimage+"> </div>" ;
    display+="<div class='side-content'>";
    display+="<img src="+object[i].semicolonimage+">";
    display+="<p>"+object[i].content+"</p>";
    display+="<div class='side-content1'>  <div class='side-content-heading'>";
    display+="<h4>"+object[i].Name+"</h4> </div>";
    display+="<div class='side-content-pic'>";
    display+="<img src="+object[i].Twitterimage+">";
    display+="<img src="+object[i].Facebookimage+"></div>    </div> </div> </div> </div>" ;
  }
  document.getElementById("scroll").innerHTML=display;
    
  
var modal = document.getElementById("myModal");
var btn = document.getElementById("button");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }


}
  var myuser = document.getElementById("email");

const modalcontent = document.getElementsByClassName("modal-content");
console.log(modalcontent);
var pattern = /\S+@\S+\.\S+/g;
const uname = document.getElementById("error");
console.log(uname);
const err = document.querySelector(".err-msg");
const para = err.nextElementSibling;

function popup() {
  const res = pattern.test(myuser.value);
  if (res == true) {
    modal.style.display = "block";
    uname.innerText = myuser.value;
    err.innerText = "";
    para.style.display = "block";
  } else {
    uname.innerText = "";
    modal.style.display = "block";
    err.innerText = "Invalid Email!! Please try again";
    para.style.display = "none";
  }
}