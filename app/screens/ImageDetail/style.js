import { Dimensions } from "react-native";
import colors from "../../config/colors";

export default {
  cardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  coverImage: {
    height: Dimensions.get("window").width * (3 / 4),
    width: Dimensions.get("window").width - 20,
  },
  headerContainer: {
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  scroll: {
    backgroundColor: "#FFF",
    marginTop: 15,
    // top: 10,
  },
  productRow: {
    flex: 1,
    padding: 20,
    marginBottom: 100,
  },
  footer: {
    alignItems: "center",
    backgroundColor: "blue",
    bottom: 10,
    flex: 0.1,
    flexDirection: "row",
    height: 65,
    left: 0,
    right: 0,
  },
  buttonFooter: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0CC5F2",
  },
  navigatorButton: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
  },
  navigatorText: {
    alignItems: "flex-start",
    color: colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
  },
  borderCenter: {
    borderColor: "#FFA890",
    borderWidth: 0.5,
    height: 55,
  },
  textFooter: {
    alignItems: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  priceText: {
    color: colors.secondary,
    fontSize: 36,
    fontWeight: "400",
    marginBottom: 20,
  },
  detailText: {
    color: colors.secondary,
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 4,
  },
  subDetailText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: "100",
    lineHeight: 28,
  },
  descriptionText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    elevation: 10,
    backgroundColor: "white",
    margin: 5,
    //borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  controlBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  controlBarTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
};
