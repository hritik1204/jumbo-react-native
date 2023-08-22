import React from "react";
import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = width;
const guidelineBaseHeight = height;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };

console.log(width, height);
