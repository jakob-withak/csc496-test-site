import * as React from 'react'
//import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function AllPokemon({ pageContext: { allPokemon } }) {
  return (
    <Layout pageTitle="Pokemon">
    <div>
      <ul>
        {allPokemon.map(pokemon => (
          <li key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  )
}