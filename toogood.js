function videoconAnimation(){
    var buyb = document.querySelector(".imcontainer")
var bbtn = document.querySelector(".imcontainer .pbuy")

buyb.addEventListener("mouseenter", function(){
    gsap.to(bbtn,{
        scale:1 ,
        opacity:1,
    })

})
buyb.addEventListener("mouseleave", function(){
    gsap.to(bbtn,{
        scale:0 ,
        opacity:0,
    })

})
buyb.addEventListener("mousemove", function(dets){
    
    bbtn.style.left=dets.x +"px" ;
    bbtn.style.top=dets.y  +"px" ;
    // gsap.to(bbtn,{
    //     left:details.x,
    //     top:dets.y ,
    // })

})
};

videoconAnimation()

function loadingAnimation(){
    gsap.from(".page1 h1",{
        y:70,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.1
    })
    gsap.from(".page1 .imcontainer",{
        scale:0.9,
        opacity:0,
        delay:0.3,
        duration:0.8,
        
    })
};
loadingAnimation()
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

document.addEventListener("mousemove",function(dets){
    gsap.to(".cursr",
    {
        left:dets.x,
        top:dets.y
    })
})
 document.querySelector("#child2").addEventListener("mouseenter",function(){
    gsap.to(".cursr",{
        transform: 'translate(-50% , -50%) scale(1)'
    })

 })
 document.querySelector("#child2").addEventListener("mouseleave",function(){
    gsap.to(".cursr",{
        transform: 'translate(-50% , -50%) scale(0)'
    })

 })
  document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to(".cursr",{
        transform: 'translate(-50% , -50%) scale(1)'
    })

 })
 document.querySelector("#child1").addEventListener("mouseleave",function(){
    gsap.to(".cursr",{
        transform: 'translate(-50% , -50%) scale(0)'
    })

 })
 document.querySelector("#child3").addEventListener("mouseenter",function(){
    gsap.to(".cursr",{
        transform: 'translate(-50% , -50%) scale(1)'
    })

 })
 document.querySelector("#child3").addEventListener("mouseleave",function(){
    gsap.to(".cursr",{
        transform: 'translate(-50% , -50%) scale(0)'
    })

 })
 document.querySelector("#child4").addEventListener("mouseenter",function(){
    gsap.to(".cursr",{
        transform: 'translate(-50% , -50%) scale(1)'
    })

 })
 document.querySelector("#child4").addEventListener("mouseleave",function(){
    gsap.to(".cursr",{
        transform: 'translate(-50% , -50%) scale(0)'
    })

 })
 document.querySelector("#child5").addEventListener("mouseenter",function(){
    gsap.to(".cursr",{
        transform: 'translate(-50% , -50%) scale(1)'
    })

 })
 document.querySelector("#child5").addEventListener("mouseleave",function(){
    gsap.to(".cursr",{
        transform: 'translate(-50% , -50%) scale(0)'
    })

 })
 document.querySelector("#child6").addEventListener("mouseenter",function(){
    gsap.to(".cursr",{
        transform: 'translate(-50% , -50%) scale(1)'
    })

 })
 document.querySelector("#child6").addEventListener("mouseleave",function(){
    gsap.to(".cursr",{
        transform: 'translate(-50% , -50%) scale(0)'
    })

 })