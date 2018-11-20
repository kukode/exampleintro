import React,{Component} from 'react';

import AppIntro from 'react-native-app-intro';
import { AppRegistry, Alert } from 'react-native';


// const styles = StyleSheet.create({
//     image : {
//         width : 320,
//         height : 320
//     }
// })



export default class IntroScreen extends Component {

    static navigationOptions = {
        header: null
      };
    
    
      onSkipBtnHandle = (index) => {
        Alert.alert('Skip');
        console.log(index);
      }
      doneBtnHandle = () => {
        Alert.alert('Done');
        // this.props.navigation.navigate('Home')
      }
      nextBtnHandle = (index) => {
        Alert.alert('Next');
        console.log(index);
      }
      onSlideChangeHandle = (index, total) => {
        console.log(index, total);
      }
 
    render(){

        const pageArray = [{
            title: 'Page 1',
            description: 'Description 1',
            img: '../../assets/1.jpg',
            imgStyle: {
              height: 80 * 2.5,
              width: 109 * 2.5,
            },
            backgroundColor: '#fa931d',
            fontColor: '#fff',
            level: 10,
          }, {
            title: 'Page 2',
            description: 'Description 2',
            img: require('../../assets/1.jpg'),
            imgStyle: {
              height: 93 * 2.5,
              width: 103 * 2.5,
            },
            backgroundColor: '#a4b602',
            fontColor: '#fff',
            level: 10,
          }];
        
        return(
            <AppIntro
            onNextBtnClick={this.nextBtnHandle}
            onDoneBtnClick={this.doneBtnHandle}
            onSkipBtnClick={this.onSkipBtnHandle}
            onSlideChange={this.onSlideChangeHandle}
            pageArray={pageArray}
        />
            // <Text>hola</Text>
        )
    }
}
// AppRegistry.registerComponent('IntroScreen', () => IntroScreen);
