import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 10,
  },

  topoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  topoImagem: {
    width: 40,
    height: 40,
  },

  topoImageContainer: {
    backgroundColor: "white",
    borderRadius: 40,
    padding: 20,
  },

  topoTexto: {

    fontSize: 40,
    fontFamily: "Lato_900Black",

  },
  tituloTexto: {
    fontSize: 16,
    color: "#999",
    marginTop: -16,
    backgroundColor: "#ccc",
    paddingHorizontal: 16,
  },

  tituloContainer: {
    alignItems: "center",
    borderTopColor: "#888",
    borderTopWidth: 1,
    marginTop: 20,
  },

  listaContainer: {
    paddingTop: 20,
  },

  listaLinhaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,

  },

  card: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
    paddingVertical: 28,
    padding: 30,
    marginTop: 20

  },
  cardImage: {
    height: 120,

  },
  cardText: {
    fontSize: 18,
    paddingTop: 12,
    color: "#ddd"

  },
});

