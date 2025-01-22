import { useState } from "react";
import { QuizCard } from "@/components/QuizCard";
import { ResultCard } from "@/components/ResultCard";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Questions grouped by category
const questions = [
  // Food & Drink
  "Been to Seaside Bakery?",
  "Been to Seaside Bakery past 12 AM?",
  "Tried ham & cheese croissant or green Thai tea from Seaside Bakery?",
  "Consumed Soju or Hennessy?",
  "Consumed matcha?",
  "Ate Korean BBQ?",
  "Ate Buldak ramen before?",
  "Been to Din Tai Fung?",
  "Been to Tisane?",
  "Drank boba twice in a day?",

  // Social Media & Entertainment
  "Watched a JasonTheWeen stream?",
  "Watched content from Eric Ou, Kent Bui, Viet Trap, Rachie Love?",
  "Been on a TikTok interview by an ABG/ABB influencer?",
  "Gone viral on social media?",
  "Instagram model?",
  "Ever posted a thirst trap?",

  // Music
  "Listened to Beabadoobee, Keshi, Bixby, Grentperez, or Wave to Earth?",
  "Listened to any 88Rising artists?",
  "Listened to Nueve Lio or Blxst?",
  "Listened to Isoknock, Dabin, Slander, or Illenium?",
  "Listen to Kpop?",

  // Gaming
  "Played League of Legends?",
  "Played Valorant?",
  "Played TFT?",
  "Played Osu?",
  "Duo-queued with an ABG/ABB?",

  // Fashion & Accessories
  "Worn Supreme?",
  "Own Essentials or Stüssy clothing?",
  "Own Van Cleef or Chrome Hearts?",
  "Own a pair of cargo pants?",
  "Own a red flannel?",
  "Own a blank tee?",
  "Own a blank hoodie?",
  "Own a pair of Air Force 1's?",
  "Own a pair of New Balance's?",
  "Own a pair of Birkenstock's?",
  "Own a pair of Gentle Monster glasses?",
  "Own a Northface puffer?",

  // Shopping
  "Shopped at Miniso?",
  "Shopped at KMart?",
  "Own any Sanrio items?",

  // Appearance
  "Had your hair permed or had highlights?",
  "Dyed your hair blonde?",
  "Dyed your hair an unnatural color?",
  "Ears pierced?",
  "Height starts with 5?",
  "Own a small white dog (Bolognese)?",
  "Have a tattoo?",
  "Have a tattoo on your back?",

  // Collectibles
  "Own a Sonny angel?",
  "Own a Smiski?",
  "Own a Popmart?",
  "Own a Uniqlo AIRism Tee?",

  // Education & Location
  "Study or studied at UCLA, UCI, or UCR?",
  "From Orange County or San Jose?",
  "From Southern California or the Bay?",

  // Events & Activities
  "Attended a K-pop concert?",
  "Attended a rave?",
  "Attended a rave with a rave-bae?",
  "Hooked up with a rave-bae?",

  // Travel
  "Planned a trip to Japan?",
  "Japan trip made it out of the GC?",

  // Relationships
  "Been on dating apps (Hinge, Tinder, Bumble, etc.)?",
  "Been in a situationship?",
  "Had a crush on someone you met online?",
  "Had a talking stage with someone you met online?",
  "Created a shared playlist on Spotify with an ABB/ABG?",
  "Online dated?",
  "Cheated on your partner?",
  "Had a sneaky link?",
  "Been ghosted?",

  // Career & Education
  "Worked at a boba store?",
  "Business, Econ, Nursing major?",

  // Lifestyle
  "Modded your car?",
  "Obsessed with Gojo Satoru?",
  "Been called an ABB/ABG?",
  "Part of an Asian fraternity or sorority?",
  "Know what PLUR stands for?",
  "Given or received Kandi (rave bracelets)?",
  "Given or received a shoulder ride?",
  "Type in all lowercase?",

  // Places
  "Been to the OC Fair?",
  "Been to 626 Night Market?",
  "Been to Little Tokyo?",
  "Been to Irvine Spectrum?",
  "Been to Signal Hill?",
  "Been to Top of the World?",
  "Been to Asian Garden Mall (Phước Lộc Thọ)?",
  "Been to a streetwear pop-up shop?",

  // Activities & Hobbies
  "Workout?",
  "Play basketball or volleyball?",

  // Personal
  "Named Tiffany, Vivian, Emily, Jessica, Jennifer, Kevin?",
  "Vaped?",
  "Had an anime phase?",
  "Had a hypebeast phase?",

  // K-Culture
  "Watched Squid Game?",
  "Likes Chaewon?",
  "Have a flag of any K-pop idol?",
  "Have a Chaewon flag?",
  "Likes Wonyoung?"
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
              <h1 className="text-4xl font-bold mb-6 text-gray-900">ABG Purity Test</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Click the boxes that apply to you. Your score will appear at the end. Answer honestly—no one can see your answers! 💅✨
              </p>
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