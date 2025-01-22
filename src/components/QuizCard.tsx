import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

interface QuizCardProps {
  question: string;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: boolean) => void;
}

export function QuizCard({ question, questionNumber, totalQuestions, onAnswer }: QuizCardProps) {
  const [isAnswering, setIsAnswering] = useState(false);

  const handleAnswer = (answer: boolean) => {
    setIsAnswering(true);
    setTimeout(() => {
      onAnswer(answer);
      setIsAnswering(false);
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full max-w-2xl mx-auto bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="text-center text-xl font-medium text-gray-900">
            Question {questionNumber} of {totalQuestions}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg mb-6 text-gray-700">{question}</p>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-rose-400 rounded-full h-2 transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => handleAnswer(true)}
            disabled={isAnswering}
            className="w-32 border-gray-300 hover:bg-gray-50"
          >
            Yes
          </Button>
          <Button
            variant="outline"
            onClick={() => handleAnswer(false)}
            disabled={isAnswering}
            className="w-32 border-gray-300 hover:bg-gray-50"
          >
            No
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}