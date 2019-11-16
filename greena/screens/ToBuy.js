import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

export default class ToBuyScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'To Buy',
  };

  render() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.toggleDrawer()}
          style={{marginTop: 30}}
        >
          <Text>
            Menu
          </Text>
        </TouchableOpacity>
        <View style = {styles.section}>
          <View style = {styles.title}>
            <Text style = {{fontWeight: 'bold'}}>
              Meat
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style = {styles.alternatives}>
            <View style = {styles.Item}>
              <View style = {styles.itemImage}>

              </View>
              <View style = {styles.itemDetails}>
                <Text>
                  lorum ipsum kda mna kda mlhih
                </Text>
              </View>
              <Text style = {styles.itemPrice}>
                $4.5
              </Text>
            </View>
            <View style = {styles.Item}>
              <View style = {styles.itemImage}>

              </View>
              <View style = {styles.itemDetails}>
                <Text>
                  lorum ipsum kda mna kda mlhih
                </Text>
              </View>
              <Text style = {styles.itemPrice}>
                $4.5
              </Text>
            </View>
            <View style = {styles.Item}>
              <View style = {styles.itemImage}>

              </View>
              <View style = {styles.itemDetails}>
                <Text>
                  lorum ipsum kda mna kda mlhih
                </Text>
              </View>
              <Text style = {styles.itemPrice}>
                $4.5
              </Text>
            </View>
            <View style = {styles.Item}>
              <View style = {styles.itemImage}>

              </View>
              <View style = {styles.itemDetails}>
                <Text>
                  lorum ipsum kda mna kda mlhih
                </Text>
              </View>
              <Text style = {styles.itemPrice}>
                $4.5
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style = {styles.section}>
          <View style = {styles.title}>
            <Text style = {{fontWeight: 'bold'}}>
              Milk
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style = {styles.alternatives}>
            <View style = {styles.Item}>
              <View style = {styles.itemImage}>

              </View>
              <View style = {styles.itemDetails}>
                <Text>
                  lorum ipsum kda mna kda mlhih
                </Text>
              </View>
              <Text style = {styles.itemPrice}>
                $4.5
              </Text>
            </View>
            <View style = {styles.Item}>
              <View style = {styles.itemImage}>

              </View>
              <View style = {styles.itemDetails}>
                <Text>
                  lorum ipsum kda mna kda mlhih
                </Text>
              </View>
              <Text style = {styles.itemPrice}>
                $4.5
              </Text>
            </View>
            <View style = {styles.Item}>
              <View style = {styles.itemImage}>

              </View>
              <View style = {styles.itemDetails}>
                <Text>
                  lorum ipsum kda mna kda mlhih
                </Text>
              </View>
              <Text style = {styles.itemPrice}>
                $4.5
              </Text>
            </View>
            <View style = {styles.Item}>
              <View style = {styles.itemImage}>

              </View>
              <View style = {styles.itemDetails}>
                <Text>
                  lorum ipsum kda mna kda mlhih
                </Text>
              </View>
              <Text style = {styles.itemPrice}>
                $4.5
              </Text>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity style = {styles.validateButton}>
          <Text style = {{color: 'white', fontSize: 30}}>V</Text>
        </TouchableOpacity>
      </View>
      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F0F0F0'
  },
  title:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 15,
    height: 40  
  },
  alternatives:{
    maxHeight: 200,
    alignContent: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  Item:{
    backgroundColor: '#FFF',
    borderWidth: 1,
    height: 200,
    width: 150,
    flexDirection: 'column',
    marginRight: 10,
  },
  itemImage:{
    flex: 7,
    borderBottomWidth: 1,
  },
  itemDetails: {
    flex: 2,
    margin: 10
  },
  itemPrice:{
    flex: 1,
    alignSelf: 'flex-end',
    margin: 10,
    color: '#FAA'
  },
  section: {
    marginBottom: 20
  },
  validateButton:{
    backgroundColor: 'green',
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 140,
    bottom: 30,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});