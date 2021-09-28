import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, View, Pressable } from "react-native";

import { proxy, useSnapshot } from "valtio";

export const addProductState = proxy({
  nome: "45-d",
  embalagem: "gal",
  quantidade: 5,
  fabricante: "generico",
  filiais: ["Edeia", "Padre", "Uruaçu"],
  precos: [
    { estado: "go", preco: 138 },
    { estado: "to", preco: 128 },
  ],
});

const One = () => {
  const snap = useSnapshot(addProductState);
  const navigation = useNavigation();

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>{snap.nome}</Text>
      <Text>{snap.embalagem}</Text>
      <Text>{snap.quantidade}</Text>
      <Pressable onPress={() => navigation.navigate('Two')} style={{ marginTop: 10, height: 50, width: '90%', marginHorizontal: '5%', backgroundColor: "#333", justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
          <Text style={{ color: "#fff" }}>Ir para a tela Two</Text>
      </Pressable>
    </View>
  );
};

export default One;
