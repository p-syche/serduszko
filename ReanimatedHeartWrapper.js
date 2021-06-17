import React, {useState} from 'react';
import type {Node} from 'react';
import {View, Pressable} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
} from 'react-native-reanimated';

import ReanimatedHeart from './ReanimatedHeart';

const ReanimatedHeartWrapper: () => Node = () => {
  const [liked, setIsLiked] = useState(false);
  const animatedScale = useSharedValue(1);

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: animatedScale.value,
        },
      ],
    };
  });

  const triggerLike = () => {
    setIsLiked(!liked);
    const springOptions = {
      damping: 8,
    };
    animatedScale.value = withSequence(
      withSpring(1.2, springOptions),
      withSpring(1, springOptions),
    );
  };

  return (
    <Pressable onPress={() => triggerLike()}>
      <Animated.View style={style}>
        <ReanimatedHeart filled={liked} />
      </Animated.View>
    </Pressable>
  );
};

export default ReanimatedHeartWrapper;
