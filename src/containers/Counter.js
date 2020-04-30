import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions/counter';

const Counter = (props) => {
  const onIncrement = () => {
    props.increment({count: 10});
  };
  const onDecrement = () => {
    props.decrement({count: 5});
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onIncrement}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <Text>count : {props.count}</Text>
      <TouchableOpacity style={styles.button} onPress={onDecrement}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    flex: 0,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {
    padding: 10,
  },
});

const mapStateToProps = ({counter: {count}}) => ({
  count,
});
const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
