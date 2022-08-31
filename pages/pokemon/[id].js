import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { useEffect, useState } from "react";
import axios from "axios";
import {useRouter} from "next/router";


const pokemonDetail = ()=>{
    const router = useRouter();
    const query = router.query;
    const id = query.id;
    const POKEMON_DETAIL_URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const [pokemonDetail, setPokemonDetail] = useState(null);

    useEffect(()=>{
      if(router.isReady){
        axios.get(POKEMON_DETAIL_URL)
        .then((res)=>{
          setPokemonDetail(res.data);
        }).catch((err)=>{
          console.log(err);
        });
      }
    }, [query, router]);
    
    if(!pokemonDetail){
      return(<p>Now Loading...</p>);
    }
    return(
      <div>
        <p>Success</p>
      </div>
    );



}

export default pokemonDetail;