import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { styles } from './styles';

type Props = {
    task: Task;
    onRemove: ()=> void;
    onChange: () =>void;
}
type Task = {
    task: string,
    isDone: boolean
}

export function Task({ task, onRemove, onChange }: Props){

    return (
        <View style={styles.container}>
            <Checkbox 
                value={task.isDone} 
                onValueChange={onChange}
            />
            <Text style={styles.textTask}>{task.task}</Text>
            <TouchableOpacity onPress={onRemove}>
            <Image 
                source={require('../../../assets/trash.png')}
            />
            </TouchableOpacity>
        </View>
    )
}