import React, { useEffect,useState } from 'react';
import { Modal, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    outline: 'none',
  },
  textField: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3f51b5',
    color: 'white',
    fontWeight: 'bold',
  },
})

const Forms = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  console.log(useParams())
  const [movieDetails, setMovieDetails] = useState(null);
  const [formData, setFormData] = useState({
    movieID: id,
    timeSlot: '',
    bookingFare: '22$',
    email: '',
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));

    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  return (
    <div>
      <Modal open='open' onClose={handleClose} className={classes.modal}>
        
        <form className={classes.form} onSubmit={handleSubmit}>
      <Button style={{backgroundColor:'#3f51b5',fontWeight:'bold',color:'whitesmoke',marginRight:25,marginBottom:5}} className={classes.button} component={Link}  to={`/movie/${id}`}>Back</Button>

          <TextField
            className={classes.textField}
            label="Movie ID"
            name="movieID"
            value={id}
            required
            disabled
            
          />
          
          <TextField
            className={classes.textField}
            label="Time Slot"
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.textField}
            label="Booking Fare"
            name="bookingFare"
            value={formData.bookingFare}
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.textField}
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Button type="submit" className={classes.button}>
            Submit
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Forms;
