import React, {useState} from 'react';
import type {Node} from 'react';
import {View, Pressable} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
  useDerivedValue,
  interpolateColor,
} from 'react-native-reanimated';

import ReanimatedHeart from './ReanimatedHeart';

const ReanimatedHeartWrapper: () => Node = () => {
  const [liked, setIsLiked] = useState(false);
  const animatedScale = useSharedValue(0);

  // const style = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         scale: withSpring(
  //           animatedScale.value,
  //           {
  //             damping: 3,
  //             stiffness: 80,
  //           },
  //           () => {
  //             return (animatedScale.value = 1);
  //           },
  //         ),
  //       },
  //     ],
  //   };
  // });

  const rotateStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      animatedScale.value,
      [0, 2],
      [1, 0.8],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale: rotate}],
    };
  });

  // const backgroundStyle = useAnimatedStyle(() => {
  //   const backgroundColor = interpolateColor(
  //     translateX.value,
  //     [0, SLIDER_RANGE],
  //     ['rgb(129,212,250)', 'rgb(3,169,244)'],
  //   );

  //   return {
  //     backgroundColor,
  //   };
  // });

  const triggerLike = () => {
    setIsLiked(!liked);
    animatedScale.value = 2;
  };

  return (
    <Pressable onPress={() => triggerLike()}>
      <Animated.View style={[rotateStyle]}>
        <ReanimatedHeart filled={liked} />
      </Animated.View>
    </Pressable>
  );
};

export default ReanimatedHeartWrapper;
