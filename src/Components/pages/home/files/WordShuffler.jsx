import React, { useEffect, useRef } from 'react';

const WordShuffler = ({ text, textColor, timeOffset, mixCapital, buttonActive }) => {
  const holderRef = useRef(null);

  useEffect(() => {
    const holder = holderRef.current;

    const getRandomColor = () => {
      /*const colors = [
        '#f44336', '#e91e63', '#9c27b0',
        '#673ab7', '#3f51b5', '#2196f3',
        '#03a9f4', '#00bcd4', '#009688',
        '#4caf50', '#8bc34a', '#cddc39',
        '#ffeb3b', '#ffc107', '#ff9800',
        '#ff5722', '#795548', '#9e9e9e',
        '#607d8b'
      ];
      const randNum = '#fff'*/
      // const randNum = Math.floor(Math.random() * colors.length);
      // return colors[randNum];
    };

    const getRandCharacter = (characterToReplace) => {
      if (characterToReplace === ' ') {
        return ' ';
      }
      
      /*const specialCharacters = [
        'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X',
        'Y', 'Z'
      ];*/
      const chars = [
        '!', '§', '$', '%',
        '&', '/', '(', ')',
        '=', '?', '_', '<',
        '>', '^', '°', '*',
        '#', '-', ':', ';', '~'
      ];
      const randNum = Math.floor(Math.random() * chars.length);
      const lowChoice = -.5 + Math.random();
      let picketCharacter = chars[randNum];
      let choosen = picketCharacter.toLowerCase();
      if (mixCapital) {
        choosen = lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
      }
      return choosen;
    };

    const generateSingleCharacter = (color, character) => {
      const span = document.createElement('span');
      span.innerHTML = character;
      return span;
    };

    const writeWord = (word) => {
      const currentWord = word.split('');
      const currentWordLength = currentWord.length;

      let currentTimeOffset = 0;
      let currentCharacter = 0;

      const interval = setInterval(() => {
        currentTimeOffset++;
        let newWord = [];

        if (currentTimeOffset === timeOffset && currentCharacter !== currentWordLength) {
          currentCharacter++;
          currentTimeOffset = 0;
        }
        
        for (let k = 0; k < currentCharacter; k++) {
          newWord.push(currentWord[k]);
        }

        for (let i = 0; i < currentWordLength - currentCharacter; i++) {
          newWord.push(getRandCharacter(currentWord[currentCharacter + i]));
        }

        holder.innerHTML = '';
        newWord.forEach((w, index) => {
          const color = index > currentCharacter ? getRandomColor() : textColor;
          holder.appendChild(generateSingleCharacter(color, w));
        });

        if (currentCharacter === currentWordLength) {
          clearInterval(interval);
        }
      }, 100); // Adjust speed here
    };

    writeWord(text);
  }, [text, textColor, timeOffset, mixCapital]);

  return <span className={buttonActive ? 'shuffle-text layer-active' : 'huffle-text'} ref={holderRef} />;
};

export default WordShuffler;
