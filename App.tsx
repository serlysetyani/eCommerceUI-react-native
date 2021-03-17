import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.navbarContainer}>
        <Image source={require('./assets/icons/menu-variant.png')} style={{ width: 24, height: 24 }} />
        <Image source={require('./assets/images/Logo.png')} style={{ width: 83.33, height: 25 }} />
        <Image source={require('./assets/images/Avatar.png')} style={{ width: 35, height: 35 }} />
      </View>

      <View style={styles.greetingsContainer}>
        <Text style={{ fontSize: 16 }}>Hi, Andrea</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingTop: 5 }}>What are you looking for{'\n'}today?</Text>
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#BABABA" style={{ paddingRight: 12 }} />
        <TextInput placeholder="Search headphone" />
      </View>

      <View style={styles.productAreaContainer}>
        <View style={styles.bannerContainer}>
          <View style={styles.bannerText}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom:28 }}>TMA-2{'\n'}Modular{'\n'}Headphone</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#0ACF83' }}>Shop now  ⟩</Text>
          </View>
          <Image source={require('./assets/images/banner.png')} style={{ width: 117, height: 135 }} />
        </View>
        <View style={styles.featuredProducts}>
          <Text style={{fontSize: 16, fontWeight: '100'}}>Featured Products</Text>
          <Text style={{fontSize: 14, color: '#7F7F7F'}}>See All</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 36
  },
  navbarContainer: {
    width: '100%',
    height: 35,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  greetingsContainer: {
    paddingTop: 29,
    paddingHorizontal: 24,
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: '#BABABA',
    borderRadius: 10,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 25,
    marginHorizontal: 24
  },
  productAreaContainer: {
    width: '100%',
    flex: 1,
    marginTop: 25,
    backgroundColor: '#FAFAFA',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30
  },
  bannerContainer: {
    width: 326,
    height: 178,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 24,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 24,
    alignItems:'center',
    justifyContent: 'space-between'
  },
  featuredProducts:{
    marginHorizontal: 24,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
