import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import RoundCard from './_components/RoundCard'
import {rounds} from './data/rounds'

export default function Rounds() {

  const roundItems = rounds.map((round) =>
    <RoundCard
      roundName={round.name}
      roundID={round.id}
    />
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center text-6xl">
        <h1>
          Rounds
        </h1>

        <div className="flex flex-row items-center">
          {roundItems}
        </div>

      </main>
    </div>
  )
}
