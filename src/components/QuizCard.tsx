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
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Question {questionNumber} of {totalQuestions}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg mb-6">{question}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-primary rounded-full h-2.5 transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => handleAnswer(true)}
            disabled={isAnswering}
            className="w-32"
          >
            Yes
          </Button>
          <Button
            variant="outline"
            onClick={() => handleAnswer(false)}
            disabled={isAnswering}
            className="w-32"
          >
            No
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}