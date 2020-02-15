import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bottomBar: {
          flex: 1,
          flexDirection: 'row',
          justifyContent:'center',
          },
    purposeB: { 
          flex: 1, 
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center'
          },
    styleB: { 
          flex:  1, 
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center'
          },
    fontB: { 
          flex:  1, 
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center'
          },
    previewB: { 
          flex: 1, 
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center'
          },
    container: {
          justifyContent: "center",
          backgroundColor: '#95adbe',
          flex: 1
          },
    placeholder: {
          paddingTop: 280,
          paddingBottom: 20,
          fontSize: 15,
          textAlign: 'center',
          paddingLeft: 7,
          paddingRight: 7,
          //fontFamily: 'AmaticSC-Regular',   //how to add fonts
          },
    verse: {
          fontSize: 17,
          textAlign: 'center',
          paddingLeft: 21,
          paddingRight: 21,
          },
    container3: {
          //flex: 1,
          fontSize: 15,
          textAlign: 'center',
          fontWeight: 'bold',
          },
    buttonStyle: {
        color: 'black',
        justifyContent: 'flex-end',
        backgroundColor:'#f2f6f5',
        borderWidth: 1,
        borderColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10 
      },
      logo: {
        alignItems: 'center',    
        paddingTop: 50,
      },
    }
  );

  export default styles;