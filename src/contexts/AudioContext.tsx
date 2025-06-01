import React, { createContext, useContext, useState, useRef, ReactNode } from 'react';
import { Audio } from 'expo-av';
import { ISongList } from '../types/common.types';

// Define the extended song interface with audio URL
export interface ISongWithAudio extends ISongList {
  url: string;
}

interface AudioContextType {
  currentSong: ISongWithAudio | null;
  isPlaying: boolean;
  position: number;
  duration: number;
  isLoading: boolean;
  volume: number;
  playSound: (song: ISongWithAudio) => Promise<void>;
  pauseSound: () => Promise<void>;
  resumeSound: () => Promise<void>;
  stopSound: () => Promise<void>;
  seekTo: (position: number) => Promise<void>;
  setVolume: (volume: number) => Promise<void>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

interface AudioProviderProps {
  children: ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<ISongWithAudio | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolumeState] = useState(1.0);
    const soundRef = useRef<Audio.Sound | null>(null);
  const positionUpdateInterval = useRef<number | null>(null);

  const updatePosition = async () => {
    if (soundRef.current) {
      try {
        const status = await soundRef.current.getStatusAsync();
        if (status.isLoaded) {
          setPosition(status.positionMillis || 0);
          setDuration(status.durationMillis || 0);
          
          // Check if the track has finished
          if (status.didJustFinish) {
            setIsPlaying(false);
            setPosition(0);
            if (positionUpdateInterval.current) {
              clearInterval(positionUpdateInterval.current);
            }
          }
        }
      } catch (error) {
        console.error('Error updating position:', error);
      }
    }
  };

  const startPositionUpdate = () => {
    if (positionUpdateInterval.current) {
      clearInterval(positionUpdateInterval.current);
    }
    positionUpdateInterval.current = setInterval(updatePosition, 1000);
  };
  const stopPositionUpdate = () => {
    if (positionUpdateInterval.current) {
      clearInterval(positionUpdateInterval.current);
      positionUpdateInterval.current = null;
    }
  };

  const playSound = async (song: ISongWithAudio) => {
    try {
      setIsLoading(true);
      
      // Set audio mode for playback
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        shouldDuckAndroid: true,
      });

      // If there's already a sound playing, stop it
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }

      // Create and load new sound
      const { sound } = await Audio.Sound.createAsync(
        { uri: song.url },
        { shouldPlay: true, volume },
        updatePosition
      );

      soundRef.current = sound;
      setCurrentSong(song);
      setIsPlaying(true);
      setPosition(0);
      startPositionUpdate();

      console.log(`Playing: ${song.title}`);
    } catch (error) {
      console.error('Error playing sound:', error);
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  };

  const pauseSound = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
        stopPositionUpdate();
      }
    } catch (error) {
      console.error('Error pausing sound:', error);
    }
  };

  const resumeSound = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.playAsync();
        setIsPlaying(true);
        startPositionUpdate();
      }
    } catch (error) {
      console.error('Error resuming sound:', error);
    }
  };

  const stopSound = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        setIsPlaying(false);
        setPosition(0);
        stopPositionUpdate();
      }
    } catch (error) {
      console.error('Error stopping sound:', error);
    }
  };

  const seekTo = async (seekPosition: number) => {
    try {
      if (soundRef.current) {
        await soundRef.current.setPositionAsync(seekPosition);
        setPosition(seekPosition);
      }
    } catch (error) {
      console.error('Error seeking:', error);
    }
  };

  const setVolume = async (newVolume: number) => {
    try {
      if (soundRef.current) {
        await soundRef.current.setVolumeAsync(newVolume);
      }
      setVolumeState(newVolume);
    } catch (error) {
      console.error('Error setting volume:', error);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        currentSong,
        isPlaying,
        position,
        duration,
        isLoading,
        volume,
        playSound,
        pauseSound,
        resumeSound,
        stopSound,
        seekTo,
        setVolume,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
