import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface JournalCodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  caption?: string;
}

export const JournalCodeBlock: React.FC<JournalCodeBlockProps> = ({
  code,
  language = 'text',
  filename,
  caption,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="journal-code-container">
      <div className="journal-code-header">
        <div className="journal-code-info">
          <span className="journal-code-lang">{language.toUpperCase()}</span>
          {filename && <span className="journal-code-filename">{filename}</span>}
        </div>
        <button
          type="button"
          className="journal-code-copy-btn"
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check size={13} color="#34D399" />
              <span style={{ color: '#34D399' }}>Copied</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <pre className="journal-code-pre">
        <code>{code}</code>
      </pre>

      {caption && <div className="journal-code-caption">{caption}</div>}
    </div>
  );
};
