import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

interface ResultCardProps {
  score: number;
  onRestart: () => void;
}

export function ResultCard({ score, onRestart }: ResultCardProps) {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: "ABG Purity Test",
        text: `I scored ${score} on the ABG Purity Test! Take the test to find out your score!`,
        url: window.location.href,
      });
    } catch (err) {
      await navigator.clipboard.writeText(
        `I scored ${score} on the ABG Purity Test! Take the test at ${window.location.href}`
      );
      toast.success("Score copied to clipboard!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl mx-auto bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-900">Your ABG Score</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-8xl font-bold text-rose-400 mb-6">{score}</div>
          <p className="text-lg text-gray-600 mb-4">
            {score >= 90
              ? "You're practically a saint! 😇"
              : score >= 70
              ? "Pretty innocent! 😊"
              : score >= 50
              ? "You're living that ABG life! 💅"
              : score >= 30
              ? "You're wild! 🔥"
              : "You're the ultimate ABG! 👑"}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button onClick={handleShare} className="w-full gap-2 bg-rose-400 hover:bg-rose-500">
            <Share2 className="w-4 h-4" />
            Share Result
          </Button>
          <Button variant="outline" onClick={onRestart} className="w-full border-gray-300 hover:bg-gray-50">
            Take Test Again
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}