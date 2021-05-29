import React, { useState } from 'react';
import { SafeAreaView,ScrollView, ActivityIndicator, View } from 'react-native';
import {getUniqueMovie} from '../client'
import ItemToList from './itemRender' 
import ModalItem from '../ModalItem'
import Pagination from '../components/pagination'
import style from './style'

const listMovies = ({data, loading, search}: any) => {

  const [itemModal, setItemModal] = useState({})
  const [open, setOpen] = useState(false)

  const openModal =async (name: string) => {
    const getUnique = await getUniqueMovie(name)
    setItemModal(getUnique)
    setOpen(true)
  }
  
    return (
      <SafeAreaView style={style.container}>
      {!loading ? 
      <ScrollView>
        {data?.map((item: object, index: number) => {
          return <ItemToList item={item} openModal={openModal} key={index}/>
        })}
      <Pagination search={search}/>
      </ScrollView> 
      : 
        <ActivityIndicator  size="large" color="#0000ff"/>
      }
      <ModalItem item={itemModal} openModal={open} onClose={() => setOpen(!open)}/>
    </SafeAreaView>
)}

export default listMovies

