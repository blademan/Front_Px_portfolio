import audioUrl from '../../Assets/img/Audio/audio.mp3';
import { useState, useEffect } from 'react';

export default function SoundButton() {
  const [audio] = useState(new Audio(audioUrl));
  const [isPlayAudio, setPlayAudio] = useState(false);

  const play = () => {
    setPlayAudio(!isPlayAudio);
  };

  useEffect(() => {
    isPlayAudio ? audio.play() : audio.pause();
  }, [isPlayAudio, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlayAudio(false));
    return () => {
      audio.removeEventListener('ended', () => setPlayAudio(false));
    };
  }, [audio]);

  return (
    <button
      className="hidden md:fixed md:inline-block top-40 right-5 px-2 py-1 bg-firstColor text-white  text-xl  shadow-md hover:bg-firstColorAlt hover:shadow-lg  rounded-md  z-99 w-[38px] h-[38px] "
      onClick={play}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6' ${isPlayAudio ? 'w-6 h-6 animate-pulse' : null}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    </button>
  );
}
