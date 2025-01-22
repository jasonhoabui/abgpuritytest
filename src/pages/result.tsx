import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Result() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const score = searchParams.get('score');

  useEffect(() => {
    if (!score) {
      navigate('/');
    }
  }, [score, navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-12">
      <div className="text-center max-w-4xl w-full">
        <img 
          src="/lovable-uploads/388e7686-2d70-447b-89c8-f6e176363f6b.png" 
          alt="Asian Baby Purity Test Header" 
          className="mx-auto mb-12 max-w-2xl w-full"
        />
        <h1 className="text-3xl font-serif mb-8">Your score:</h1>
        <div className="text-[150px] font-bold text-rose-500">
          {score}
        </div>
      </div>
    </div>
  );
} 