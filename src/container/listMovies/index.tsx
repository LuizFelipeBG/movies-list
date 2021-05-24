import React, { useEffect, useState } from 'react';
import { SafeAreaView,ScrollView } from 'react-native';
import {getUniqueMovie} from '../client'
import ItemToList from './itemRender' 
import ModalItem from '../ModalItem'
import style from './style'

const listMovies = ({data}: any) => {

  const [itemModal, setItemModal] = useState({})
  const [open, setOpen] = useState(false)

  const openModal =async (name: string) => {
    const getUnique = await getUniqueMovie(name)
    setItemModal(getUnique)
    setOpen(true)
  }
  
    return (
      <SafeAreaView style={style.container}>
      <ScrollView>
        {data?.map((item: object, index: number) => {
          return <ItemToList item={item} openModal={openModal} key={index}/>
        })}
      </ScrollView>
      <ModalItem item={itemModal} openModal={open} onClose={() => setOpen(!open)}/>
    </SafeAreaView>
)}

export default listMovies

