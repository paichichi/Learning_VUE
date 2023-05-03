<template>
    <div class="pokemon-table">
      <h2>List of Pokémon</h2>
      <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Type</th>
            <th>Abilities</th>
            <th>Skills</th>
          </tr>
        <tbody>
          <tr v-for="poke in pokemonList" :key="poke.name">
            <td><img :src="`${poke.sprites.front_default}`"></td>
            <td>{{ poke.name }}</td>
            <td>{{ poke.types.map(type => type.type.name).join(', ') }}</td>
            <td>{{ poke.abilities.map(ability => ability.ability.name).join(', ') }}</td>
            <td>
              <ul>
                <li v-for="skill in poke.moves.slice(0, 4)" :key="skill.move.name">{{ skill.move.name }}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        pokemonList: null,
      }
    },
    async created() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      const data = await response.json()
      this.pokemonList = await Promise.all(data.results.map(async (poke, index) => {
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
        const pokemonData = await pokemonResponse.json()
        console.log(pokemonData)
        return { poke, ...pokemonData }
      }))
    },
  }
  </script>
  
  <style>
  .pokemon-table {
    max-width: 800px;
    margin: 0 auto;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    text-align: left;
    padding: 8px;
  }
  
  th {
    background-color: #ddd;
    font-weight: bold;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  img {
    max-width: 50px;
    max-height: 50px;
    display: block;
    margin: 0 auto;
  }
  </style>
  