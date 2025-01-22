import { useState } from "react";
import { QuizCard } from "@/components/QuizCard";
import { ResultCard } from "@/components/ResultCard";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Your 100 questions would go here
const questions = [
  "Have you ever dyed your hair?",
  "Do you own a luxury bag?",
  "Have you been to a K-pop concert?",
  // ... add your remaining questions here
];

type QuizState = "start" | "quiz" | "result";

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(100);

  const handleStart = () => {
    setQuizState("quiz");
    setCurrentQuestion(0);
    setScore(100);
  };

  const handleAnswer = (answer: boolean) => {
    if (answer) {
      setScore((prev) => prev - 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizState("result");
    }
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
              key="quiz"
              question={questions[currentQuestion]}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
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