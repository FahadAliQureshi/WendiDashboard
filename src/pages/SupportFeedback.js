import React, { useState, useEffect } from 'react';
import {
  Typography,
  Paper,
  Container,
  Button,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
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
  marginTop: '30px',
}));

const useStyles = {
  submitButton: {
    marginTop: 3,
  },
};

function SupportAndFeedbackScreen() {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState('');

  const [supportAgent, setSupportagent] = useState([]);

  const [ticketsBackend, setTicketsBackend] = useState([
    {
      id: tickets.length + 1,
      title: 'newTicket',
      status: 'Open',
      user: 'John Doe',
      description: 'Issue description',
      priority: 'High',
      supportAgent: '',
    },
    {
      id: tickets.length + 2,
      title: 'newTicket',
      status: 'Pending',
      user: 'Doe',
      description: 'Issue description',
      priority: 'High',
      supportAgent: '',
    },
    {
      id: tickets.length + 3,
      title: 'newTicket',
      status: 'Completed',
      user: 'Khan Doe',
      description: 'Issue description',
      priority: 'High',
      supportAgent: '',
    },
  ]);

  useEffect(() => {
    // Fetch tickets from the backend here
    // fetchTicketsFromBackend()
    //   .then((fetchedTickets) => {
    //     setTickets(fetchedTickets);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching tickets:', error);
    //   });
  }, []);

  // const fetchTicketsFromBackend = async () => {
  //   try {
  //     // Perform a fetch request to your backend API
  //     const response = await fetch('/api/tickets'); // Adjust the URL as needed
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  return (
    <FormContainer maxWidth="md">
      <Typography variant="h5" gutterBottom>
        Support and Feedback
      </Typography>

      {/* Display the list of tickets */}
      <div>
        {ticketsBackend.map((ticket, index) => (
          <StyledPaper elevation={3}>
            <div key={ticket.id} style={{ marginTop: '20px' }}>
              <strong>Ticket #{ticket.id}</strong> - {ticket.title}
              <br />
              User: {ticket.user}
              <br />
              Issue Description: {ticket.description}
              <br />
              Priority: {ticket.priority}
              <br />
              {/* Status: {ticket.status} */}
              {/* Additional ticket details */}
              <FormControl fullWidth required margin="normal">
                <InputLabel>Agent</InputLabel>
                <Select
                  value={supportAgent[index]}
                  onChange={(event) => {
                    const newSupportAgents = [...supportAgent];
                    newSupportAgents[index] = event.target.value;
                    setSupportagent(newSupportAgents);
                  }}
                >
                  <MenuItem value="agentOne">Agent 1</MenuItem>
                  <MenuItem value="agentTwo">Agent 2</MenuItem>
                  <MenuItem value="agentThree">Agent 3</MenuItem>
                </Select>
                <Typography variant="h6" gutterBottom style={{ marginTop: '10px' }}>
                  Status: {ticket.status}
                </Typography>
              </FormControl>
            </div>
          </StyledPaper>
        ))}
      </div>

      {/* ... other functionalities ... */}
    </FormContainer>
  );
}

export default SupportAndFeedbackScreen;
