import React, { useState } from 'react';
import { View, StyleSheet  } from 'react-native';
import { TextInput, Button, Text , Modal } from 'react-native-paper';

const CreateEmployee = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.root}>
      <TextInput
        label="Name"
        value={name}
        style={styles.inputStyle}
        mode="outlined"
        theme={theme}
        onChangeText={setName}
        textColor="#fff"
        labelStyle={{ color: '#fff' }}
      />

      <TextInput
        label="Email"
        value={email}
        style={styles.inputStyle}
        mode="outlined"
        theme={theme}
        onChangeText={setEmail}
        textColor="#fff"
        labelStyle={{ color: '#fff' }}
      />

      <TextInput
        label="Phone"
        value={phone}
        style={styles.inputStyle}
        mode="outlined"
        theme={theme}
        onChangeText={setPhone}
        textColor="#fff"
        labelStyle={{ color: '#fff' }}
      />

      <TextInput
        label="Salary"
        value={salary}
        style={styles.inputStyle}
        mode="outlined"
        theme={theme}
        onChangeText={setSalary}
        textColor="#fff"
        labelStyle={{ color: '#fff' }}
      />

      <Button
        icon="account-plus"
        mode="contained"
        onPress={() => setModal(true)}
        style={styles.button}
      >
        upload Image
      </Button>

      <Button
        style={styles.inputStyle}
        icon="content-save"
        mode="contained"
        theme={theme}
        onPress={() => console.log('Saved')}
      >
        Save
      </Button>

      <Modal
        visible={modal}
        transparent={true}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalButton}>
              <Button 
              icon="camera" 
              mode="contained" 
              theme={theme}
              onPress={console.log('Camera pressed')}>
                Camera
              </Button>
              <Button icon="image-area" mode="contained" theme={theme} onPress={console.log('Gallery pressed')}>
                Gallery
              </Button>
            </View>
             <Button icon="cancel" theme={theme} onPress={() => setModal(false)}>
                Cancel
              </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const theme = {
  colors: {
    primary: '#8c6ae6',
    text: '#111827',
    placeholder: '#6b7280',
    background: '#ffffff',
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  inputStyle: {
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '60%',
  },
  modalText: {
    marginBottom: 16,
    fontSize: 16,
    color: '#111827',
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },

});

export default CreateEmployee;