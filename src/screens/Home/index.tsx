import { View , Text, TextInput, Image, TouchableOpacity} from "react-native";
import { styles } from "./styles";

export function Home(){

    return (
    <>
        <View style={styles.container}>
                <Image 
                    source={require('../../../assets/Logo.png')} 
                    style={styles.logoImage}    
                />
        </View>
        <View style={styles.form}>
            <TextInput 
                style={styles.inputTask}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#6B6B6B"
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.tasks}>
            <Text>Criadas</Text>
            <Text>{1}</Text>
            <Text>Concluidas</Text>
            <Text>{1}</Text>
        </View>
    </>
)
       
}