import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const ReanimatedHeart = ({filled, style, ...props}) => {
  const centerNonFilled = (
    <View style={[StyleSheet.absoluteFill, styles.fit]}>
      <View style={[styles.leftHeart, styles.heartShape, styles.emptyFill]} />
      <View style={[styles.rightHeart, styles.heartShape, styles.emptyFill]} />
    </View>
  );
  const fillStyle = filled ? styles.filledHeart : styles.empty;

  return (
    <Animated.View {...props} style={[styles.heart, style]}>
      <View style={[styles.leftHeart, styles.heartShape, fillStyle]} />
      <View style={[styles.rightHeart, styles.heartShape, fillStyle]} />
      {!filled && centerNonFilled}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  heart: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  filledHeart: {
    backgroundColor: '#031370',
  },
  fit: {
    transform: [{scale: 0.9}],
  },
  emptyFill: {
    backgroundColor: '#e9eaf2',
  },
  empty: {
    backgroundColor: '#1637f5',
  },
  leftHeart: {
    transform: [{rotate: '-45deg'}],
    left: 5,
  },
  rightHeart: {
    transform: [{rotate: '45deg'}],
    right: 5,
  },
});

export default ReanimatedHeart;
