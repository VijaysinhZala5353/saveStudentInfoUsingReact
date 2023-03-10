import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default function HomeScreen({ navigation }) {
  const [students, setStudents] = useState([]);

  const [sid, setSid] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [major, setMajor] = useState('');
  const [gpa, setGpa] = useState('');

  const saveStudentInfo = () => {
    const newStudent = { sid, firstName, lastName, major, gpa };
    setStudents([...students, newStudent]);
    console.log(`Student's info saved successfully.`);
    setSid('');
    setFirstName('');
    setLastName('');
    setMajor('');
    setGpa('');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="SID" value={sid} onChangeText={text => setSid(text)} />
      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={text => setFirstName(text)} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={text => setLastName(text)} />
      <TextInput style={styles.input} placeholder="Major" value={major} onChangeText={text => setMajor(text)} />
      <TextInput style={styles.input} placeholder="GPA" value={gpa} onChangeText={text => setGpa(text)} />
      <TouchableOpacity style={styles.button} onPress={saveStudentInfo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('List', { students })}>
        <Text style={styles.buttonText}>Show List</Text>
      </TouchableOpacity>
    </View>
  );
}
