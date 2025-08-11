import './App.css';
import { useState, useEffect } from 'react';

// Sample questions - you'll add your real ones here
import { questionBank } from './questions.js';

function App() {
  // State management
  const [currentUser, setCurrentUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [testComplete, setTestComplete] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [historicalResults, setHistoricalResults] = useState([]);

  // Load historical results on mount
  useEffect(() => {
    const saved = localStorage.getItem('aas_test_history');
    if (saved) {
      setHistoricalResults(JSON.parse(saved));
    }
  }, []);

  // Simple login (just a name, no password)
  const handleLogin = (e) => {
    e.preventDefault();
    if (currentUser.trim()) {
      setIsLoggedIn(true);
      // Load user's specific history
      const userHistory = localStorage.getItem(`aas_history_${currentUser}`);
      if (userHistory) {
        setHistoricalResults(JSON.parse(userHistory));
      } else {
        setHistoricalResults([]);
      }
    }
  };

  // Start a test
  const startTest = (testType) => {
    const questions = questionBank[testType];
    // Shuffle and take 10 questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(10, shuffled.length));
    
    setCurrentQuestions(selected);
    setSelectedTest(testType);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setTestComplete(false);
    setTestResults(null);
  };

  // Select an answer
  const selectAnswer = (questionId, answerIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answerIndex
    });
  };

  // Navigate questions
  const goToQuestion = (index) => {
    if (index >= 0 && index < currentQuestions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  // Submit test
  const submitTest = () => {
    // Calculate results
    let correct = 0;
    const questionResults = currentQuestions.map(q => {
      const userAnswer = userAnswers[q.id];
      const isCorrect = userAnswer === q.correct;
      if (isCorrect) correct++;
      
      return {
        question: q.question,
        userAnswer: userAnswer,
        correctAnswer: q.correct,
        isCorrect: isCorrect,
        explanation: q.explanation
      };
    });

    const score = Math.round((correct / currentQuestions.length) * 100);
    
    const results = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      testType: selectedTest,
      score: score,
      correct: correct,
      total: currentQuestions.length,
      details: questionResults,
      weakAreas: identifyWeakAreas(questionResults, currentQuestions)
    };

    // Save to history
    const newHistory = [...historicalResults, results];
    setHistoricalResults(newHistory);
    localStorage.setItem(`aas_history_${currentUser}`, JSON.stringify(newHistory));
    
    setTestResults(results);
    setTestComplete(true);
  };

  // Identify weak areas for improvement
  const identifyWeakAreas = (results, questions) => {
    const weakAreas = [];
    results.forEach((r, i) => {
      if (!r.isCorrect) {
        // You can categorize questions by subtopic here
        weakAreas.push(questions[i].question.substring(0, 50) + '...');
      }
    });
    return weakAreas;
  };

  // Reset to menu
  const backToMenu = () => {
    setSelectedTest(null);
    setTestComplete(false);
    setCurrentQuestions([]);
    setUserAnswers({});
  };

  // Calculate statistics
  const getStats = (testType) => {
    const typeResults = historicalResults.filter(r => r.testType === testType);
    if (typeResults.length === 0) return null;
    
    const avgScore = Math.round(
      typeResults.reduce((sum, r) => sum + r.score, 0) / typeResults.length
    );
    const lastScore = typeResults[typeResults.length - 1].score;
    const trend = typeResults.length > 1 
      ? lastScore - typeResults[typeResults.length - 2].score 
      : 0;
    
    return { avgScore, lastScore, trend, count: typeResults.length };
  };

  // LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <div className="app-container">
        <div className="login-screen">
          <h1 className="app-title">AAS Practice Tests</h1>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="text"
              placeholder="Enter your name"
              value={currentUser}
              onChange={(e) => setCurrentUser(e.target.value)}
              className="name-input"
              autoFocus
            />
            <button type="submit" className="btn btn-primary">
              Start Practicing
            </button>
          </form>
        </div>
      </div>
    );
  }

  // TEST SELECTION MENU
  if (!selectedTest) {
    return (
      <div className="app-container">
        <div className="header">
          <h1>AAS Practice Tests</h1>
          <div className="user-info">
            Welcome, {currentUser}!
            <button onClick={() => setIsLoggedIn(false)} className="btn-link">
              Switch User
            </button>
          </div>
        </div>

        <div className="test-selection">
          <h2>Choose Your Practice Test</h2>
          <p className="subtitle">Each test contains 10 questions</p>
          
          <div className="test-cards">
            {['writing', 'reading', 'reasoning'].map(testType => {
              const stats = getStats(testType);
              return (
                <div key={testType} className="test-card">
                  <h3>{testType.charAt(0).toUpperCase() + testType.slice(1)}</h3>
                  {stats && (
                    <div className="stats">
                      <p>Attempts: {stats.count}</p>
                      <p>Average: {stats.avgScore}%</p>
                      <p>Last: {stats.lastScore}%</p>
                      {stats.trend !== 0 && (
                        <p className={stats.trend > 0 ? 'trend-up' : 'trend-down'}>
                          {stats.trend > 0 ? '↑' : '↓'} {Math.abs(stats.trend)}%
                        </p>
                      )}
                    </div>
                  )}
                  <button 
                    onClick={() => startTest(testType)}
                    className="btn btn-primary"
                  >
                    Start Test
                  </button>
                </div>
              );
            })}
          </div>

          {historicalResults.length > 0 && (
            <div className="history-section">
              <h3>Recent Results</h3>
              <div className="history-list">
                {historicalResults.slice(-5).reverse().map((result, i) => (
                  <div key={i} className="history-item">
                    <span>{result.date}</span>
                    <span className="test-type">{result.testType}</span>
                    <span className={`score ${result.score >= 80 ? 'good' : result.score >= 60 ? 'medium' : 'poor'}`}>
                      {result.score}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // TEST COMPLETE - SHOW RESULTS
  if (testComplete && testResults) {
    return (
      <div className="app-container">
        <div className="results-screen">
          <h1>Test Complete!</h1>
          
          <div className="score-display">
            <div className="score-circle">
              <span className="score-number">{testResults.score}%</span>
              <span className="score-label">Score</span>
            </div>
            <div className="score-details">
              <p>{testResults.correct} out of {testResults.total} correct</p>
              <p>Test: {testResults.testType}</p>
              <p>Date: {testResults.date} at {testResults.time}</p>
            </div>
          </div>

          {testResults.weakAreas.length > 0 && (
            <div className="weak-areas">
              <h3>Areas for Improvement:</h3>
              <ul>
                {testResults.weakAreas.map((area, i) => (
                  <li key={i}>{area}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="results-review">
            <h3>Question Review</h3>
            {testResults.details.map((detail, i) => (
              <div key={i} className={`review-item ${detail.isCorrect ? 'correct' : 'incorrect'}`}>
                <p className="question-text">Q{i + 1}: {detail.question}</p>
                {!detail.isCorrect && (
                  <div className="explanation">
                    <p>Your answer: {currentQuestions[i].options[detail.userAnswer]}</p>
                    <p>Correct answer: {currentQuestions[i].options[detail.correctAnswer]}</p>
                    <p className="explanation-text">Explanation: {detail.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="action-buttons">
            <button onClick={backToMenu} className="btn btn-primary">
              Back to Menu
            </button>
            <button onClick={() => startTest(selectedTest)} className="btn btn-secondary">
              Retake Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  // TAKING TEST
  if (selectedTest && currentQuestions.length > 0) {
    const currentQ = currentQuestions[currentQuestionIndex];
    const answeredCount = Object.keys(userAnswers).length;
    
    return (
      <div className="app-container">
        <div className="test-header">
          <div className="test-info">
            <span>{selectedTest.toUpperCase()} TEST</span>
            <span>Question {currentQuestionIndex + 1} of {currentQuestions.length}</span>
          </div>
          <button onClick={() => setSelectedTest(null)} className="btn-link">
            Exit Test
          </button>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
          />
        </div>

        <div className="question-container">
          <h2 className="question-text">{currentQ.question}</h2>
          
          <div className="options">
            {currentQ.options.map((option, i) => (
              <button
                key={i}
                onClick={() => selectAnswer(currentQ.id, i)}
                className={`option-btn ${userAnswers[currentQ.id] === i ? 'selected' : ''}`}
              >
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>

          <div className="navigation">
            <button 
              onClick={() => goToQuestion(currentQuestionIndex - 1)}
              disabled={currentQuestionIndex === 0}
              className="btn btn-secondary"
            >
              Previous
            </button>
            
            {currentQuestionIndex < currentQuestions.length - 1 ? (
              <button 
                onClick={() => goToQuestion(currentQuestionIndex + 1)}
                className="btn btn-primary"
              >
                Next
              </button>
            ) : (
              <button 
                onClick={submitTest}
                disabled={answeredCount < currentQuestions.length}
                className="btn btn-success"
              >
                Submit Test ({answeredCount}/{currentQuestions.length} answered)
              </button>
            )}
          </div>

          <div className="question-nav">
            {currentQuestions.map((_, i) => (
              <button
                key={i}
                onClick={() => goToQuestion(i)}
                className={`nav-dot ${
                  i === currentQuestionIndex ? 'current' : 
                  userAnswers[currentQuestions[i].id] !== undefined ? 'answered' : ''
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
}

export default App;