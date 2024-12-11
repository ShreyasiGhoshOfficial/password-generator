//import logo from './logo.svg';
import React ,{useState} from 'react';
import './App.css';


    function App() {
      const [passwordLength, setPasswordLength] = useState(8); // Default length
      const [includeAlphabets, setIncludeAlphabets] = useState(true); // Default checked
      const [includeNumbers, setIncludeNumbers] = useState(false);
      const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
      const [password, setPassword] = useState('');
    
      const generatePassword = () => {
        const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
        let validChars = '';
        if (includeAlphabets) validChars += alphabets;
        if (includeNumbers) validChars += numbers;
        if (includeSpecialChars) validChars += specialChars;
    
        if (!validChars) {
          setPassword('Please select at least one option!');
          return;
        }
    
        const generatedPassword = Array.from({ length: passwordLength })
          .map(() => validChars[Math.floor(Math.random() * validChars.length)])
          .join('');
        setPassword(generatedPassword);
      };
    
      return (
        <div className="App">
          <h1>Password Generator</h1>
    
          <div>
            <label>Password Length:</label>
            <input
              type="number"
              value={passwordLength}
              onChange={(e) => setPasswordLength(parseInt(e.target.value) || 0)}
              min="1"
            />
          </div>
    
          <div>
            <label>
              <input
                type="checkbox"
                checked={includeAlphabets}
                onChange={(e) => setIncludeAlphabets(e.target.checked)}
              />
              Include Alphabets
            </label>
            <label>
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
              Include Numbers
            </label>
            <label>
              <input
                type="checkbox"
                checked={includeSpecialChars}
                onChange={(e) => setIncludeSpecialChars(e.target.checked)}
              />
              Include Special Characters
            </label>
          </div>
    
          <button onClick={generatePassword}>Generate Password</button>
    
          <div>
            <h2>Generated Password:</h2>
            <p>{password}</p>
          </div>
        </div>
      );
    }
    
    export default App;
    