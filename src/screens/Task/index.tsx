import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { styles } from './styles';

type Props = {
    task: Task;
    onRemove: ()=> void;
}
type Task = {
    task: string,
    isDone: boolean
}

export function Task({ task, onRemove }: Props){

    return (
        <View style={styles.container}>
            <Checkbox value={false} />
            <Text style={styles.textTask}>{task.task}</Text>
            <TouchableOpacity>
            <Image 
                source={require('../../../assets/trash.png')}
            />
            </TouchableOpacity>
        </View>
    )
}