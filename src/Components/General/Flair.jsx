import React from 'react'

export default function Flair() {
   const [isHovered, setIsHovered] = useState(false);
   const xTo = useRef();
   const yTo = useRef();
   const app = useRef();
   const { context, contextSafe } =  useGSAP(() => {
      xTo.current = gsap.quickTo(".flair", "x", {duration: 0.1, ease: "power3"});
      yTo.current = gsap.quickTo(".flair", "y", {duration: 0.1, ease: "power3"});
    }, { scope: app });
    const moveShape = contextSafe((e) => {
      if(window.innerWidth > 991){
         xTo.current(e.clientX);
         yTo.current(e.clientY);
      }
   });
  return (
    <div>Flair</div>
  )
}
