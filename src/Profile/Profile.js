import React from 'react'
import propTypes from 'prop-types'


const Profile =({fullName, bio, profession, children, handleName}) => {
    Profile.defaultProps = {
        fullName: 'OLUWASEYI KAYODE',
         bio:'I am really intereted in anything bringing money legitimately',
          profession:'Software Engineer', children: <img src='WhatsApp Image 2021-05-31 at 10.51.18 (1).jpeg' alt='Oluwaseyi'/>
    }

    Profile.propTypes = {
        fullName: propTypes.string, bio: propTypes.string, profession: propTypes.string, children : propTypes.string,
    }

    return (
        <div>
            <h1>
                Full Name: {fullName}.
                <br />
                <br />
                Bio: {bio}.
                <br />
                <br />
                Profession: {profession}.
            </h1>
            {children}
            <br />
            {handleName}
        </div>
    )
}


export default Profile;