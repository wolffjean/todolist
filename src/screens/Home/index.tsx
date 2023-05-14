import { View , Text, TextInput, Image, TouchableOpacity, Alert, FlatList} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Task } from "../Task";

type Task = {
    task: string,
    isDone: boolean
}
export function Home(){
    const [listTask, setListTask] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState('');

    const createdTasksQty = listTask.length;
    const isDoneTasks = listTask.filter(t => t.isDone ===true).length;

    function toggleIsDone(task: Task){
       const index = listTask.findIndex(t => t.task === task.task);
       const tasks = [...listTask];
       if (task.isDone){
        tasks[index] = {task: task.task, isDone: false};
       } else {
        tasks[index] = {task: task.task, isDone: true};
       }
       setListTask(tasks);
    }


    function handleRemoveTask(desc: string){
        Alert.alert("Remover", `Remover a task ${desc}?`, [
            {
              text: "Sim",
              onPress: ()=> setListTask(prevState => prevState.filter(p => p.task !==desc))
            }, 
            {
              text:"Nao",
              style: "cancel"
            }
          ]);
    }

    function handleTaskAdd(){
        if(taskName.length< 0){
            return Alert.alert("Task nula", "Nao eh possivel criar uma task nula");
        }

        const isAlready = listTask.filter(task => task.task === taskName);
        
        if(isAlready.length > 0){
            return Alert.alert("Task ja existe", `Ja foi criada a task ${taskName} na lista`);
        }
        const newTask = 
        {
            task: taskName, 
            isDone: false
        };
       setListTask([...listTask, newTask]);
        setTaskName('');
    }
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
                    onChangeText={setTaskName}
                    value={taskName}
                />
                <TouchableOpacity 
                style={styles.button}
                onPress={handleTaskAdd}
                >
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tasks}>
                <View style={styles.summaryTask}>
                    <View style={styles.createdTasks}>
                        <Text style={styles.createdText}>Criadas</Text> 
                        <Text style={styles.qty}>{createdTasksQty}</Text>
                    </View>
                    <View style={styles.doneTasks}>
                        <Text style={styles.doneText}>Concluídas</Text> 
                        <Text style={styles.qty}>{isDoneTasks}</Text>
                    </View>
                </View>
                <View style={styles.list}>
                    <FlatList
                        data={listTask}
                        keyExtractor={item => item.task}
                        renderItem={({ item })=>(
                        <Task 
                            key={item.task} 
                            task={item} 
                            onRemove={() => handleRemoveTask(item.task)}
                            onChange={()=> toggleIsDone(item)}
                        />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={()=>(
                            <>
                                <View style={styles.listEmpty}>
                                    <Image
                                            source={require('../../../assets/Clipboard.png')} 
                                            style={styles.imageEmpty}
                                    />
                                    <Text style={styles.textEmptyBold}>
                                        Você ainda não tem tarefas cadastradas
                                    </Text>
                                    <Text style={styles.textEmpty}>
                                        Crie tarefas e organize seus itens a fazer
                                    </Text>
                                </View>
                            </>
                        )}
                    />
                </View>
            </View>
        </>
    )
}