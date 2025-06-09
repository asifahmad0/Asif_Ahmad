// ========================================== revil span create=======================================
function creatSpan(){
    
document.querySelectorAll(".revil").forEach((elem)=>{ 
    var spanPrarent = document.createElement("span");
    var spanChild = document.createElement("span");

    spanPrarent.classList.add('parent');
    spanChild.classList.add('child');

    spanChild.innerHTML=elem.innerHTML;
    spanPrarent.appendChild(spanChild);

    elem.innerHTML="";
    elem.appendChild(spanPrarent)

})
}
creatSpan()


// function textLoad(){
//   let text = document.getElementById("ocupation");
//   setTimeout(()=>{
//     text.textContent="Full stack Developer";
//   },0);
//   setTimeout(() => {
//         text.textContent = "Python Devloper";
//     }, 1000);
//   setTimeout(() => {
//         text.textContent = "AI/ML Devloper";
//     }, 2000);

// }
// textLoad()
// setInterval(textLoad,3500);


//==============================================Gsap======================================================
function AnimetLoader(){

  var t1 = gsap.timeline();

t1
  .from(" #loader .child span",{
    x: 100,
    opacity:0,
    stagger:.3,
    duration:1,
    ease: Power3.easeInOut
  })

  .to("#loader .parent .child",{
    y:"-100%",
    delay:.2,
    duration:1,
    ease:Circ.easeInOut
  })
  .to("#loader", {
    height:0,
    duration:2,
    ease: Expo.easeInOut
})

.to("#green", {
    height: "100%",
    duration:2,
    delay:-2,
    ease: Expo.easeInOut
})

.to("#white", {
    height: "100%",
    duration:2,
    delay:-1.8, 
    ease: Expo.easeInOut,
    onComplete: function(){
      //console.log("its working")
      AnimateHome()
    }
})

}

function AnimateHome(){
  let t2 = gsap.timeline()

  t2 
  .to("#nav a",{
    y:0,
    opacity:1,
    stagger:0.1,
    ease: Expo.easeInOut
  })
  .to("#home .home_contant .first_home_contant h1",{
    y:0,
    opacity:1,
    duration:1,
    ease: Expo.easeInOut
  })
  .to("#home .home_contant .sec_home_content h1",{
    y:0,
    opacity:1,
    duration:1,
    delay:-1,
    ease: Expo.easeInOut
  })
  .to("#home .home_contant .sec_home_content .arrow",{
    opacity:1,
    delay:-1,
    ease: Expo.easeInOut

  })
}
function document_cursor(){
document.addEventListener('mousemove',function(cevent){
  //console.log(cevent.clientX, cevent.clientY)
  document.getElementById('cursor1').style.transform=`translate(${cevent.clientX-10}px, ${cevent.clientY-15}px)`;
})
}




document.querySelectorAll('.work_ctn1, .work_ctn2').forEach(function(ctn){
   ctn.addEventListener('mousemove',function(dets){
     let text = document.getElementById("cursor1").style.opacity = 0;

    //console.log(dets.target.dataset.index)
    //console.log(document.querySelector('#cursor').children[dets.target.dataset.index])
    document.querySelector('#cursor').children[0].style.opacity=1;
    document.querySelector('#cursor').children[0].style.transform=`translate(${dets.clientX}px, ${dets.clientY}px)`;
    
   })
   ctn.addEventListener('mouseleave',(dets)=>{
    document.querySelector('#cursor').children[0].style.opacity=0;
    let text = document.getElementById("cursor1").style.opacity = 1;
   })
})

document_cursor()
AnimetLoader()
