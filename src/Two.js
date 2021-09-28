import React from "react";
import { Text, View, Pressable } from "react-native";
import { useSnapshot, subscribe } from "valtio";

import { addProductState } from "./One";

const Two = () => {
  const snap = useSnapshot(addProductState);
  const ref = React.useRef(snap.embalagem);

  addProductState.embalagem = "gal";

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>{snap.embalagem}</Text>
      <Text>{snap.fabricante}</Text>
      <Text>{snap.filiais}</Text>
    </View>
  );
};

export default Two;
