import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')


const ApointmentForm = ({ modalIsOpen, closeModal, apointmentOn }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-brand text-center">{apointmentOn}</h2> <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="row">
                        <div class="col">
                        <label for="floatingInput">Name</label>
                            <input type="text" class="form-control" placeholder="First name" aria-label="Name" />
                        </div>
                       
                    </div> <br />
                    <div class="form-floating mb-3">
                        <label for="floatingInput">Phone</label>
                        <input type="number" class="form-control" id="floatingInput" placeholder="+1588399344" />
                    </div>
                    <div class="form-floating mb-3">
                        <label for="floatingInput">Email address</label>
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    </div>
                    <div class="form-floating">
                        <label for="floatingPassword">Password</label>
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    </div> <br />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div class="form-floating mb-3">
                                    <select id="inputState" class="form-control">
                                        <option selected>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                        <option>Gay</option>
                                        <option>Lesbian</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" id="floatingInput" placeholder="Your age" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" id="floatingInput" placeholder="Weight" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>

        </div>
    );
};

export default ApointmentForm;