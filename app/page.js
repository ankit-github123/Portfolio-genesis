import Home from "@components/home/Home"
export default function Main() {
  return (
    <section>
      <div className='main'>
        <div className='gradient'></div>
      </div>
      <div className="bg-primary h-screen w-screen px-4 md:px-32">
        <Home />
      </div>
    </section>)
}
