import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [nombre, setNombre] = useState(" Anahi")
  const [apellido, setApellido] = useState("Faundez");
  const [mail, setMail] = useState("Ana@gmail.com")
  const [bio, setBio] = useState("Estudiante de programación apasionada por React Native y el desarrollo móvil.");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#c092cc" }}>
      <ScrollView contentContainerStyle= {styles.container}>
        <View style= {styles.header}>
          <Image
            source={require("../../assets/images/avatar.jpg")} 
            style= {styles.avatar}/>
          <Text style={styles.nombre}>{nombre}</Text>
          <Text style={styles.subtitulo}>Aprendiendo React Native</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Nombre</Text>
            <TextInput
             value={nombre}
             onChangeText={setNombre}
             style={styles.input}
             />
            <Text style={styles.label}>Apellido</Text>
              <TextInput
                value={apellido}
                onChangeText={setApellido}
                style={styles.input}
              />
              <Text style={styles.label}>Mail</Text>
              <TextInput
                value={mail}
                onChangeText={setMail}
                style={styles.input}
              />
              <Text style={styles.label}>Biografía</Text>
               <TextInput
                    value={bio}
                    onChangeText={setBio}
                    style={styles.input}                    
                    multiline
               />                   
        </View>
        <TouchableOpacity style={styles.boton} onPress={()=> alert("Perfil actualizado")}>
          <Text style={styles.botonTexto}> Guardar  </Text>
        </TouchableOpacity>
       </ScrollView>
      </SafeAreaView>
  );
}
const styles= StyleSheet.create({ 
  container: {padding:20, alignItems:"center"},
  header: {alignItems:"center",marginBottom:30},
  avatar: {width:120,height: 120, borderRadius: 60},
  nombre: {fontSize: 28, fontWeight: "bold", marginTop: 10},
  subtitulo: { fontSize: 14, color: "#720f86",alignSelf: "center", fontStyle: "italic", marginTop: 4 },
  card: {width:"100%", borderRadius: 8,backgroundColor: "#f9f9f9", padding:15},
  label: {fontWeight:"600", marginBottom: 5,color:"#823d3d"},
  input:{backgroundColor: "#fff", borderWidth: 1, borderColor:"#ddd", borderRadius:8, padding:10, fontSize:16},
  boton: {backgroundColor: "#720f86", paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, alignItems: "center", justifyContent: "center", marginTop: 20,               
    width: "100%"},    
  botonTexto: {color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: 16},
})
