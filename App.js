import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [policeMessage, setPoliceMessage] = useState("");
  const [ambulanceMessage, setAmbulanceMessage] = useState("");
  const [bombeiroMessage, setBombeiroMessage] = useState("");
  const [massacreMessage, setMassacreMessage] = useState("");
  const navbarItems = [
    { id: 1, text: 'Polícia', icon: 'police-badge', color: 'gold' },
    { id: 2, text: 'Ambulância', icon: 'medical-bag', color: 'red' },
    { id: 3, text: 'Bombeiros', icon: 'fire-truck', color: 'red' },
    { id: 4, text: 'Massacre', icon: 'school-outline', color: 'green' },
    { id: 5, text: 'Fale conosco', icon: 'phone', color: 'white' },
    { id: 6, text: 'Suporte', icon: 'headset', color: 'pink' },
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.navbarItem, { marginHorizontal: 15 }]}>
      <MaterialCommunityIcons name={item.icon} size={24} color={item.color} />
      <Text style={[styles.navbarItemText, { color: item.color }]}>{item.text}</Text>
    </View>
  );
  

  const policeOptions = [
    { key: '1', title: 'Ligar para a polícia', onPress: () => console.log('Ligando para a polícia...') },
    { key: '2', title: 'Enviar mensagem predefinida', onPress: () => console.log(`Enviando mensagem para a polícia`) },
    { key: '3', title: 'Enviar minha localização', onPress: () => console.log(`Enviando a sua localização para a polícia: ${policeMessage}`) },
  ];

  const ambulanceOptions = [
    { key: '1', title: 'Ligar para a ambulância', onPress: () => console.log('Ligando para a ambulância...') },
    { key: '2', title: 'Enviar mensagem predefinida', onPress: () => console.log('Mandando mensagem predefinada') },
    { key: '3', title: 'Enviar minha localização', onPress: () => console.log(`Enviando a sua localização para a ambulância: ${ambulanceMessage}`) },
  ];

  const bombeiroOptions = [
    { key: '1', title: 'Ligar para os bombeiros', onPress: () => console.log('Ligando para os bombeiros...') },
    { key: '2', title: 'Enviar mensagem predefinida', onPress: () => console.log('Mandando mensagem predefinada') },
    { key: '3', title: 'Enviar minha localização', onPress: () => console.log(`Enviando a sua localização para os bombeiros: ${bombeiroMessage}`) },
  ];

  const massacreOptions = [
    { key: '1', title: 'Ligar para o número de emergência (197)', onPress: () => console.log('ligando para a 197!') },
    { key: '2', title: 'Enviar mensagem predefinida', onPress: () => console.log(`Enviando mensagem pre-definida para 197`) },
    { key: '3', title: 'Enviar minha localização', onPress: () => console.log(`Enviando a sua localização para 197: ${massacreMessage}`) },
  ];

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Emergência</Text>
      </View>
      <FlatList
        data={navbarItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.navbar}
        nestedScrollEnabled={true}
      />
      <ScrollView>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="police-badge" size={96} color="gold" />
          <Text style={styles.iconText}>Polícia</Text>
          <View style={[styles.buttonContainer, { flexDirection: 'column' }]}>
            {policeOptions.map(item => (
              <TouchableOpacity style={styles.button} onPress={item.onPress} key={item.key}>
                <Text style={styles.buttonText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.messageText, { alignSelf: 'flex-start' }]}>Mensagem:</Text>
          <TextInput
            style={styles.messageInput}
            value={policeMessage}
            onChangeText={setPoliceMessage}
          />
           <Button title="Enviar mensagem" onPress={() => console.log('Mensagem enviada!')} />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="ios-medkit" size={96} color="red" />
          <Text style={styles.iconText}>Ambulância</Text>
          <View style={[styles.buttonContainer, { flexDirection: 'column' }]}>
            {ambulanceOptions.map(item => (
              <TouchableOpacity style={styles.button} onPress={item.onPress}key={item.key}>
                <Text style={styles.buttonText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.messageText, { alignSelf: 'flex-start' }]}>Mensagem:</Text>
          <TextInput
            style={styles.messageInput}
            value={ambulanceMessage}
            onChangeText={setAmbulanceMessage}
          />
           <Button title="Enviar mensagem" onPress={() => console.log('Mensagem enviada!')} />
        </View>
        <View style={styles.iconContainer}>
        <FontAwesome name="fire-extinguisher" size={96} color="red" />
          <Text style={styles.iconText}>Bombeiros</Text>
          <View style={[styles.buttonContainer, { flexDirection: 'column' }]}>
            {bombeiroOptions.map(item => (
              <TouchableOpacity style={styles.button} onPress={item.onPress}key={item.key}>
                <Text style={styles.buttonText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.messageText, { alignSelf: 'flex-start' }]}>Mensagem:</Text>
          <TextInput
            style={styles.messageInput}
            value={bombeiroMessage}
            onChangeText={setAmbulanceMessage}
          />
           <Button title="Enviar mensagem" onPress={() => console.log('Mensagem enviada!')} />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="ios-school-sharp" size={96} color="green" />
          <Text style={styles.iconText}>Massacre em escolas e faculdades</Text>
          <View style={[styles.buttonContainer, { flexDirection: 'column' }]}>
            {massacreOptions.map(item => (
              <TouchableOpacity style={styles.button} onPress={item.onPress}key={item.key}>
                <Text style={styles.buttonText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.messageText, { alignSelf: 'flex-start' }]}>Mensagem:</Text>
          <TextInput
            style={styles.messageInput}
            value={massacreMessage}
            onChangeText={setMassacreMessage}
          />
         
           <Button title="Enviar mensagem" onPress={() => console.log('Mensagem enviada!')} />
        </View>
      </ScrollView>

     
  

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15202B',
  },
  header: {
    height: 60,
    backgroundColor: '#192734',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F8FF'
  },
  headerText: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#F8F8FF',
  },
  navbar: {
    height: 60,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 30,
    backgroundColor: '#192734',
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 0,
  },
  iconText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 10,
    color: '#F8F8FF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
    width: '90%',
  },
  
  button: {
    backgroundColor: '#1DA1F2',
    borderWidth: 1,
    borderColor: 'dark-blue',
    borderRadius: 8,
    padding: 10,
    margin: 6,
  },
  buttonText: {
    color: '#1C1C1C',
    fontSize: 16,
  },
  
  
  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 40,
    color: '#F8F8FF',

  },
  messageInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    color: '#F8F8FF',

  },
});