const generateBtn = document.getElementById("generate-btn");
const storyText = document.getElementById("story-text");

const names = ["Alex", "Sam", "Jordan", "Taylor", "Casey"];
const locations = ["the moon", "Mars", "a distant galaxy", "a virtual world", "the dark web"];
const actions = ["discovered a hidden truth", "fought an intergalactic war", "hacked into a secret database", "explored the unknown", "became the hero of the virtual realm"];
const settings = ["in a neon-lit city", "within a collapsing space station", "on a vast alien desert", "in a virtual simulation", "inside an ancient space temple"];

function generateLongStory() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  const randomSetting = settings[Math.floor(Math.random() * settings.length)];

  // Create a longer, scrolling story.
  let story = `${randomName} embarked on a journey to ${randomLocation} ${randomSetting} where they ${randomAction}. `;
  
  // Add more content to ensure it's a long story.
  for (let i = 0; i < 5; i++) {
    story += `Along the way, they encountered mysterious beings, forged new alliances, and uncovered dark secrets about the universe. `;
    story += `${randomName} found themselves on the edge of a breakthrough that could change everything. `;
  }
  
  story += "But as they ventured deeper into the unknown, they realized the true cost of their actions...";

  // Display the story in the container and animate the reveal.
  storyText.textContent = '';
  let index = 0;
  const interval = setInterval(() => {
    storyText.textContent += story[index];
    index++;
    if (index === story.length) clearInterval(interval);
  }, 50);  // Slow typing effect
}

generateBtn.addEventListener("click", generateLongStory);

// Initialize with a random story on page load
generateLongStory();
