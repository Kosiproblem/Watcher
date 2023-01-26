import React from 'react'

export const Console = () => {
  return (
    <div>
        <div className="w-full h-96 relative">
          <img
            src="https://images.pexels.com/photos/7991176/pexels-photo-7991176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-96 object-cover "
          />
          <div className="absolute bottom-32 text-white text-5xl font-bold px-10">
            <div>Watch</div>
            <div className="mt-4">Something</div>
            <div className="mt-4">Incredible.</div>
          </div>
        </div>
    </div>
  )
}
