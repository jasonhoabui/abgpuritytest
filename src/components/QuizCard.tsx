import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

interface QuizCardProps {
  questions: string[];
  selectedAnswers: boolean[];
  onCheckboxChange: (index: number) => void;
  onCalculateScore: () => void;
  onClearCheckboxes: () => void;
}

export function QuizCard({ 
  questions, 
  selectedAnswers, 
  onCheckboxChange, 
  onCalculateScore, 
  onClearCheckboxes 
}: QuizCardProps) {
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
            ABG Purity Test
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="flex items-start gap-3">
                <Checkbox
                  id={`question-${index}`}
                  checked={selectedAnswers[index]}
                  onCheckedChange={() => onCheckboxChange(index)}
                  className="mt-1"
                />
                <label
                  htmlFor={`question-${index}`}
                  className="text-sm text-gray-700 leading-tight cursor-pointer"
                >
                  {question}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button
            onClick={onCalculateScore}
            className="bg-rose-400 hover:bg-rose-500 text-white"
          >
            Calculate My Score!
          </Button>
          <Button
            variant="outline"
            onClick={onClearCheckboxes}
            className="border-gray-300 hover:bg-gray-50"
          >
            Clear Checkboxes
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}