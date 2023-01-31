import { Text,FlatList,StyleSheet,Image, View } from "react-native";

export default function list(props){
    const list = props.data;
    return (
        <FlatList 
            data={list}
            keyExtractor={(item) => item.id}
            renderItem ={({item})=> (
                <>
                    <View style={styles.container}>
                        <Image style={styles.image} source={{uri: item.link}} />
                        <View style={styles.text} >
                            <Text>{item.name}</Text>
                            <Text>{item.desc}</Text>
                        </View>
                        
                    </View>
                </>
            )} 
            
        />
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-start'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 20,
    },
});