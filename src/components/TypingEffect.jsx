import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingEffect = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "Freelancer.",
      "Cook. ",
      "Fitness Enthusiastic. ",
      "Science Nerd. ",
      "Explorer. ",
    ],
    loop: 0, // Infinite loop
    typeSpeed: 120, // Typing speed in milliseconds
    deleteSpeed: 80, // Speed at which it deletes the text
    delaySpeed: 2500, // Delay before deleting each word
  });

  return (
    <div className="text-start">
      <span className="py-4 text-2xl sm:mt-4">
        {text}
        {text.includes("Software Engineer.") && " 👨‍💻"}
        {text.includes("Freelancer.") && " 🚀"}
        {text.includes("Cook.") && " 🧑🏼‍🍳"}
        {text.includes("Fitness Enthusiastic.") && " 🏋🏼"}
        {text.includes("Science Nerd.") && "   🧪"}
        {text.includes("Explorer.") && " 🛫"}
        <Cursor cursorColor="#fff" />
      </span>
    </div>
  );
};

export default TypingEffect;
