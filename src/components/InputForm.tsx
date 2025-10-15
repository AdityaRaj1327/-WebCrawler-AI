import React from 'react';

interface InputFormProps {
  url: string;
  setUrl: (value: string) => void;
  objective: string;
  setObjective: (value: string) => void;
  error: string;
  loading: boolean;
  onSubmit: () => void;
}

const InputForm: React.FC<InputFormProps> = ({
  url, setUrl, objective, setObjective, error, loading, onSubmit
}) => {
  return (
    <form
      className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl mx-auto mt-8 space-y-6"
      onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
    >
      {error && <p className="bg-red-100 text-red-700 p-3 rounded">{error}</p>}

      <div className="flex flex-col">
        <label className="font-semibold mb-2">Target URL</label>
        <input
          type="url"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold mb-2">Crawling Objective</label>
        <input
          type="text"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Summarize the main topics or extract key info"
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
      >
        {loading ? 'Processing...' : 'Submit'}
      </button>
    </form>
  );
};

export default InputForm;
