import React from "react";

import "./Register.scss";

function Register() {
    return (
        <div className="Register_Container">
            <div className="Section_Left">
                <div className="Icon">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30"><path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z"/><circle cx="12" cy="6" r="6"/></svg>
                </div>
                <div className="HeaderText">
                    Let us help you to manage your everyday tasks.
                </div>
                <div className="Description">
                    Our registration process is very simple and easy. It will take only 2 minutes to create your account.
                </div>
                <div className="UserReviewCard">
                    <div className="UserReview">
                        i'm impressed with the simplicity of this app. it's very easy to use and it's free. i'm using it for a month now and i'm very satisfied with it.
                    </div>
                    <div className="UserInfo">
                        <img className="UserImage" src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=UnibrowNatural&mouthType=Grimace&skinColor=Yellow'/>
                        <div className="UserData">
                            <div className="UserName">
                                Jonas Kim
                            </div>
                            <div className="UserProfession">
                                Product Designer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Section_Right">
                <div className="Info">
                    <div className="Header">Get Started</div>
                    <div className="ShortDescription">Create your account now</div>
                </div>
                <form className="UserForm">
                    <div className="UserFullName">
                        <label htmlFor="UserFullName">Full name</label>
                        <input className="UserFullName" type="text" id="UserFullName" name="UserFullName" />
                    </div>
                    <div className="UserEmail">
                        <label htmlFor="UserEmail">Email</label>
                        <input className="UserEmail" type="email" id="UserEmail" name="UserEmail" />
                    </div>
                    <div className="UserPassword">
                        <label htmlFor="UserPassword">Password</label>
                        <input className="UserPassword" type="password" id="UserPassword" name="UserPassword" />
                    </div>
                    <div className="UserDataSubmission">
                        <button className="Submit" type="submit">Sign Up</button>
                    </div>
                </form>
                <div className="UserExist">
                    <div className="UserExistText">Already have an account?</div>
                    <a className="UserExistLogin" href="#">Login</a>
                </div>
            </div>
        </div>
    );
}

export default Register;