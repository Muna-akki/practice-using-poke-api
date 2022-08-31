import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { useEffect, useState } from "react";
import axios from "axios";
import {useRouter} from "next/router";
import Footer from '../../components/footer';
import Header from '../../components/header';
const PokemonDetailPage = ()=>{
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
      <div className={styles.container}>
        <Head>
          <title>Practice Poké api {id}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.icon" />
        </Head>
        <Header />
        <main className={styles.main}>
          <h1>More About {pokemonDetail.forms[0].name}</h1>
          <div className={styles.detailWrapper}>
            <div className={styles.imageWrapper}>
              <img src={pokemonDetail.sprites.front_default} alt="front pocture"/>
              <img src={pokemonDetail.sprites.back_default}alt="back picture"/>
            </div>
            <ul>
              <li>Name: {pokemonDetail.name}</li>
              <li>Type1: {pokemonDetail.types[0].type.name}</li>
              {(pokemonDetail.types.length==2 ? 
              <li>Type2: {pokemonDetail.types[1].type.name}</li>:null)}
              <li>Height: {pokemonDetail.height}</li>
              <li>Weight: {pokemonDetail.weight}</li>
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    );



};

export default PokemonDetailPage;