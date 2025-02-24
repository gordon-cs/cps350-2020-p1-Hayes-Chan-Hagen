import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    borderWidth: 1,
    padding: 15,
  },
  beginButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 20,
    //paddingLeft: 80,
    //paddingRight: 80,
    backgroundColor: 'white',
  },
  bottomBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonFormat: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageFormat: {
    flex: 5,
    flexDirection: 'row',
    marginVertical: 25,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#95adbe',
    flex: 1,
  },
  box: {
    backgroundColor: '#465881',
    flex: 1,
  },
  container2: {
    justifyContent: 'center',
    backgroundColor: '#465881',
    flex: 0.5,
  },
  container4: {
    justifyContent: 'center',
    backgroundColor: '#edf7fa',
    flex: 0.5,
  },
  placeholder: {
    paddingTop: 280,
    paddingBottom: 20,
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 7,
    paddingRight: 7,
  },
  verse: {
    fontSize: 17,
    textAlign: 'center',
    paddingLeft: 21,
    paddingRight: 21,
  },
  container3: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    color: 'black',
    justifyContent: 'flex-end',
    backgroundColor: '#f2f6f5',
    borderWidth: 1,
    borderColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  logo: {
    paddingBottom: 50,
    alignItems: 'center',
    paddingTop: 100,
  },
});

export default styles;
