import React from 'react';

const WorkoutSessions = () => {
  return(
    <section className='workout_session'>
      <div className="wrapper">
      <h1>BEST WORKOUT SESSION</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus impedit eius excepturi accusamus voluptatibus deserunt quia, possimus est.</p>
      <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae quibusdam magnam suscipit eligendi doloribus explicabo.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ducimus nihil qui nostrum vel adipisci.</p>
          </div>

          <div>
            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ducimus nihil qui nostrum vel adipisci.</p>
          </div>

          <div>
            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ducimus nihil qui nostrum vel adipisci.</p>
          </div>

          <div>
            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ducimus nihil qui nostrum vel adipisci.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSessions;