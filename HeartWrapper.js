import React, {useState} from 'react';
import type {Node} from 'react';
import {View, Pressable, Animated} from 'react-native';

import Heart from './Heart';
import ReanimatedHeart from './ReanimatedHeart';

const HeartWrapper: () => Node = () => {
  const [liked, setIsLiked] = useState(false);
  const [scale, setScale] = useState(new Animated.Value(1));

  const bouncyHeart = scale.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0.8, 1],
  });

  const triggerLike = () => {
    setIsLiked(!liked);
    Animated.spring(scale, {
      toValue: 2,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      scale.setValue(0);
    });
  };

  return (
    <Pressable onPress={() => triggerLike()} style={{marginBottom: 40}}>
      <Animated.View style={{transform: [{scale: bouncyHeart}]}}>
        <Heart filled={liked} />
      </Animated.View>
    </Pressable>
  );
};

export default HeartWrapper;
