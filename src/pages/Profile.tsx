import React, { useMemo, useState } from 'react'
import {Col, Container, Row} from "react-bootstrap"
import {useDispatch, useSelector } from 'react-redux'
import { changeUserData } from '../api/authApi'
import { showAlert } from '../store/actions/alerts.actions'
import { authSelector } from '../store/selectors'

export const Profile = () => {
    const dispatch = useDispatch()
    const {username, email,phone,avatar} = useSelector(authSelector)
    const [newEmail, setNewEmail] = useState(email);
    const [name,setName] = React.useState(username)
    const [avatarUrl, setAvatarUrl] = React.useState<string>(
        'https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1',
    );
    const inputFileRef = React.useRef<HTMLInputElement>(null);


    const handleChangeImage = (event: Event): void => {
        // const file = event.target && (event.target as HTMLInputElement).files[0];
        // console.log(file)
        // if (file) {
        //     const imageUrl = URL.createObjectURL(file);
        //     setAvatarUrl(imageUrl);
        // }
    };

    const updatePhoto = () => {
        console.log("updatePhoto");
        console.log(avatarUrl)
    }

    React.useEffect(() => {
        if (inputFileRef.current) {
            inputFileRef.current.addEventListener('change', handleChangeImage);
        }
    }, []);


    const updateProfile = () => {
        try {
          console.log('data', {avatar: avatarUrl, email: newEmail});
          changeUserData({avatar: 'aHR0cHM6Ly9zdW4yLTMudXNlcmFwaS5jb20vcy92MS9pZjEvQ0FSMUFhbzN5SWljYTd4cTc3eElJTU1UbjI5Q01FLWNFNUpTSkJjOE9UTlZ0MjlKUWpuaFIwWnNYXzlJTy1Bemd3VmJmZ0I2LmpwZz9zaXplPTIwMHgwJnF1YWxpdHk9OTYmY3JvcD0xMzgsNDQsMTA0OCwxMDQ4JmF2YT0x', email: newEmail})
            .then((res) => {
                console.log('setting user', res)
                dispatch(showAlert({ text: "Зміни збережені", type: "success" }))
            })
            .catch((err) => console.log('err', err));
        } catch (error) {
          console.log('Error changing user data', error);
        }
    };

    const hasChanges = useMemo(() => newEmail !== email || avatar !== avatarUrl, [newEmail, email, avatar, avatarUrl]);


    return (
        <section className="min-vh-100 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="main-body ">
                    <div className="row ">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <input id="image" ref={inputFileRef} type="file" hidden />
                                        <label htmlFor="image">
                                            <img src={avatarUrl} alt="Avatar"/>
                                        </label>
                                        <div className="mt-3">
                                            <h4>{username}</h4>
                                        </div>
                                    </div>
                                    <hr className="my-4"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input disabled={true} onChange={e => setName(e.target.value)}
                                                   type="text"
                                                   className="form-control"
                                                   value={name}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input onChange={(e) => setNewEmail(e.target.value)} type="text" className="form-control" value={newEmail}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input disabled={true} type="text" className="form-control" value={'+380' + phone}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-9 text-secondary">
                                            <button disabled={hasChanges ? false : true} type="button" onClick={updateProfile} className="btn btn-primary px-4">Зберегти зміни</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
