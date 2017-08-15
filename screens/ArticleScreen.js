import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Platform, StatusBar, ActivityIndicator, ScrollView } from 'react-native';
import LikeButton from '../assets/btn_like.png';
import CommentButton from '../assets/btn_comment.png';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Title from '../assets/title_logo.png';
const DEVICE_WIDTH = Dimensions.get('window').width;

class ArticleScreen extends Component {

  static navigationOptions = ({navigation}) => {

    return {
      title: '게시글',
      header: <View style={{width: '100%', height:24, backgroundColor: '#ffffff'}}></View>,
      headerRight: (
       <View></View>
      ),
    }
  }


  render() {

    return (
      <View style={styles.container}>
        {Platform.OS == 'android' ?
          <StatusBar
           translucent={false}
           backgroundColor="#000000"
           barStyle="light-content"
         /> :
         <StatusBar
          translucent={false}
          backgroundColor="#FFFFFF"
          barStyle="dark-content"
        />
        }
        <View style={{width: DEVICE_WIDTH, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('home')}} style={{width: '20%', height: '100%', paddingLeft: DEVICE_WIDTH * 0.05, justifyContent: 'center'}}>
            <FontAwesome size={40} color={"#fc5a5a"} name="angle-left" />
          </TouchableOpacity>
          <View style={{width: '60%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{height: 40, resizeMode: 'contain'}} source={Title} />
          </View>
          <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>

          </View>
        </View>
        <View style={{flex: 1, width: DEVICE_WIDTH}}>
           <ScrollView>
             <View style={{width: DEVICE_WIDTH}}>
               <Text>dd</Text>
               <Image style={{width: '100%',height: 500, resizeMode: 'contain'}} source={{uri : "http://lunchlunch-whehdrms.c9users.io/images/ks_card1.png"}}/>
               <Text>dds</Text>
               {/* <Image style={{width: '100%', resizeMode: 'contain'}} source={{uri : "http://lunchlunch-whehdrms.c9users.io/images/ks_card2.png"}}/> */}
             </View>
           </ScrollView>
        </View>

        {/* <ScrollView contentContainerStyle={{width: DEVICE_WIDTH, flex: 1, alignItems: 'center'}}>
          <View style={{width: '100%', paddingTop: 20, minHeight: 70, borderBottomWidth: 1, borderColor: '#bdbdbd', alignItems: 'center'}}>
            <View style={{width: '90%', flexDirection: 'row', paddingBottom: 15}}>
              <Text>
                <Text style={{fontSize: 16, color: '#4a4a4a'}}>{this.state.post.title}</Text>
                {this.state.post.hits >= 100 ? (
                  <Text style={{color: '#ff5955', fontSize: 12}}>  HOT</Text>
                ) : (
                  <Text style={{color: '#ff5955', fontSize: 12}}></Text>
                )}
              </Text>
            </View>
            <View style={{width: '90%', flexDirection: 'row', paddingBottom: 7}}>
              <View style={{maxWidth: '50%', height: 14, flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', height: '100%'}}>
                  {this.state.post.gender == "m" ? (
                    <Text style={{fontSize: 5, color: '#00a5b1'}}>● </Text>
                  ) : (
                    <Text style={{fontSize: 5, color: '#ff5955'}}>● </Text>
                  )}
                </View>
                <View style={{height: '100%', justifyContent: 'center'}}>
                  <Text style={{color: '#a0a0a0', fontSize: 12}}> {this.state.post.nickname}  </Text>
                </View>
              </View>
              <View style={{height: 14, justifyContent: 'center', flex: 1}}>
                <Text style={{color: '#a0a0a0', fontSize: 12, textAlign: 'right'}}>
                  {this.state.post.created_at}  조회수 {this.state.post.hits}
                </Text>
              </View>

            </View>
          </View>
          <View style={{width: '100%', minHeight: 70, borderBottomWidth: 1, borderColor: '#bdbdbd', alignItems: 'center'}}>
            <View style={{width: '90%', paddingTop: 25, paddingBottom: 10}}>
              <Text>{this.state.post.content}</Text>
            </View>
            <View style={{width: '90%', paddingBottom: 15}}>

              <View style={{height: 30, width: '100%', justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={this.likePostToggle} style={{flexDirection:'row'}}>
                  <View style={{width: 20, height: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 16, height: 16, resizeMode: 'contain'}} source={LikeButton} />
                  </View>
                  <View style={{height: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 14, color: '#fc5a5a'}}>{this.state.post.likeCount} </Text>
                  </View>
                </TouchableOpacity>

                <View style={{width: 20, height: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image style={{width: 16, height: 16, resizeMode: 'contain'}} source={CommentButton} />
                </View>
                <View style={{height: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 14, color: '#00a5b1'}}>{this.state.post.commentCount} </Text>
                </View>
              </View>

            </View>
          </View>

        </ScrollView> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  settingMenu: {
    width: '100%',
    height: 50,

    borderBottomWidth: 2,
    borderColor: '#ebebeb',
    flexDirection: 'row',
  },
  settingIcon: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  settingSubmenu: {
    flex:6,
    justifyContent: 'center',
    // alignItems: 'center'
  },
  settingSubLink: {
    flex:2,
    justifyContent: 'center'
  },
  linkBox: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingLeft: 20
  },
  settingFont: {
    fontSize: 16
  }
});


const mapStateToProps = (state, ownProps) => {
  return {
    // 스토어에서 스테이트를 가져와 props로 받아 사용
    user: state.auth.user_token,
  };
};

// actions = { 액션1, 액션2, ... } 처럼 연결되고, this.props.액션명1 처럼 사용가능
const connectedArticleScreen  = connect(mapStateToProps, actions)(ArticleScreen);

export { connectedArticleScreen };
