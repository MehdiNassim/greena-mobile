import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Picker
} from 'react-native';

export default class MainScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = {
      textinput: "",
      searchUrl: this.props.searchUrl,
      criterian : "Recent"
    };
  }
  _onChangeText(e) {
    this.setState({ textinput: e.target.value });
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.topBar}>
          <TouchableOpacity
            onPress={() => this.props.navigation.toggleDrawer()}
            style={styles.sideBar}
            >
              <Text>
                Menu
              </Text>
          </TouchableOpacity>
          <TextInput
            underlineColorAndroid="transparent"
            style={[styles.searchInput, styles.shadowInput]}
            placeholder="What would you like to buy"
            clearButtonMode="always"
            value={this.state.textinput}
            onChange={e => this._onChangeText(e)}
          ></TextInput>
        </View>
        <View style = {styles.bottomPart}>
        <View style = {styles.title}>
          <Text style = {{fontWeight: 'bold'}}>
            To buy list
          </Text>
          <TouchableOpacity>
            <Text style = {{color: 'green', fontWeight: 'bold'}}>
              BUY
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          style = {styles.buyList}>
          <View style = {styles.buyListItem}>
            <View style = {styles.buyListItemImage}>
            </View>
            <Text style = {styles.buyListItemName}>
              Milk
            </Text>
          </View>
          <View style = {styles.buyListItem}>
            <View style = {styles.buyListItemImage}>
            </View>
            <Text style = {styles.buyListItemName}>
              Rice
            </Text>
          </View>
          <View style = {styles.buyListItem}>
            <View style = {styles.buyListItemImage}>
            </View>
            <Text style = {styles.buyListItemName}>
              Eggs
            </Text>
          </View>
          <View style = {styles.buyListItem}>
            <View style = {styles.buyListItemImage}>
            </View>
            <Text style = {styles.buyListItemName}>
              Peanuts
            </Text>
          </View>
          <View style = {styles.buyListItem}>
            <View style = {styles.buyListItemImage}>
            </View>
            <Text style = {styles.buyListItemName}>
              Milk
            </Text>
          </View>
          <View style = {styles.buyListItem}>
            <View style = {styles.buyListItemImage}>
            </View>
            <Text style = {styles.buyListItemName}>
              Milk
            </Text>
          </View>
        </ScrollView>
        <View style = {styles.criterian}>
          <Picker 
            selectedValue={this.state.criterian}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({criterian: itemValue})
            }>
            <Picker.Item label="Recent" value = "recent"/>
            <Picker.Item label="All" value = "all"/>
          </Picker>
        </View>
        <View style = {styles.title}>
          <Text style = {{fontWeight: 'bold'}}>
            Categories
          </Text>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 30
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingRight: 15,
    paddingLeft: 15
  },
  sideBar: {
    flex: 1,
    
  },
  searchBar:{
    flex : 8,
    width: '100%'
  },
  searchInput: {
    flex: 4,
    paddingLeft: 15,
    paddingRight: 15,
    minWidth: 100,
    fontFamily: "Lato-Regular",
    backgroundColor: "#F0F0F0"
  },
  shadowInput: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5
  },
  bottomPart:{
    flex: 13,
    backgroundColor: "#F0F0F0"
  },
  title:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 15,
    height: 40  
  },
  buyList: {
    backgroundColor: '#FFF',
    maxHeight: 120,
    alignContent: 'center',
    width: '95%',
    borderWidth: 1,
    alignSelf: 'center'
  },
  buyListItem:{
    height: 120,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buyListItemImage: {
    height: 70,
    width: 70,
    borderRadius: 200,
    borderWidth: 1,
  },
  buyListItemName:{
  },
  criterian:{
  width: '95%',
  alignSelf: 'center',
  backgroundColor: '#FFF',
  borderWidth: 1,
  marginTop: 15
  }
});