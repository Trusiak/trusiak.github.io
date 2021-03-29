import { gsap } from "gsap";

window.addEventListener("load", ()=>{
    setTimeout(() => {
        new ManAnimation();
    }, 500);
    
})
class ManAnimation {
    constructor(){
        this._getElements();
        this._startAnimation();
    }
    _getElements(){
        this.rightFoot = document.querySelector("#rightFoot");
        this.rightLeg = document.querySelector("#rightLeg");
        this.leftFoot = document.querySelector("#leftFoot");
        this.leftHand = document.querySelector("#leftHand");
        this.rightHand = document.querySelector("#rightHand");
    }
    _startAnimation(){
        const footsAnimation = gsap.timeline({repeat: -1, yoyo: true});
        const leftHandAnimation = gsap.timeline({repeat: -1, yoyo: true});
        const rightHandAnimation = gsap.timeline({repeat: -1, yoyo: true});

        footsAnimation
            .to(this.rightFoot, {transformOrigin: '0% 50%', scale: 1.05, rotation: 15,x: 1,y: -5,duration: .5},0)
            .to(this.rightLeg, {rotation: -1, y: -3, duration: .5},0);

        leftHandAnimation
            .to(this.leftHand, {x:2, duration: .8})
            .to(this.leftHand, {y:1, duration: .3, rotation: 3})
            .to(this.leftHand, {y:0, duration: .1, rotation: 0})
            .to(this.leftHand, {y:1, duration: .1, rotation: 2})

        rightHandAnimation
            .to(this.rightHand, {x:2, duration: .4})
            .to(this.rightHand, {y:2, duration: .2})
            .to(this.rightHand, {x:1, y:0, duration: .2})
            .to(this.rightHand, {x:1, y:2, duration: .2})
    }
}



