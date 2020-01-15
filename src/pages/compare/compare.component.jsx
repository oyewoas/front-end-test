import React from 'react'

import './compare.styles.scss'
import CustomButton from '../../component/custom-button/custom-button.component'
import FormInput from '../../component/form-input/form-input.component'
import FileUploadInput from '../../component/file-upload-input/file-upload-input.component'

const ComparePage = () => (
    <header className="compare-page">
        <div className="container">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <form>
                        <FormInput label="First Student Name" name="first_student" type="text" value="" required/>
                        <FileUploadInput title="Upload first student submission"/>

                    </form>
                </div>
                <div className="col-md-5">
                    <form>
                        <FormInput label="Second Student Name" name="second_student" type="email" value="" required/>
                        <FileUploadInput title="Upload second student submission"/>
                    </form>
                </div>
                <div className="col-md-1"></div>

                <div className="col-md-12 text-center mt-5 pt-5">
                    <CustomButton>Compare Submissions</CustomButton>
                </div>
            </div>
        </div>
    </header>
)

export default ComparePage