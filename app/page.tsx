import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import events from '@/lib/constants'

const page = () => {
  return (
    <section>
      <h1 className='text-center'>The Hub For Every Dev <br /> Event You Can't Miss.</h1>
      <p className='text-center mt-5 text-white'>Hackathons, Meetups, and Conferences, All in One Place</p>
      <ExploreBtn />

      <div className='mt-20 space-y-7'>
        <h3 className='text-white'>Featured Events</h3>
        <ul className='events text-white'>
          {events.map((event)=>(
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}

        </ul>
      </div>
    </section>
  )
}

export default page