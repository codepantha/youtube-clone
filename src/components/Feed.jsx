import { Box, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { Sidebar, Videos } from './';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 }
        }}
      >
        <Sidebar />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2022 @Codepantha
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          New <span style={{ color: '#f31503' }}>videos</span>
        </Typography>

        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
