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

  const handleImageClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-12 relative">
      <div className="text-center max-w-4xl w-full">
        <img 
          src="/lovable-uploads/388e7686-2d70-447b-89c8-f6e176363f6b.png" 
          alt="Asian Baby Purity Test Header" 
          className="mx-auto mb-12 max-w-2xl w-full cursor-pointer hover:opacity-90 transition-opacity"
          onClick={handleImageClick}
        />
        <h1 className="text-3xl font-serif mb-8">Your score:</h1>
        <div className="text-[150px] font-bold text-rose-500">
          {score}
        </div>
      </div>
      <div className="text-center w-full">
        <p className="text-xs text-gray-500 mt-8">©{new Date().getFullYear()} by jason bui</p>
      </div>
      
      <div className="absolute bottom-4 right-4 text-right">
        <p className="text-xs text-gray-600 mb-2">If you enjoyed the test, consider supporting me!</p>
        <div className="space-x-2">
          <a 
            href="https://paypal.me/jasonbui657" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 bg-[#0070BA] text-white rounded-md hover:bg-[#003087] transition-colors inline-block"
          >
            PayPal
          </a>
          <a 
            href="https://www.venmo.com/u/jbui657" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 bg-[#008CFF] text-white rounded-md hover:bg-[#0070CC] transition-colors inline-block"
          >
            Venmo
          </a>
        </div>
      </div>
    </div>
  );
} 