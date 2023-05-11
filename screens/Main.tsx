/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider, Box } from '@react-native-material/core';
import { categories, questions } from '../mocks/questionsData';
import { Category } from '../components';

const Main: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const handleCategoryClick = (id: number) => {
    setSelectedCategoryId(id === selectedCategoryId ? null : id);
  };

  const filteredQuestions = selectedCategoryId
    ? questions.filter((q) => q.category === categories.find((c) => c.id === selectedCategoryId)?.name)
    : questions;

  return (
    <View style={{ flex: 1 }}>
      <Box>
        {categories.map((category) => (
          <Category handleClick={() => handleCategoryClick(category.id)} name={category.name} key={category.id} />
        ))}
      </Box>
      <Box>
        {filteredQuestions.map((question, index) => {
          return (
            <React.Fragment key={index}>
              <Text style={styles.baseText}>{question.text}</Text>

              <Divider />
            </React.Fragment>
          )
        })}
      </Box>
    </View>
  );
};


const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    color: 'black',
    fontSize: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Main;
