import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiRotateCcw, FiCheckCircle, FiXCircle, FiCopy, FiDownload } from 'react-icons/fi';
import './CodeCompiler.css';

const CodeCompiler = ({ 
  template = '', 
  expectedOutput = '', 
  language = 'javascript',
  onRun,
  onComplete 
}) => {
  const [code, setCode] = useState(template);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState(null);
  const [executionTime, setExecutionTime] = useState(0);

  const languages = {
    javascript: {
      name: 'JavaScript',
      mode: 'javascript',
      extension: 'js'
    },
    python: {
      name: 'Python',
      mode: 'python',
      extension: 'py'
    },
    java: {
      name: 'Java',
      mode: 'java',
      extension: 'java'
    },
    cpp: {
      name: 'C++',
      mode: 'cpp',
      extension: 'cpp'
    }
  };

  const currentLang = languages[language] || languages.javascript;

  const runCode = async () => {
    setIsRunning(true);
    setOutput('');
    setResult(null);
    
    const startTime = Date.now();
    
    try {
      // Simulate code execution
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple JavaScript execution simulation
      if (language === 'javascript') {
        try {
          // Create a safe execution environment
          const func = new Function(code);
          const result = func();
          setOutput(String(result || 'Code executed successfully'));
        } catch (error) {
          setOutput(`Error: ${error.message}`);
          setResult({ success: false, message: error.message });
        }
      } else {
        // For other languages, simulate execution
        setOutput('Code executed successfully');
      }
      
      const endTime = Date.now();
      setExecutionTime(endTime - startTime);
      
      // Check if output matches expected result
      if (expectedOutput && output.includes(expectedOutput)) {
        setResult({ success: true, message: 'Great job! Your code is working correctly.' });
        if (onComplete) {
          onComplete(true);
        }
      } else if (expectedOutput) {
        setResult({ success: false, message: 'Output doesn\'t match expected result. Keep trying!' });
      } else {
        setResult({ success: true, message: 'Code executed successfully!' });
      }
      
    } catch (error) {
      setOutput(`Execution Error: ${error.message}`);
      setResult({ success: false, message: error.message });
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(template);
    setOutput('');
    setResult(null);
    setExecutionTime(0);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${currentLang.extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div 
      className="code-compiler"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="compiler-header">
        <div className="compiler-title">
          <h3>Code Compiler</h3>
          <span className="language-badge">{currentLang.name}</span>
        </div>
        <div className="compiler-actions">
          <button 
            className="btn btn-outline btn-sm"
            onClick={copyCode}
            title="Copy Code"
          >
            <FiCopy />
          </button>
          <button 
            className="btn btn-outline btn-sm"
            onClick={downloadCode}
            title="Download Code"
          >
            <FiDownload />
          </button>
          <button 
            className="btn btn-outline btn-sm"
            onClick={resetCode}
            title="Reset Code"
          >
            <FiRotateCcw />
          </button>
        </div>
      </div>

      <div className="compiler-content">
        <div className="code-section">
          <div className="code-header">
            <span className="section-title">Code Editor</span>
            <div className="editor-info">
              <span className="line-count">{code.split('\n').length} lines</span>
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-editor"
            placeholder={`Enter your ${currentLang.name} code here...`}
            spellCheck={false}
          />
        </div>

        <div className="output-section">
          <div className="output-header">
            <span className="section-title">Output</span>
            <div className="output-info">
              {executionTime > 0 && (
                <span className="execution-time">{executionTime}ms</span>
              )}
            </div>
          </div>
          <div className="output-container">
            {isRunning ? (
              <div className="loading-output">
                <div className="loading-spinner" />
                <span>Executing code...</span>
              </div>
            ) : (
              <pre className="output-text">
                {output || 'Click "Run Code" to see the output here...'}
              </pre>
            )}
          </div>
        </div>
      </div>

      <div className="compiler-footer">
        <button 
          className="btn btn-primary"
          onClick={runCode}
          disabled={isRunning || !code.trim()}
        >
          <FiPlay />
          {isRunning ? 'Running...' : 'Run Code'}
        </button>
        
        {result && (
          <div className={`result-message ${result.success ? 'success' : 'error'}`}>
            <div className="result-icon">
              {result.success ? <FiCheckCircle /> : <FiXCircle />}
            </div>
            <span>{result.message}</span>
          </div>
        )}
      </div>

      {expectedOutput && (
        <div className="expected-output">
          <h4>Expected Output:</h4>
          <pre className="expected-text">{expectedOutput}</pre>
        </div>
      )}
    </motion.div>
  );
};

export default CodeCompiler;
