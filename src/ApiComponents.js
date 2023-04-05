import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getFetch, getSuccess} from './ApiSlice';

const ApiComponents = () => {
  const dispatch = useDispatch();

  const getdata = useSelector(state => state.Api);

  useEffect(() => {
    dispatch(getSuccess());
  }, []);

  const renderData = ({item}) => {
    return (
      <View>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      {getdata.isLoading && (
        <Text
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '50%',
            fontSize: 50,
          }}>
          Loading...
        </Text>
      )}
      {getdata.error && <Text>Error: {getdata.error}</Text>}
      {!getdata.isLoading && !getdata.error && (
        <FlatList data={getdata.data} renderItem={renderData} />
      )}
    </View>
  );
};

export default ApiComponents;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
