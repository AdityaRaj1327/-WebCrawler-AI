import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Results from './components/Result';
import Footer from './components/Footer';
import './index.css';

interface OpenRouterResponse {
  choices?: { message: { content: string } }[];
}

function App() {
  const [url, setUrl] = useState('');
  const [objective, setObjective] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!url || !objective) {
      setError('Please fill in both fields');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'openai/gpt-4-turbo',
          messages: [
            {
              role: 'user',
              content: `Crawl the website ${url} and ${objective}. Provide detailed structured info including headings, summary, main topics, features, and key points.`
            }
          ]
        })
      });

      const data: OpenRouterResponse = await response.json();
      if (data.choices && data.choices[0]) {
        setResult(data.choices[0].message.content);
      } else {
        setError('No response from API');
      }
    } catch {
      setError('Failed to fetch results. Check your API key.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8 px-4">
        <InputForm
          url={url}
          setUrl={setUrl}
          objective={objective}
          setObjective={setObjective}
          error={error}
          loading={loading}
          onSubmit={handleSubmit}
        />
        <Results loading={loading} result={result} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
