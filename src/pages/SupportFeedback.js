import React, { useState } from 'react';
import {
  Typography,
  Paper,
  Container,
  Button,
  TextField,
  Grid,
} from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
}));

const StyledForm = styled('form')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const useStyles = {
  submitButton: {
    marginTop: 3,
  },
};

function SupportAndFeedbackScreen() {
  const [newTicket, setNewTicket] = useState('');
  const [tickets, setTickets] = useState([]);

  const handleCreateTicket = () => {
    // Simulating the creation of a new ticket
    const newTicketData = {
      id: tickets.length + 1,
      title: newTicket,
      status: 'Open',
    };

    setTickets([...tickets, newTicketData]);
    setNewTicket('');
  };

  return (
    <FormContainer maxWidth="md">
      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom>
          Support and Feedback
        </Typography>

        {/* ... other content ... */}
        
        {/* 2.1 Ticket Management */}
        <Typography variant="subtitle1" gutterBottom>
          2.1 Ticket Management
        </Typography>
        <StyledForm>
          <TextField
            required
            fullWidth
            label="New Ticket"
            variant="outlined"
            value={newTicket}
            onChange={(e) => setNewTicket(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateTicket}
            sx={useStyles.submitButton}
          >
            Create Ticket
          </Button>
        </StyledForm>
        <div>
          {/* Display the list of tickets */}
          {tickets.map((ticket) => (
            <div key={ticket.id}>
              Ticket #{ticket.id} - {ticket.title} - {ticket.status}
            </div>
          ))}
        </div>

        {/* ... other functionalities ... */}
        
      </StyledPaper>
    </FormContainer>
  );
}

export default SupportAndFeedbackScreen;
