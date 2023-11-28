import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';


const Dashboard = () => {
  const localData = window.localStorage.getItem('loggedFocusEvent');
  if (localData === null) {
    return (
      <PageContainer title="Bienvenido a nuestro Dashboard" description="Bienvenido a nuestro servicio">
        <Box>
          <Typography variant="h5">
            ¡Bienvenido! Inicia Sesión y disfruta de tus eventos!.
          </Typography>
          {/* Puedes agregar más contenido o enlaces de registro aquí */}
        </Box>
      </PageContainer>
    );
  }
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
