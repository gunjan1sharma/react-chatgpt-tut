class staticants {
  static getNameInitials = (fullname) => {
    return (
      fullname.substring(0, 1) +
      fullname
        .substring(fullname.indexOf(" ") + 1, fullname.indexOf(" ") + 2)
        .toUpperCase()
    );
  };

  
static exampleOne = "Explain quantum computing in simple terms";
static exampleTwo = "Got any creative ideas for a 10 year old’s birthday?";
static exampleThree = "How do I make an HTTP request in Javascript?";
static capOne = "Remembers what user said earlier in the conversation";
static capTwo = "Allows user to provide follow-up corrections";
static capThree = "Trained to decline inappropriate requests";
static limitOne = "May occasionally generate incorrect information";
static limitTwo =
  "May occasionally produce harmful instructions or biased content";
static limitThree = "Limited knowledge of world and events after 2021";

  static linkText = "ChatGPT Mar 23 Version";
  static infoText =
    "Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts";
  static dummyLontText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      porttitor auctor libero, in faucibus arcu. Aenean gravida dignissim
      ultrices. Donec ac est eu leo bibendum elementum. Vivamus vehicula nulla
      non odio tincidunt, id suscipit nibh bibendum. Morbi gravida ante eu odio
      vestibulum, nec interdum dolor tristique. In hac habitasse platea dictumst.
      Nam id libero sit amet nunc congue venenatis. Maecenas tincidunt magna
      quis metus convallis, eu tincidunt nulla pharetra. Nullam maximus, nisl
      eget sagittis placerat, neque lectus varius tortor, non bibendum dui odio
      auctor justo. Fusce rutrum elit eu quam tincidunt, at dictum magna iaculis.`;

  static dummyAnswer = `Algorithmic thinking can be beneficial in day-to-day life in various ways, such as:

Problem-solving: Algorithmic thinking involves breaking down a problem into smaller components and creating a step-by-step plan to solve it. This approach can be applied to many situations in daily life, such as planning a trip, organizing a project, or solving a household issue.

Decision-making: By using algorithms to weigh different options and outcomes, algorithmic thinking can help with decision-making. It allows for a more systematic and data-driven approach, which can lead to better decisions.

Time management: When you approach tasks with an algorithmic mindset, you can prioritize and schedule tasks more efficiently. You can also break down larger tasks into smaller, more manageable components and prioritize them accordingly.

Regarding your second question, writing algorithms does not necessarily make someone smarter. It is a specific skill set that can be learned and honed through practice and experience. However, people who are skilled in algorithmic thinking and programming may be able to solve certain problems more efficiently and effectively than those who are not. It ultimately depends on the specific situation and the individual's abilities and resources.`;
}

export default staticants;
