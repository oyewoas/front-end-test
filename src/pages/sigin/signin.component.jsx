import React from 'react'

import './signin.styles.scss'
import FormInput from '../../component/form-input/form-input.component'
import CustomButton from '../../component/custom-button/custom-button.component'


const SignInPage = () => (
    <div className="signin">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-12 col-lg-3"></div>
                <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="legend"><span>Sign in with your email and password</span></div>
                    <form>
                        <FormInput label="Email" name="email" type="email" value="" required/>
                        <FormInput label="Password" name="password" type="password" value="" required/>
                        
                        <div className="button">
                            <CustomButton type="submit">Sign In</CustomButton>
                        </div>
                    </form>
                </div>
                <div className="col-md-3 col-sm-12 col-lg-3"></div>
            </div>
            
        </div>
    </div>
)

export default SignInPage