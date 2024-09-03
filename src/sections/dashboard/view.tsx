'use client';

// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// @components
import { useSettingsContext } from 'src/components/settings';
import { useState } from 'react';

// ----------------------------------------------------------------------

export default function DashboardView() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const settings = useSettingsContext();

  const handleClick = async () => {
    setLoading(true);
    setError('');
    setResponse('');

    try {
      // Fetch AI response if the connection is successful
      const aiRes = await fetch('http://192.168.11.174:5000/ok', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!aiRes.ok) {
        throw new Error('Failed to fetch from AI API');
      }

      const aiData = await aiRes.json();
      setResponse(`AI Response: ${aiData.status}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4">Dashboard</Typography>
      <Button variant="contained" onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Get AI Response'}
      </Button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {response && <p>{response}</p>}
      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      />
    </Container>
  );
}

//  'use client';

// // @mui
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import CircularProgress from '@mui/material/CircularProgress';
// // components
// import { useSettingsContext } from 'src/components/settings';
// import { useEffect, useState } from 'react';

// // ----------------------------------------------------------------------

// type User = {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// };

// export default function OneView() {
//   const settings = useSettingsContext();
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchUsers() {
//       try {
//         const response = await fetch('/api/users');
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchUsers();
//   }, []);

//   return (
//     <Container maxWidth={settings.themeStretch ? false : 'xl'}>
//       <Typography variant="h4">Page One</Typography>

//       <Box
//         sx={{
//           mt: 5,
//           width: 1,
//           height: 'auto',
//           borderRadius: 2,
//           bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
//           border: (theme) => `dashed 1px ${theme.palette.divider}`,
//           padding: 3,
//         }}
//       >
//         {loading ? (
//           <Box display="flex" justifyContent="center">
//             <CircularProgress />
//           </Box>
//         ) : error ? (
//           <Typography color="error">{error}</Typography>
//         ) : (
//           <List>
//             {users.map((user) => (
//               <ListItem key={user.id}>
//                 <ListItemText
//                   primary={user.name}
//                   secondary={`${user.age} years old - ${user.email}`}
//                 />
//               </ListItem>
//             ))}
//           </List>
//         )}
//       </Box>
//     </Container>
//   );
// }
