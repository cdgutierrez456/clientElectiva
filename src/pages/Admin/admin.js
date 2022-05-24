import React from 'react';
import { Carousel } from 'antd';
import '../../scss/admin.scss'

export const Admin = () => {
  return (
    <div>
      <h2>Admin page!!!</h2>
      <Carousel afterChange={onChange}>
        <div>
          <h3 className="corrousel">Hi</h3>
        </div>
        <div>
          <h3 className="corrousel">Teacher</h3>
        </div>
        <div>
          <h3 className="corrousel">And</h3>
        </div>
        <div>
          <h3 className="corrousel">Bye Bye</h3>
        </div>
      </Carousel>
    </div>
  )
}

function onChange(a, b, c) {
  console.log(a, b, c);
}