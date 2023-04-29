import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const [accept, setAccept] = useState(false);

    // now here we have to pass some data(email, password) throw context and that we can find here,,,steps below
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(email, password, name, photo);

        createUser(email, password)
        .then((result) => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => {
            console.log(error);
        })

        // const displayData = { displayName: name, photoURL: photo };
        // updateUser(displayData)
        // .then(() => {

        // })    
        // .catch(error => {
        //     console.log(error);
        // });


    }
    const handleTerms = event => {
        setAccept(event.target.checked);
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo Url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                    onClick={handleTerms}
                     type="checkbox" 
                     name='accept' 
                     label={<>Accept <Link to='/terms'>Terms and condition</Link> </>} />
                </Form.Group>
                <Button disabled={!accept} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className='text-secondary'>
                   Already have and account <Link to='/Login'>Login</Link>
                </Form.Text>
                <Form.Text className='text-success'>

                </Form.Text>
                <Form.Text className='text-danger'>

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;