import React, {useEffect, useState} from 'react';
import {View,StatusBar } from 'react-native';
import {Provider} from 'react-redux'
import FilterMovie from './container/filterMovie'
import ListMovies from './container/listMovies'
import InitialScreen from './container/Initial'
import {getMovies} from './container/client'
import store from './container/redux/store'
import styles from './style'


const Main = () => {
  const [DATA, setDATA] = useState(null)
  const [loading, setLoading] = useState(false)
  const [dataFilter, setDataFilter] = useState({
    searchName: "",
    year: ""
  })

  const handleSearch= (searchName: string, year?: any) => {
    setLoading(true)
    getMovies(searchName, year)
      .then(i => setDATA(i.Search))
    setLoading(false)
    setDataFilter({searchName, year})
  }
  const paginationSearch = (e: number) => {
    const {searchName, year} = dataFilter
    getMovies(searchName, year, e)
      .then(i => setDATA(i.Search))
  } 

   return ( 
   <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#1e1e1e"
        />
      <View >
        <View style={{flex: 0.1}}>
          <FilterMovie search={handleSearch}/>
        </View>
        <View style={{flex: 0.9, justifyContent: 'center'}}>
          {DATA ? 
            <ListMovies data={DATA} loading={loading} search={paginationSearch}/> :
            <InitialScreen />
          }
        </View>
      </View>
    </View>)
}

export default Main