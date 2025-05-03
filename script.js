function startRecording() {
    const transcriptEl = document.getElementById('transcript');
    const sentimentEl = document.getElementById('sentiment');
    const scoreEl = document.getElementById('score');
  
    // Simulate voice input and transcription (replace with Whisper API backend)
    const mockTranscript = "I am a data science enthusiast with experience in Python and machine learning.";
    transcriptEl.innerText = mockTranscript;
  
    // Simulate NLP sentiment analysis
    const sentimentResult = analyzeSentiment(mockTranscript);
    sentimentEl.innerText = sentimentResult.sentiment;
  
    // Simulate scoring
    const score = calculateScore(mockTranscript);
    scoreEl.innerText = `${score.technical}/10 (Tech), ${score.soft}/10 (Soft Skills)`;
  }
  
  function analyzeSentiment(text) {
    // Mock logic
    if (text.toLowerCase().includes("enthusiast")) {
      return { sentiment: "Positive 👍" };
    }
    return { sentiment: "Neutral 😐" };
  }
  
  function calculateScore(text) {
    // Mock scoring logic
    let tech = 7 + Math.floor(Math.random() * 3);  // 7 to 9
    let soft = 6 + Math.floor(Math.random() * 4);  // 6 to 9
    return { technical: tech, soft: soft };
  }
  