import gsap from "gsap"

export function shakeThisElement(element){
    const tl_Shaking = gsap.timeline({repeat: 0, yoyo: true});
    tl_Shaking.to(element, {rotation: 1, duration: .1});
    tl_Shaking.to(element, {rotation: -1, duration: .1});
    tl_Shaking.to(element, {rotation: 1, duration: .1});
    tl_Shaking.to(element, {rotation: 0, duration: .1});
} 
