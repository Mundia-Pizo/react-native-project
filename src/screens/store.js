import React from 'react'
import {Text,
        FlatList, 
        TouchableOpacity,
        View, 
        StyleSheet,
        Image,
        Button,
        ScrollView
        } from 'react-native'



export default class Store extends React.Component{

 static naviagtionOptions={
     title: "flip Store",
 };
   state={
       data:[
           {proname:'laptop 1', prod_price:'$234'},
           {proname:'laptop 2', prod_price:'$240'},
           {proname:'laptop 3', prod_price:'$194'},
           {proname:'laptop 4', prod_price:'$75.3'},
           {proname:'laptop 5', prod_price:'$690'},
           {proname:'laptop 6', prod_price:'$497'},
           {proname:'laptop 7', prod_price:'$34'},
           {proname:'laptop 8', prod_price:'$27.5'},
           {proname:'laptop 9', prod_price:'$190'},
           {proname:'laptop 10',prod_price:'$140'},
       ]
           
   };
//    fetchData=async()=>{
//          const response = await fetch(
//              'https://randomuser.me/api/?results=5', 
//          );
//          const products = await response.json();
//          this.setState({data:products});
//    };
//    componentDidMount(){
//        this.fetchData();
//    };
    render(){
        return(
           <View style={styles.container}>
            <View style={{height:120}}>
                <View style={{flex:1, flexDirection:'row',justifyContent:'space-between', paddingHorizontal: 10}}>
                    <Text>Active Blogs   </Text>
                    <Text>See All</Text>
                </View>
             <View style={{flex:4, paddingHorizontal:10, paddingVertical:2}}>
              <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                  alignItems:'center',

              }}
              >
<Image
                  source={require('../images/mundia.jpg')}
                  style={styles.scrollImagestyle}/>

<Image
                  source={require('../images/hey.jpg')}
                  style={styles.scrollImagestyle}/>
<Image
                  source={require('../images/hai.jpg')}
                  style={styles.scrollImagestyle}/>


<Image
                  source={require('../images/wow.jpg')}
                  style={styles.scrollImagestyle}/>

<Image
                  source={require('../images/miniver.jpg')}
                  style={styles.scrollImagestyle}/>

<Image
                  source={require('../images/stacy1.jpg')}
                  style={styles.scrollImagestyle}/>

<Image
                  source={require('../images/miniver3.jpg')}
                  style={styles.scrollImagestyle}/>

<Image
                  source={require('../images/miniver1.jpg')}
                  style={styles.scrollImagestyle}/>
              </ScrollView>
              </View>

            </View>
              <FlatList
              data ={this.state.data}
              renderItem={
                  ({item})=>
                  <View>
                    
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Payment', {id:item.proname})}>
                     <View style={styles.productBox}>

                       <Text style={styles.productText}>{item.proname}</Text>
                       <Image
                          style={{width:'100%', height:255, paddingVertical:10, paddingBottom:10}}
                            source = {require('../images/laptop.png')}
                               />
                    </View>
                  </TouchableOpacity>
                  <Text style={[styles.productText, {textAlign:'center'}]}>{item.prod_price}</Text>
                  <Button
                    title='Buy This'
                       onPress={()=> this.props.navigation.navigate('Payment',{id:item.id})}
                           style={{backgroundColor:'orange'}}/>
                  </View>
              }

              keyExtractor={(item, index) => item.proname}
              />
           </View>
         
        );
    }
}
const styles =StyleSheet.create({
    container:{
        flexGrow:1,
        backgroundColor:'rgba(200,200,200,0.8)',
        paddingLeft:5,
        paddingRight:5,
        
    },
    textStyle:{
        color:'blue',
        fontSize: 25,
        fontWeight:'bold',
    },
    productBox:{
        borderColor: 'rgba(255, 200, 200, 0.8)',
        height: 300,
        width:'100%',
        borderWidth:2,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        paddingVertical:10,
    },
    productText:{
        fontSize: 16,
        fontWeight:'bold',
        color:'brown',
    },
    scrollImagestyle:{
        height:90,
        width:90,
        borderWidth:2,
        borderColor:'pink',
        paddingHorizontal:5,
        borderRadius:45,
    }
}
)