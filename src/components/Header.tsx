import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

interface HeaderProps {
  isBlackTheme: boolean;
}

export function Header({isBlackTheme }: HeaderProps) {
  return (
    <View style={ isBlackTheme ? styles.headerBlack : styles.header}>
      <Text style={ isBlackTheme ? styles.headerTextBlack : styles.headerText}>to.</Text>
      <Text style={[ isBlackTheme ? styles.headerTextBlack : styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  headerBlack: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#191932',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerTextBlack: {
    fontSize: 24,
    color: '#e1e1e6',
    fontFamily: 'Poppins-Regular',
  }
});
