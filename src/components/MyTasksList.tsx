import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';


interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  isBlackTheme: boolean;
}

interface HeaderFlatListProps {
  isBlackTheme: boolean;
}

function FlatListHeaderComponent({ isBlackTheme }: HeaderFlatListProps) {
  return (
    <View>
      <Text style={isBlackTheme ? styles.headerBlack : styles.header}>Minhas tasks</Text>
    </View>
  )
}

export function MyTasksList({ tasks, onLongPress, onPress, isBlackTheme }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={ isBlackTheme ? (item.done === true ? styles.taskButtonDoneBlack : styles.taskButtonBlack) : (item.done === true ? styles.taskButtonDone : styles.taskButton)}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View 
              testID={`marker-${index}`}
              style={ isBlackTheme ? (item.done === true ? styles.taskMarkerDoneBlack : styles.taskMarkerBlack) : (item.done === true && !isBlackTheme ? styles.taskMarkerDone : styles.taskMarker)}
            />
            <Text
              style={ isBlackTheme ? (item.done === true ? styles.taskTextDoneBlack : styles.taskTextBlack) : (item.done === true ? styles.taskTextDone : styles.taskText) }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent isBlackTheme={isBlackTheme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  headerBlack: {
    color: '#565BFF',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButtonBlack: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerBlack: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#565BFF',
    marginRight: 10
  },
  taskTextBlack: {
    color: '#E1E1E6',
  },
  taskButtonDoneBlack: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: '#151525',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDoneBlack: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#565BFF',
    marginRight: 10
  },
  taskTextDoneBlack: {
    color: '#E1E1E6',
    textDecorationLine: 'line-through',
    opacity: 0.6
  }
})