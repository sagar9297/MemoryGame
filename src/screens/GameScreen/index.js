import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';

import styles from './style';

const GameScreen = props => {
  const [items, setItems] = useState(
    [
      {id: 1, stat: '', name: 'A'},
      {id: 1, stat: '', name: 'A'},
      {id: 2, stat: '', name: 'B'},
      {id: 2, stat: '', name: 'B'},
      {id: 3, stat: '', name: 'C'},
      {id: 3, stat: '', name: 'C'},
      {id: 4, stat: '', name: 'D'},
      {id: 4, stat: '', name: 'D'},
      {id: 5, stat: '', name: 'E'},
      {id: 5, stat: '', name: 'E'},
      {id: 6, stat: '', name: 'F'},
      {id: 6, stat: '', name: 'F'},
      {id: 7, stat: '', name: 'G'},
      {id: 7, stat: '', name: 'G'},
      {id: 8, stat: '', name: 'H'},
      {id: 8, stat: '', name: 'H'},
    ].sort(() => Math.random() - 0.5),
  );

  const [prev, setPrev] = useState(-1);
  const [counter, setCounter] = useState(0);
  const [matches, setMatches] = useState(0);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setItems([...items]);
      setCounter(counter + 1);
      setMatches(matches + 1);
      setPrev(-1);
    } else {
      items[current].stat = 'wrong';
      items[prev].stat = 'wrong';
      setItems([...items]);
      setCounter(counter + 1);
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = 'active';
      setItems([...items]);
      setCounter(counter + 1);
      setPrev(id);
    } else {
      check(id);
    }
  }

  const renderCards = ({item, index}) => {
    const correctStyle = () => {
      if (item.stat === 'correct') {
        return [styles.card, {backgroundColor: 'green'}];
      } else if (item.stat === 'wrong') {
        return [styles.card, {backgroundColor: 'red'}];
      } else {
        return [
          styles.card,
          {backgroundColor: item.stat === 'active' ? 'skyblue' : 'white'},
        ];
      }
    };

    const letter = () => {
      if (
        item.stat === 'correct' ||
        item.stat === 'active' ||
        item.stat === 'wrong'
      ) {
        return item.name;
      } else {
        return '?';
      }
    };

    return (
      <TouchableOpacity
        onPress={() => handleClick(index)}
        style={styles.cardContainer}>
        <View style={correctStyle()}>
          <Text style={styles.text}>{letter()}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Memory Game</Text>
      <FlatList
        data={items}
        renderItem={renderCards}
        numColumns={4}
        keyExtractor={item => item.id}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text2}>Attempts: {counter}</Text>
        <Text style={styles.text2}>Matches: {matches}</Text>
      </View>
    </View>
  );
};

export default GameScreen;
