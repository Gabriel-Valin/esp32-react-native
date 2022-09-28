import React, { useState } from "react";
import { ColorPicker, fromHsv } from "react-native-color-picker";
import {
  ref,
  onValue,
  update,
} from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getConfigFibrease } from "../utils/getConfigFirebase";

export default function RGB() {
  const convertHexToRGB = (hex: string) => {
    const start = parseInt(hex[1] + hex[2], 16)
    const middle = parseInt(hex[3] + hex[4], 16)
    const end = parseInt(hex[5] + hex[6], 16)
    return [start, middle, end]
  }
  const [rgb, setRgb] = useState<number[]>([0, 153, 255])
  const app = initializeApp(getConfigFibrease());
  const database = getDatabase(app);

  const sendColors = (color: string) => {
    setRgb(convertHexToRGB(color))
    update(ref(database), { 'rgb/start': rgb![0] })
    update(ref(database), { 'rgb/middle': rgb![1] })
    update(ref(database), { 'rgb/end': rgb![2] })
  }

  return (
    <ColorPicker
      onColorChange={color => sendColors(fromHsv(color))}
      style={{ flex: 1 }}
      hideSliders={true}
    />
  )
}