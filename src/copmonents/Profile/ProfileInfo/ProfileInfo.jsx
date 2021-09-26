import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          alt="back"
        />
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5AnZHQwWcN40OzuunkcUWVfdVmtLHmtGvqFe4lSBd-65uftHv8HNVX3FcJaOLP0vqac&usqp=CAU"
          alt="avatar"
        />
        <div className={s.description}>Description</div>
      </div>
    </div>
  )
}

export default ProfileInfo