import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View } from 'react-native';
import {Provider} from 'react-redux'
import FilterMovie from './container/filterMovie'
import ListMovies from './container/listMovies'
import {getMovies} from './container/client'
import store from './container/redux/store'
import styles from './style'


const Main = () => {
  const [DATA, setDATA] = useState([{Title: ""}])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    getMovies("war")
      .then(i => {
        setDATA(i.Search)
      })
  },[])

  const handleSearch= (searchName: string, year?: string) => {
    setLoading(true)
    const a = getMovies(searchName, year)
      .then(i => setDATA(i.Search))
    setLoading(false)
  }

   return ( 
   <View style={styles.container}>
      <Provider store={store}>
        <FilterMovie search={handleSearch}/>
        {!loading ? 
          <ListMovies data={DATA} /> :
          <ActivityIndicator style={styles.container} size="large" color="#0000ff"/>
        }
      </Provider>
    </View>)
}

export default Main