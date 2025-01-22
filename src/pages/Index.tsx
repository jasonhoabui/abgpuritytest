import { useState } from "react";
import { QuizCard } from "@/components/QuizCard";
import { ResultCard } from "@/components/ResultCard";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Questions grouped by category
const questions = [
  // Food & Drink
  "1. Been to Seaside Bakery?",
  "2. Been to Seaside Bakery past 12 AM?",
  "3. Tried ham & cheese croissant or green Thai tea from Seaside Bakery?",
  "4. Consumed Soju or Hennessy?",
  "5. Consumed matcha?",
  "6. Ate Korean BBQ?",
  "7. Ate Buldak ramen before?",
  "8. Been to Din Tai Fung?",
  "9. Been to Tisane?",
  "10. Drank boba twice in a day?",

  // Social Media & Entertainment
  "11. Watched a JasonTheWeen stream?",
  "12. Watched content from Eric Ou, Kent Bui, Viet Trap, Rachie Love?",
  "13. Been on a TikTok interview by an ABG/ABB influencer?",
  "14. Gone viral on social media?",
  "15. Instagram model?",
  "16. Ever posted a thirst trap?",

  // Music
  "17. Listened to Beabadoobee, Keshi, Bixby, Grentperez, or Wave to Earth?",
  "18. Listened to any 88Rising artists?",
  "19. Listened to Nueve Lio or Blxst?",
  "20. Listened to Isoknock, Dabin, Slander, or Illenium?",
  "21. Listen to Kpop?",

  // Gaming
  "22. Played League of Legends?",
  "23. Played Valorant?",
  "24. Played TFT?",
  "25. Played Osu?",
  "26. Duo-queued with an ABG/ABB?",

  // Fashion & Accessories
  "27. Worn Supreme?",
  "28. Own Essentials or Stüssy clothing?",
  "29. Own Van Cleef or Chrome Hearts?",
  "30. Own a pair of cargo pants?",
  "31. Own a red flannel?",
  "32. Own a blank tee?",
  "33. Own a blank hoodie?",
  "34. Own a pair of Air Force 1's?",
  "35. Own a pair of New Balance's?",
  "36. Own a pair of Birkenstock's?",
  "37. Own a pair of Gentle Monster glasses?",
  "38. Own a Northface puffer?",

  // Shopping
  "39. Shopped at Miniso?",
  "40. Shopped at KMart?",
  "41. Own any Sanrio items?",

  // Appearance
  "42. Had your hair permed or had highlights?",
  "43. Dyed your hair blonde?",
  "44. Dyed your hair an unnatural color?",
  "45. Ears pierced?",
  "46. Height starts with 5?",
  "47. Own a small white dog (Bolognese)?",
  "48. Have a tattoo?",
  "49. Have a tattoo on your back?",

  // Collectibles
  "50. Own a Sonny angel?",
  "51. Own a Smiski?",
  "52. Own a Popmart?",
  "53. Own a Uniqlo AIRism Tee?",

  // Education & Location
  "54. Study or studied at UCLA, UCI, or UCR?",
  "55. From Orange County or San Jose?",
  "56. From Southern California or the Bay?",

  // Events & Activities
  "57. Attended a K-pop concert?",
  "58. Attended a rave?",
  "59. Attended a rave with a rave-bae?",
  "60. Hooked up with a rave-bae?",

  // Travel
  "61. Planned a trip to Japan?",
  "62. Japan trip made it out of the GC?",

  // Relationships
  "63. Been on dating apps (Hinge, Tinder, Bumble, etc.)?",
  "64. Been in a situationship?",
  "65. Had a crush on someone you met online?",
  "66. Had a talking stage with someone you met online?",
  "67. Created a shared playlist on Spotify with an ABB/ABG?",
  "68. Online dated?",
  "69. Cheated on your partner?",
  "70. Had a sneaky link?",
  "71. Been ghosted?",

  // Career & Education
  "72. Worked at a boba store?",
  "73. Business, Econ, Nursing major?",

  // Lifestyle
  "74. Modded your car?",
  "75. Obsessed with Gojo Satoru?",
  "76. Been called an ABB/ABG?",
  "77. Part of an Asian fraternity or sorority?",
  "78. Know what PLUR stands for?",
  "79. Given or received Kandi (rave bracelets)?",
  "80. Given or received a shoulder ride?",
  "81. Type in all lowercase?",

  // Places
  "82. Been to the OC Fair?",
  "83. Been to 626 Night Market?",
  "84. Been to Little Tokyo?",
  "85. Been to Irvine Spectrum?",
  "86. Been to Signal Hill?",
  "87. Been to Top of the World?",
  "88. Been to Asian Garden Mall (Phước Lộc Thọ)?",
  "89. Been to a streetwear pop-up shop?",

  // Activities & Hobbies
  "90. Workout?",
  "91. Play basketball or volleyball?",

  // Personal
  "92. Named Tiffany, Vivian, Emily, Jessica, Jennifer, Kevin?",
  "93. Vaped?",
  "94. Had an anime phase?",
  "95. Had a hypebeast phase?",

  // K-Culture
  "96. Watched Squid Game?",
  "97. Likes Chaewon?",
  "98. Have a flag of any K-pop idol?",
  "99. Have a Chaewon flag?",
  "100. Likes Wonyoung?"
];

type QuizState = "start" | "quiz" | "result";

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>("start");
  const [selectedAnswers, setSelectedAnswers] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [score, setScore] = useState(100);

  const handleStart = () => {
    setQuizState("quiz");
    setSelectedAnswers(new Array(questions.length).fill(false));
    setScore(100);
  };

  const handleCalculateScore = () => {
    const newScore = 100 - selectedAnswers.filter(Boolean).length;
    setScore(newScore);
    setQuizState("result");
  };

  const handleClearCheckboxes = () => {
    setSelectedAnswers(new Array(questions.length).fill(false));
  };

  const handleCheckboxChange = (index: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = !newAnswers[index];
    setSelectedAnswers(newAnswers);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto pt-12">
        <AnimatePresence mode="wait">
          {quizState === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <img 
                src="/lovable-uploads/388e7686-2d70-447b-89c8-f6e176363f6b.png" 
                alt="Asian Baby Purity Test Header" 
                className="mx-auto mb-8 max-w-2xl w-full"
              />
              <div className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto space-y-4">
                <p>
                  The ABG-themed Purity Test serves as a lighthearted way to bond and reflect on shared experiences. 
                  Inspired by the classic Rice Purity Test, this version adds an ABG twist, making it perfect for 
                  group laughs and icebreakers.
                </p>
                <p>
                  Reminder: This is just for fun! Checking off every item isn't a goal—take it easy and enjoy the ride.
                </p>
                <p>
                  Click on each item you've experienced.
                </p>
              </div>
              <Button 
                onClick={handleStart} 
                size="lg" 
                className="bg-rose-400 hover:bg-rose-500 text-white"
              >
                Start Test
              </Button>
            </motion.div>
          )}

          {quizState === "quiz" && (
            <QuizCard
              questions={questions}
              selectedAnswers={selectedAnswers}
              onCheckboxChange={handleCheckboxChange}
              onCalculateScore={handleCalculateScore}
              onClearCheckboxes={handleClearCheckboxes}
            />
          )}

          {quizState === "result" && (
            <ResultCard key="result" score={score} onRestart={handleStart} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Index;