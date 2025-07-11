export const slideUp = {
   initial: {
      y: "100%",
      opacity: 0, // Adding opacity for a smoother transition
      rotateX: "90deg" // You can define rotateX directly
   },
   open: (i)=> ({
      y: "0%",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.04 * i },
      rotateX: "0deg", // Directly specify the transformation here
   }),
   closed: {
      y: "100%",
      opacity: 0, // Ensure opacity matches initial for closing
      rotateX: "90deg", // Directly specify the transformation
      transition: { duration: 0.5 }
   }
};
