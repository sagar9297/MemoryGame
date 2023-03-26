import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '25%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
  text2: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
    position: 'absolute',
    top: height - 100,
  },
});

export default styles;
