import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { colors } from '../constants';
import {units} from '../constants/Units';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height:50,
    width:200,
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.WHITE,
    fontWeight: '600',
    fontSize: 16,
  },
});
