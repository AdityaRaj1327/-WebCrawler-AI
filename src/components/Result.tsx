import React from 'react';
import { Loader2 } from 'lucide-react';

interface ResultsProps {
  loading: boolean;
  result: string;
}

// Function to format result text
const formatResult = (text: string) => {
  const lines = text.split('\n');

  return lines.map((line, i) => {
    let formattedLine = line;

    // Bold numbered points (1., 2., 3.) and headings ending with ':'
    formattedLine = formattedLine.replace(/^(\s*\d+\.\s*.+?:)/, '<strong>$1</strong>');

    // Bold any text wrapped in **...**
    formattedLine = formattedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Remove any stars (*) or bullet points (•) at start of line
    formattedLine = formattedLine.replace(/^\s*[\*\u2022]\s*/, '');

    return (
        
      <div key={i} className="mb-1" dangerouslySetInnerHTML={{ __html: formattedLine }} />
      
    );
  });
};

const Results: React.FC<ResultsProps> = ({ loading, result }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      {loading ? (
        <div className="flex flex-col items-center py-12">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
          <p className="text-lg font-semibold text-gray-700">Crawling and analyzing...</p>
          <p className="text-gray-500 mt-1">This may take a few moments</p>
        </div>
      ) : result ? (
        <div className="bg-white shadow-xl rounded-2xl p-6 border overflow-auto max-h-[500px]">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            Results
          </h2>
          <div className="whitespace-pre-wrap text-gray-800 font-mono text-sm leading-relaxed">
            {formatResult(result)}
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center py-12">No results yet. Enter a URL and objective to start crawling.</p>
      )}
    </div>
  );
};

export default Results;
