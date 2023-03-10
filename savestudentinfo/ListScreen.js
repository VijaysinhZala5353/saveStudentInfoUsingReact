import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 5,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  column: {
    flex: 1,
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sortButton: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 5,
  },
  sortButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default function ListScreen({ route }) {
  const [students, setStudents] = useState(route.params.students);
  const [sortDirection, setSortDirection] = useState('ASC');

  const deleteStudent = sid => {
    const updatedStudents = students.filter(student => student.sid !== sid);
    setStudents(updatedStudents);
  };

  const sortStudents = () => {
    const sortedStudents = students.slice().sort((a, b) => {
      if (sortDirection === 'ASC') {
        return a.gpa.localeCompare(b.gpa);
      } else {
        return b.gpa.localeCompare(a.gpa);
      }
    });
    setStudents(sortedStudents);
    setSortDirection(sortDirection === 'ASC' ? 'DESC' : 'ASC');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student List</Text>
      <View style={styles.row}>
        <Text style={styles.column}>SID</Text>
        <Text style={styles.column}>First Name</Text>
        <Text style={styles.column}>Last Name</Text>
        <Text style={styles.column}>Major</Text>
        <Text style={styles.column}>GPA</Text>
        <Text style={styles.column}>Delete</Text>
      </View>
      <TouchableOpacity style={styles.row} onPress={sortStudents}>
        <Text style={styles.column}></Text>
        <Text style={styles.column}></Text>
        <Text style={styles.column}></Text>
        <Text style={styles.column}></Text>
        <Text style={styles.column}></Text>
        <View style={styles.sortButton}>
          <Text style={styles.sortButtonText}>{sortDirection === 'ASC' ? 'Sort ASC' : 'Sort DESC'}</Text>
        </View>
      </TouchableOpacity>
      {students.map(student => (
        <View key={student.sid} style={styles.row}>
          <Text style={styles.column}>{student.sid}</Text>
          <Text style={styles.column}>{student.firstName}</Text>
          <Text style={styles.column}>{student.lastName}</Text>
          <Text style={styles.column}>{student.major}</Text>
          <Text style={styles.column}>{student.gpa}</Text>
          <TouchableOpacity style={styles.column} onPress={() => deleteStudent(student.sid)}>
<View style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}