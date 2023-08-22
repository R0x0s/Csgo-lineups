import React from 'react'

const AboutHeader = () => {
  return (
    <div class="p-5 text-center bg-image rounder-3 shadow-5-strong" style={{
      backgroundImage: 'url("https://i.imgur.com/OsteYvz.jpg")',
      height: '10rem',
      marginTop:'5rem',
      marginBottom: '1rem'
    }}>
      <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="display-4">The need for lineups in 2023</h1>
            <h4 class="lead">These days, even Silvers know lineups. What about you?</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHeader