function findDutchVoice() {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((voice) => voice.lang.toLowerCase().startsWith('nl')) ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith('en')) ??
    null
  );
}

function useSpeech() {
  const speak = (text) => {
    if (typeof window === 'undefined' || !window.speechSynthesis || !text) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = findDutchVoice();

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = 'nl-NL';
    }

    utterance.rate = 0.92;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return { speak };
}

export default useSpeech;
