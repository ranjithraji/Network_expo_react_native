import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IssueCard from './src/Containers/IssueCard/IssueCard';
import Main from './src/MainRoot/Root'
import Issues from './src/Screens/Issues';
export default function App() {
  return (
    <Issues />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
