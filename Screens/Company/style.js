import { StyleSheet, Dimensions } from 'react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  brand: {
    color: 'white',
    paddingTop: 30,
    backgroundColor: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  header: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#131212ed',
    minWidth: 300,
    minHeight: 300,
    paddingBottom: 40
  },
  headerElements: {
    width: Dimensions.get('window').width / 2 - 10,
    // backgroundColor: 'red',
    minHeight: 200,
    marginBottom: 10,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  tokkenTimmer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    // position: 'relative',
    minWidth: 300,
    minHeight: 310
  },
  cardContainerOverlay: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: -35,
    zIndex: 1,
    position: 'relative',
    // backgroundColor: 'yellow',
    maxWidth: Dimensions.get('window').width - 5,
    minWidth: 345,
    elevation: 1,
    height: Dimensions.get('window').width
  },
  card: {
    zIndex: 5,
    padding: 5,
    width: Dimensions.get('window').width / 2 - 10,
    // backgroundColor: 'green',
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
    shadowOpacity: 5,
    height: Dimensions.get('window').width / 2,
    marginTop: 10,
    borderRadius: 5
  },
  footer: {
    zIndex: 0,
    backgroundColor: '#131212ed',
    top: -8,
    minWidth: 300,
    minHeight: 300
  },
  borderTopLightGrey: {
    borderTopColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  addTokkensContainer: {}
})
const stepIndicatorCustomStyles = {
  stepIndicatorSize: 40,
  currentStepIndicatorSize: 55,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
  stepBadgeStyle: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    minHeight: 35
  },
  stepText: {
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 5,
    marginRight: 10
  }
}
const customStyles = {
  stepIndicator: { ...stepIndicatorCustomStyles }
}
export { customStyles }
export default styles