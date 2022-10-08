function anim(){
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});









ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}
anim()

gsap.from("#page2>h1",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2>h1",
        start:"top 90%",
        end:"bottom 20%",
        scrub:1,
        
    },
    y:20,
    opacity:0
})
gsap.from("#page2>h2,#svg",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2>h1",
        start:"top 20%",
       
        scrub:1,
        
    },
    y:40,
    opacity:0,
    stagger:1,
    ease:Expo.easeInOut
    // duration:.5
})

document.querySelectorAll(".curve").forEach(function(elem){
    gsap.to(elem,{
        scrollTrigger:{
            scroller:"#main",
            trigger:elem,
            start:"top top",
           
           scrub:0.000001
     }
        ,
        borderRadius:"0",
        
    })
})

gsap.from("#ypage>h1,#ysvg,#ypage>h2,#ypage>img,#ypage>h3",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#ypage",
        start:"top 5%",
        
       
       
    },
    y:20,
    opacity:0,
    // duration:1,
    stagger:{
        amount:1
    }
})