// 'use client';

// // @mui
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// // components
// import { useSettingsContext } from 'src/components/settings';
// import { InputAdornment, TextField } from '@mui/material';
// import Iconify from 'src/components/iconify/iconify';

// // ----------------------------------------------------------------------

// export default function AIInteractionView() {
//   const settings = useSettingsContext();

//   return (
//     <Container maxWidth={settings.themeStretch ? false : 'xl'}>
//       <Typography variant="h4"> AI Interaction </Typography>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexDirection: 'column',
//           mt: 5,
//           width: 1,
//           // bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
//           // border: (theme) => `dashed 1px ${theme.palette.divider}`,
//         }}
//       >
//         <TextField
//           variant="outlined"
//           placeholder="Search..."
//           fullWidth
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
//               </InputAdornment>
//             ),
//           }}
//           sx={{
//             width: { xs: 1, md: '50%' },
//             mt: 8,
//             '& .MuiOutlinedInput-root': {
//               borderRadius: 4,
//             },
//           }}
//         />
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexDirection: 'row',
//             mt: 5,
//             gap: 5,
//           }}
//         >
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               flexDirection: 'column',
//               mt: 4,
//             }}
//           >
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 width: 100, // Width of the box
//                 height: 100, // Height of the box
//                 borderRadius: 2,
//                 mt: 8,
//                 border: '2px solid',
//                 bgcolor: (theme) => alpha(theme.palette.background.paper, 0.8),
//                 cursor: 'pointer', // Adds a pointer cursor on hover
//                 transition: 'transform 0.2s ease-in-out', // Smooth transition for the pop-up effect
//                 '&:hover': {
//                   transform: 'scale(1.05)', // Slightly increase the size of the box on hover
//                   bgcolor: '#f5f5f5', // Change the background color to a lighter shade
//                 },
//               }}
//             >
//               <Iconify icon="ep:circle-plus-filled" width="1.5em" height="1.5em" />
//             </Box>
//             <Typography variant="h6" sx={{ mt: 2 }}>
//               New
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               flexDirection: 'column',
//               mt: 4,
//             }}
//           >
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 width: 100, // Width of the box
//                 height: 100, // Height of the box
//                 borderRadius: 2,
//                 mt: 8,
//                 border: '2px solid',
//                 bgcolor: (theme) => alpha(theme.palette.background.paper, 0.8),
//                 cursor: 'pointer', // Adds a pointer cursor on hover
//                 transition: 'transform 0.2s ease-in-out', // Smooth transition for the pop-up effect
//                 '&:hover': {
//                   transform: 'scale(1.05)', // Slightly increase the size of the box on hover
//                   bgcolor: '#f5f5f5', // Change the background color to a lighter shade
//                 },
//               }}
//             >
//               <Box
//                 component="img"
//                 src="/assets/icons/app/ic_excel.svg"
//                 sx={{ width: 40, height: 40 }}
//               />
//             </Box>
//             <Typography variant="h6" sx={{ mt: 2 }}>
//               Excel
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               flexDirection: 'column',
//               mt: 4,
//             }}
//           >
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 width: 100, // Width of the box
//                 height: 100, // Height of the box
//                 borderRadius: 2,
//                 mt: 8,
//                 border: '2px solid',
//                 bgcolor: (theme) => alpha(theme.palette.background.paper, 0.8),
//                 cursor: 'pointer', // Adds a pointer cursor on hover
//                 transition: 'transform 0.2s ease-in-out', // Smooth transition for the pop-up effect
//                 '&:hover': {
//                   transform: 'scale(1.05)', // Slightly increase the size of the box on hover
//                   bgcolor: '#f5f5f5', // Change the background color to a lighter shade
//                 },
//               }}
//             >
//               <Box
//                 component="img"
//                 src="/assets/icons/app/ic_mysql.svg"
//                 sx={{ width: 40, height: 40 }}
//               />
//             </Box>
//             <Typography variant="h6" sx={{ mt: 2 }}>
//               MySQL
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               flexDirection: 'column',
//               mt: 4,
//             }}
//           >
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 width: 100, // Width of the box
//                 height: 100, // Height of the box
//                 borderRadius: 2,
//                 mt: 8,
//                 border: '2px solid',
//                 bgcolor: (theme) => alpha(theme.palette.background.paper, 0.8),
//                 cursor: 'pointer', // Adds a pointer cursor on hover
//                 transition: 'transform 0.2s ease-in-out', // Smooth transition for the pop-up effect
//                 '&:hover': {
//                   transform: 'scale(1.05)', // Slightly increase the size of the box on hover
//                   bgcolor: '#f5f5f5', // Change the background color to a lighter shade
//                 },
//               }}
//             >
//               <Box
//                 component="img"
//                 src="/assets/icons/app/ic_postgresql.svg"
//                 sx={{ width: 40, height: 40 }}
//               />
//             </Box>
//             <Typography variant="h6" sx={{ mt: 2 }}>
//               PostgreSQL
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

/* ---------------------------------------------------------------------- */

'use client';

// @mui
import { useState } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { InputAdornment, TextField, Tabs, Tab } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import { useSettingsContext } from 'src/components/settings';
import { ChatView } from '../chat/view';
import CopyToClipboardView from '../_examples/extra/copy-to-clipboard-view';
import BasicTable from '../_examples/mui/table-view/basic-table';

// ----------------------------------------------------------------------

export default function AIInteractionView() {
  const settings = useSettingsContext();
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState<any>('');
  const [searchResults, setSearchResults] = useState<any>(null);

  const handleTabChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
  };
  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };
  const handleSearch = async () => {
    if (!searchQuery) return; // Add any additional validation as necessary
    const response = await fetch('http://192.168.11.174:5000/ask_question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: searchQuery }),
    });
    const data = await response.json();
    setSearchResults(data); // Handle your response data as needed
  };
  console.log(searchResults);
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> AI Interaction </Typography>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Search" />
          <Tab label="Consultant" />
        </Tabs>
      </Box>
      {selectedTab === 0 ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            mt: 5,
            width: 1,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              width: { xs: 1, md: '50%' },
              mt: 8,
              '& .MuiOutlinedInput-root': {
                borderRadius: 4,
              },
            }}
          />
          {searchResults && <BasicTable data={searchResults.result} />}
          {/* <CopyToClipboardView />
          <BasicTable /> */}
        </Box>
      ) : (
        <ChatView />
      )}
    </Container>
  );
}
