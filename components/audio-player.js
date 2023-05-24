import React, { useRef } from 'react';
import { Player } from '@react-native-community/audio-toolkit';

const SoundPlayer = ({ audioPath }) => {
  const audioPlayerRef = useRef(null);

  const loadAudio = () => {
    if (!audioPlayerRef.current) {
      audioPlayerRef.current = new Player(audioPath, {
        autoDestroy: false,
      });
      audioPlayerRef.current.prepare((err) => {
        if (err) {
          console.log('Erro ao carregar o arquivo de áudio:', err);
        } else {
          console.log('Arquivo de áudio carregado com sucesso!');
        }
      });
    }
  };

  const playAudio = () => {
    // loadAudio(); // Load the audio before playing
    audioPlayerRef.current = new Player(audioPath);

    if (audioPlayerRef.current) {
      audioPlayerRef.current.play((err) => {
        if (err) {
          console.log('Erro ao reproduzir o áudio:', err);
        } else {
          console.log('Áudio reproduzido com sucesso!');
        }
      });
    }
  };

  const stopAudio = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.stop();
      audioPlayerRef.current = null;
      console.log('Áudio parado.');
    }
  };

  return { playAudio, stopAudio };
};

export default SoundPlayer;