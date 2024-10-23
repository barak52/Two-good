

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});




function videoanimation(){
    var videocon = document.querySelector(".video-con");
    var play = document.querySelector(".play");
    
    videocon.addEventListener("mouseenter", function() {
        gsap.to(play,{
            scale:1,
            opacity:1,
            
        })
        
    });
    
    videocon.addEventListener("mouseleave", function() {
        gsap.to(play,{
            scale:0,
            opacity:0,
            
        })
        
    });
    videocon.addEventListener("mousemove", function(dets) {
        gsap.to(play,{
          left:dets.x-50,
          top:dets.y-40
    
    
            
        })
        
    });
    
}
videoanimation()



        
function loadinganimation(){
    gsap.from(".main-content h1",{
        y:100,
        duration:0.6,
        delay:0.2,
        opacity:0,
        
        stagger:0.2
    })
    
    gsap.from(".video-con",{
        y:100,
        scale:0.9,
        duration:1.4,
        delay:0.6,
        opacity:0,
        
        
    })
    
   
}

loadinganimation()

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
  
    }
        
    )
})


document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mousemove",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%, -50%) scale(1)', 
        })  
    })

})

 document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%, -50%) scale(0)', 
        })  
    })

})

var box = document.querySelector(".box");
var para = document.querySelector("h2"); 
var ppp = document.querySelector(".parrr"); 

box.addEventListener("mouseenter", function() {
   
    ppp.style.height= '100%'; // Show the h2 when mouse enters the box
    para.style.opacity = '1';
});

box.addEventListener("mouseleave", function() {
   
    ppp.style.height= '0%'; // Show the h2 when mouse enters the box
    para.style.opacity = '0';
});



gsap.to(".page2 h1 ",{
    transform:"translateX(-120%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})