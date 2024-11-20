function NewCycleForm() {
  return <h1>NewCycleForm</h1>
}
function Countdown() {

  return <h1>Countdown</h1>
}

export function Home() {
  return (
    <div>
      <NewCycleForm />
      <Countdown />
    </div>
  )
}