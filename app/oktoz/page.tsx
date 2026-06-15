'use client';

import { useState, useEffect } from 'react';
import { getJsonFile, updateJsonFile } from '@/lib/actions';

export default function JsonEditor() {
  const [jsonText, setJsonText] = useState('');
  const [sha, setSha] = useState('');
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');

  // Load the JSON data when the page opens
  useEffect(() => {
    async function loadData() {
      try {
        const data = await getJsonFile();
        setJsonText(JSON.stringify(data.content, null, 2));
        setSha(data.sha);
      } catch (err) {
        setStatus('❌ Failed to load file configuration.');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Handle saving the edited text
  const handleSave = async () => {
    setStatus('💾 Saving changes...');
    try {
      // Validate that the user typed proper JSON syntax
      const parsedJson = JSON.parse(jsonText);
      
      const result = await updateJsonFile(parsedJson, sha);
      if (result.success) {
        setStatus('✅ Successfully updated file in GitHub!');
        // Refresh the file data to get the new SHA hash
        const freshData = await getJsonFile();
        setSha(freshData.sha);
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        setStatus('❌ Invalid JSON syntax. Please check your brackets/commas.');
      } else {
        setStatus('❌ Error saving changes to GitHub.');
      }
    }
  };

  if (loading) return <div style={{ padding: '20px' }}>Loading JSON from GitHub...</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>GitHub JSON File Editor</h1>
      <p style={{ color: '#666' }}>Editing: <code>{process.env.NEXT_PUBLIC_GITHUB_FILE_PATH || 'Target File'}</code></p>
      
      <textarea
        style={{
          width: '100%',
          height: '400px',
          fontFamily: 'monospace',
          fontSize: '14px',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
      />

      <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button
          onClick={handleSave}
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Save to GitHub
        </button>
        <span>{status}</span>
      </div>
    </div>
  );
}
